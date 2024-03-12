document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const courseForm = document.getElementById('courseForm');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const courseId = document.getElementById('taskCourseId').value;
        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('taskDueDate').value;
        const details = document.getElementById('taskDetails').value;

        const taskData = {
            courseId,
            taskName,
            dueDate,
            details
        };

        addTask(taskData);
    });

    courseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const courseId = document.getElementById('courseId').value;
        const courseName = document.getElementById('courseName').value;

        const courseData = {
            courseId,
            courseName
        };

        addCourse(courseData);
    });

    function addTask(taskData) {
        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add task');
            }
            return response.json();
        })
        .then(data => {
            console.log('Task added:', data);
        })
        .catch(error => console.error('Error adding task:', error.message));
    }

    function addCourse(courseData) {
        fetch('http://localhost:3000/addCourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(courseData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add course');
            }
            return response.json();
        })
        .then(data => {
            console.log('Course added:', data);
        })
        .catch(error => console.error('Error adding course:', error.message));
    }
});
