const Task = require('../models/Tasks');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const secret = process.env.SECRET_KEY;

const createNewTask = async (req, res) => {
    const { taskName, dueDate, status, priority } = req.body;
    try {
        const cookies = cookie.parse(req.headers.cookie);
        const token = cookies.UserInfo;
        const decodedToken = jwt.decode(token, secret);
        const userId = decodedToken.userId;
        const newTask = new Task({ userId, taskName, dueDate, status, priority });

        await newTask.save()
        res.status(200).json({ message: 'Task created successfully !' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error!' });
    }
}

const getTasks = async (req, res) => {
    try {
        const cookies = cookie.parse(req.headers.cookie);
        const token = cookies.UserInfo;
        const decodedToken = jwt.decode(token, secret);
        const userId = decodedToken.userId;
        const user = await User.findOne({ "_id": userId });
        if (user.roles !== "admin") {
            return res.status(400).json({ error: "You are not an admin !" });
        }
        const task = await Task.find();
        res.status(200).json({ message: task });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}

const getUserBasedTask = async (req, res) => {
    try {
        const cookies = cookie.parse(req.headers.cookie);
        const token = cookies.UserInfo;
        const decodedToken = jwt.decode(token, secret);
        const userId = decodedToken.userId;
        const task = await Task.findOne({ userId });
        if (!task) {
            return res.status(400).json({ error: "You are not valid user." })
        }
        res.status(200).json({ message: task });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const updateTask = async (req, res) => {
    try {
        const cookies = cookie.parse(req.headers.cookie);
        const token = cookies.UserInfo;
        const decodedToken = jwt.decode(token, secret);
        const userId = decodedToken.userId;
        const newTask = req.body;
        const id = req.params.id;
        const task = await Task.updateOne({ userId: userId, _id: id }, newTask);
        if (task.acknowledged === "false") {
            return res.status(400).json({ message: "You are not a valid user to edit the task" });
        }
        res.status(200).json({ message: `The task has been updated: ${task.acknowledged}` });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}

const pendingTask = async (req, res) => {
    try {
        const cookies = cookie.parse(req.headers.cookie);
        const token = cookies.UserInfo;
        const decodedToken = jwt.decode(token, secret);
        const userId = decodedToken.userId;
        const task = await Task.find({ userId: userId, status: "pending" });
        res.status(200).json({ message: task });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const ongoingTask = async (req, res) => {
    try {
        const cookies = cookie.parse(req.headers.cookie);
        const token = cookies.UserInfo;
        const decodedToken = jwt.decode(token, secret);
        const userId = decodedToken.userId;
        const task = await Task.find({ userId: userId, status: "ongoing" });
        res.status(200).json({ message: task });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const completedTask = async (req, res) => {
    try{
        
        const task = await Task.find({ userId: userId, status: "completed" });
        res.status(200).json({ message: task });
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
} 

const deleteTask = async(req, res) => {
    try{
        const cookies = cookie.parse(req.headers.cookie);
        const token = cookies.UserInfo;
        const decodedToken = jwt.decode(token, secret);
        const userId = decodedToken.userId;
        const id = req.params.id;
        const task = await Task.deleteOne({userId: userId, _id: id});
        if(!task){
            return res.status(400).json({error: "There is no task to be deleted."})
        }
        res.status(200).json({message: 'The task has been deleted.'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

const getPriorityTasks = async(req, res) => {
    try{
        const cookies = cookie.parse(req.headers.cookie);
        const token = cookies.UserInfo;
        const decodedToken = jwt.decode(token, secret);
        const userId = decodedToken.userId;
        const priority = req.params.rating;
        // priority is 1, 2, 3
        const task = await Task.find({userId, priority});
        if(!task){
            return res.status(400).json({error: 'No tasks found.'})
        }
        res.status(200).json({message: task});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

module.exports = { createNewTask, getTasks, getUserBasedTask, updateTask, pendingTask,  completedTask, ongoingTask, deleteTask, getPriorityTasks};