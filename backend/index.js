const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/AuthRouter');


dotenv.config();

// creating application
const app = express();

// adding middlewares
app.use(express.json());

// adding routes 
app.use('/auth', authRouter);

// setting up Environment Variables
const port = process.env.PORT || 3000;
const url = process.env.MONGO_DB_URL;

mongoose.connect(url)
.then(()=>{
    app.listen(port, ()=>{
        console.log('server is listening on port 3000');
    })
})
.catch((err)=>{
    console.log(`the error is ${err}`);
})
