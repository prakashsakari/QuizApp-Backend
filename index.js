const express = require('express');
const cors = require('cors');
const quizzes = require("./db/quizzes");
const quizRouter = require("./router/quiz.router");

const app = express(); //Creating a server
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello geeks");
})

app.use("/quiz", quizRouter);



app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
