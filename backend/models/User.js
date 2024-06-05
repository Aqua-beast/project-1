const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    roles: {
        type: String, 
        required: true,
        enum: ["user", "admin"],
        default: "user",
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;