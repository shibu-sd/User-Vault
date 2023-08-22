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
            
        const user = new User({name, email, phone, work, password, cpassword});
            
        const userRegister = await user.save();

        if (userRegister)
            res.status(201).json({message : "User Registered Successfully"});
        else
            res.status(500).json({error : "Failed to register"});

    }
    catch (err)
    {
        console.log(err);
    }
});

router.post('/signin', async (req, res) => {
    try
    {
        const {email, password} = req.body;
        if (!email || !password){
            return res.status(400).json({error : "Invalid Credentials"});
        }

        const userLogin = await User.findOne({email : email});
        console.log(userLogin);

        if (!userLogin)
            res.status(400).json({error : "user error"});
        else
            res.json({message : "User Signin Successfully"});
    }
    catch (err)
    {
        console.log(err);
    }
});

module.exports = router;