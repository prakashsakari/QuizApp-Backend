const express = require('express');
const cors = require('cors');
const quizzes = require("./db/quizzes");

const app = express(); //Creating a server
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello geeks");
})

app.get("/quiz", (req, res) => {
    res.send(quizzes.data)
})


app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
