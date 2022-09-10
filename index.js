const express = require('express');
const cors = require('cors');
const quizRouter = require("./router/quiz.router");
const userdata = require("./db/users");
const e = require('express');

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
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
    if(isUserVerified){
        res.json({message: "User Verfied"})
    }else{
        res.status(401).json({message: "Invalid Credentials"})
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
