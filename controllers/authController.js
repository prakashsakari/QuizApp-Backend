const express = require('express');
const jwt = require("jsonwebtoken");
const userdata = require("../db/users");

const loginHandler = (req, res) => {
    const { username, password } = req.body;
        const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
        if(isUserVerified){
            const token = jwt.sign({id: username}, process.env.SECRET_TOKEN)
            res.json({username, token, message: "User Verfied"})
        }else{
            res.status(401).json({message: "Invalid Credentials"})
        }
}

module.exports = loginHandler;