const express = require('express');
const cors = require('cors');

const quizRouter = require("./router/quiz.router");
const { loginRouter, signupRouter } = require("./router/auth.router");
const routeNotFound = require("./middleware/routeNotFound");
const quizzes = require("./db/quizzes");

const app = express(); //Creating a server
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json(quizzes);
})

app.use("/quiz", quizRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
app.use(routeNotFound);

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
