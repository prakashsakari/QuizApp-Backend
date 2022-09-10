const express = require('express');
const cors = require('cors');

const quizRouter = require("./router/quiz.router");
const { loginRouter, signupRouter, authVerify } = require("./router/auth.router");

const app = express(); //Creating a server
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello geeks");
})

app.use("/quiz", quizRouter);

app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
