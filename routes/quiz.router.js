const express = require('express');
const quizRouter = express.Router();
const quizzes = require("../db/quizzes");

quizRouter.route("/")
    .get((req, res) => {
        res.json(quizzes)
    })

module.exports = quizRouter;