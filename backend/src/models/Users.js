class User {
    /**
     * 
     * @param {*name} string unique username of user
     * @param {*password} hashed password of user
     * @param {*pool} connection pool 
     * @returns user_id of newly created user
     * @description If username not unique, throw "Already exists".
     * If insertion failed throw "Insert error".
     * Other SQL errors also thrown
     */
    static async createUser(name, password, pool){

        // check if user already exists
        const checkQuery = 'SELECT user_id FROM Users WHERE user_name=$1';
        try{
            const result = await pool.query(checkQuery, name);
            if (result.rowCount==0){
                // doesn't already exist
                const insertQuery = 'INSERT INTO Users(user_name, password) VALUES ($1, $2) RETURNING user_id';
                const result = await pool.query(insertQuery, [name, password]);
                if (result.rowCount==1){
                    //return userid
                    return result.rows[0]
                }
                else{
                    //error code
                    throw "Insert error"
                }
            }
            else{
                throw "Already exists"
            }
        } catch (error){
            throw error;
        }
    }
}
module.exports = User