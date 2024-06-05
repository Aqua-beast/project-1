const bcrypt = require('bcryptjs');
const validator = require('email-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const dotenv = require('dotenv').config();

const secret = process.env.SECRET_KEY;

const getSignUped = async (req, res) => {
    const {name, email, password, roles} = req.body;

    try{
        const user = await User.findOne({email: email});
        if(user){
            return res.status(400).json({error: 'The user exists for the given email id.'});
        }
        if(!validator.validate(email)){
            return res.status(400).json({error: 'Email id is not right.'})
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({name, email, password: hash, roles});
        await newUser.save();
        res.status(201).json({message: 'The user has been created for the given credentials.'})
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

const loggedIn = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: 'There exist no user with the given mail id.'});
        }
        if(!bcrypt.compareSync(password, user.password)){
            return res.status(400).json({error: 'The password is incorrect.'});
        }else{
            const token = await jwt.sign({userId: user._id}, secret, {expiresIn: '1h'});
            res.setHeader('Set-Cookie', cookie.serialize('UserInfo', token, {httpOnly: true, maxAge: 3600000}));
            res.status(200).json({message: 'The user has successfully loggedIn'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

const loggedOut = async (req, res) => {
    try {
        const cookies = cookie.parse(req.headers.cookie || '');
        if (cookies.UserInfo) {
            res.setHeader('Set-Cookie', 'UserInfo=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;');
            res.status(200).json({ message: 'Cookie deleted successfully' });
        } else {
            res.status(404).json({ error: 'Cookie not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {getSignUped, loggedIn, loggedOut};
