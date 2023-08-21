const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({path:'./.env'});

require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middleware
const middleware = (req, res, next) => {
    console.log("Hello from middleware");
    next();
}

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/about', middleware, (req, res) => {
    res.send("About");
});

app.get('/contact', (req, res) => {
    res.send("Contact");
});

app.get('/signin', (req, res) => {
    res.send("Signin");
});

app.get('/signup', (req, res) => {
    res.send("Signup");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${PORT}`);
});