const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/AuthRouter');
const cors = require('cors');

dotenv.config();

// creating application
const app = express();

app.use(cors({
    origin: "http://localhost:3001"
}))

// adding middlewares
app.use(express.json());

// adding routes 
app.use('/auth', authRouter);

app.get('/', (req, res)=> {
    res.status(200).json({message: "hello world"})
})

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
