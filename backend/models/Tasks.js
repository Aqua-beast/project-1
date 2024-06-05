const mongoose = require('mongoose');

const taskScheme = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    taskName: {
        type: String, 
        required: true,
    },
    dueDate: {
        type: Date, 
        required: true,
        default: () => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setTime(0, 0, 0, 0);
        },
    },
    status: {
        type: String,
        enum: ['completed', 'pending', 'ongoing'],
        required: true,
    },
    priority: {
        type: Number,
        enum: [1, 2, 3],
        required: true,
    }
})

// taskScheme.index({dueDate: 1});
// descending order - -1
// ascending order - 1

const taskModel = new mongoose.model('Task' , taskScheme);
module.exports = taskModel;