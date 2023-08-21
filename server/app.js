const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/about', (req, res) => {
    res.send("About");
})

app.get('/contact', (req, res) => {
    res.send("Contact");
})

app.get('/signin', (req, res) => {
    res.send("Signin");
})

app.get('/signup', (req, res) => {
    res.send("Signup");
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})