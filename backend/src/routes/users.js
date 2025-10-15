const express = require('express');
const userController = require('../controllers/userController');
module.exports = (pool) =>{
    const router=express.Router()
    const controller = userController(pool);

    // apparently since creating User should be idempotent
    router.put('/createUser', controller)
}