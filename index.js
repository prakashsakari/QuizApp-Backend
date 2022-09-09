const express = require('express');
const quizRouter = require("./routes/quiz.router");


const app = express(); //Creating a server
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello geeks");
})

app.use("/quiz", quizRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
