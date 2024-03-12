const express = require('express');
const cors = require('cors');
const port = 3000;
const Task = require('./models/task');
const Course = require('./models/course')
require('./db/conn');

const app = express();
app.use(cors());
app.use(express.json());

// Add a new task
app.post('/tasks', async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//Add a new Course
app.post('/addCourse',async (req , res)=>{
    try{
        const newCourse = await Course.create(req.body);
        res.status(201).json(newCourse);
    }
    catch(error)
    {
      console.error(error);
      res.status(500).json({message:'Internal Server Error'});
    }
}); 

// Get tasks by courseId
app.get('/tasks/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const tasks = await Task.find({ courseId: courseId });
        if (tasks.length === 0) {
            res.status(404).json({ message: 'No tasks found for the provided course ID' });
        } else {
            res.json(tasks);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
