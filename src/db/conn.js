const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Student_Tasks')
.then(()=>console.log('Database is connected'))
.catch(()=>console.log('database is not connected'))