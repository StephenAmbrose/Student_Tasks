const mongoose = require('mongoose');

// Schema for Course
const CourseSchema = new mongoose.Schema({
    courseId: Number,
    courseName: String
});

// Model for Course
const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
