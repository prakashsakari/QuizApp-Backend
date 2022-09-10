const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const userdata = require("./db/users");

const quizRouter = require("./router/quiz.router");
const loginRouter = require("./router/auth.router");

const app = express(); //Creating a server
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello geeks");
})

app.use("/quiz", quizRouter);

app.use("/auth/login", loginRouter)

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
