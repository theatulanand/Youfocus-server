const authController = require('../Controllers/authController');

const authRouter = require('express').Router();

authRouter.post("/api/register", authController.register);
authRouter.post("/api/login", authController.login);


module.exports = authRouter;