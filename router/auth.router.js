const express = require('express');
const jwt = require("jsonwebtoken");

const loginHandler = require("../controllers/authController");
const userdata = require("../db/users");

const loginRouter = express.Router();

loginRouter.route("/")
    .post(loginHandler)

module.exports = loginRouter;