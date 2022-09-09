const express = require('express');

const app = express(); //Creating a server

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello geeks");
})

app.listen(process.env.PORT || PORT, () => {
    console.log("server started....");
})
