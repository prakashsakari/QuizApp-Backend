const express = require("express");
const quizRouter = express.Router();
const quizzes = require('../db/quizzes');
const  authVerify  = require("../middleware/authverify");

quizRouter.route("/")
    .get(authVerify, (req, res) => {
        res.json(quizzes)
    });

module.exports = quizRouter;