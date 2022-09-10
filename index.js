const express = require('express');
const cors = require('cors');
const quizRouter = require("./router/quiz.router");
const userdata = require("./db/users");

const app = express(); //Creating a server
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello geeks");
})

app.use("/quiz", quizRouter);

app.post("/auth/login", (req, res) => {
    const { username, password } = req.body;
    console.log( { username, password} );
    res.json({username, password, message: "got the values"})
})

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
