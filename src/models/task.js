const mongoose = require('mongoose');

// Schema for Task
const TaskSchema = new mongoose.Schema({
    courseId: String,
    taskName: String,
    dueDate: Date,
    details: String
});

// Model for Task
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
