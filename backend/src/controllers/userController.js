const User = required('../models/Users');
const bcrypt = required('bcrypt');
module.exports = (pool) =>{
    const userModel= User(pool)
    return {
        /**
         * 
         * @param {*req} A JSON containing a user_name and a password. User name must be at least 1 character long and at most
         * 100 characters. Password must be at least 14 characters long, contains 1 special character, 1 capital letter and 1 number
         * @description If successful, returns the user_id of the newly created user
         */
        async Register(req, res) {
            try {
                const userName= req.params.userName;
                if (userName.length<1 || userName.length>100){
                    res.status(400).json({error: "username either less than 1 character or greater than 100 characters"});
                }
                const password=req.params.password;
                if (password.length < 14) {
                    res.status(400).json({ error: "password too short" });
                } else if (!/\d/.test(password)) {
                    res.status(400).json({ error: "password must contain at least 1 number" });
                } else if (!/[A-Z]/.test(password)) {
                    res.status(400).json({ error: "password must contain at least 1 capital letter" });
                } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
                    res.status(400).json({ error: "password must contain at least 1 special character" });
                }
                const hash = await bcrypt.hash(password, 10);
                const user_id = await userModel.createUser(userName, password, pool)
                res.json(user_id)
            }
            catch (error){
                console.error("Error", erorr);
                res.status(500).json({error:error})
            };
        }
    };
}