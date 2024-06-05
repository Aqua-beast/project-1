const express = require('express');
const router = express.Router();
const verifyToken = require('../Helper')
const TaskController = require('../controllers/TaskController')

// 1 create task
router.post('/new', verifyToken, TaskController.createNewTask);

// 2 edit task
router.put('/edit/:id', verifyToken, TaskController.updateTask);

// 3 delete task
router.delete('/delete/:id', verifyToken, TaskController.deleteTask);

// 4 pending task
router.get('/pending', verifyToken, TaskController.pendingTask);

// 5 completed task
router.get('/completed', verifyToken, TaskController.completedTask)

// 6 priority based tasks
router.get('/priority/:rating', verifyToken, TaskController.getPriorityTasks)

// 7 get tasks
router.get('/get-all', verifyToken, TaskController.getTasks);

// 8 get user based task
router.get('/get', verifyToken, TaskController.getUserBasedTask);

// 9 get ongoing tasks
router.get('/ongoing', verifyToken, TaskController.ongoingTask);

module.exports = router;