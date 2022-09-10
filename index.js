const express = require('express');
const quizzes = require("./db/quizzes");

const app = express(); //Creating a server

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello geeks");
})

app.get("/quiz", (req, res) => {
    res.send(quizzes)
})


app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
