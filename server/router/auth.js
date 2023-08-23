const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send("Hello World from router");
});

router.post('/register', async (req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error : "Please fill all the fields properly"});
    }

    try
    {
        const userExist = await User.findOne({email:email});

        if (userExist)
            return res.status(422).json({error : "Already Registered ! Please Sign In"});
        else if (password != cpassword)
            return res.status(422).json({error : "Password did not match"});
        else
        {
            const user = new User({name, email, phone, work, password, cpassword});
            
            const userRegister = await user.save();

            if (userRegister)
                res.status(201).json({message : "User Registered Successfully"});
            else
                res.status(500).json({error : "Failed to register"});
        }
    }
    catch (err)
    {
        console.log(err);
    }
});

router.post('/signin', async (req, res) => {
    try
    {
        let token;
        const {email, password} = req.body;
        if (!email || !password){
            return res.status(400).json({error : "Invalid Credentials"});
        }

        const userLogin = await User.findOne({email : email});

        if (userLogin){
            const match = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true
            });
            
            if (!match)
                res.status(400).json({error : "Invalid Credentials"});
            else
                res.json({message : "User Signin Successfully"});
        }
        else{
            res.status(400).json({error : "Invalid Credentials"});
        }
    }
    catch (err)
    {
        console.log(err);
    }
});

module.exports = router;