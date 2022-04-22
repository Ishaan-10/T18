const express = require('express');
const Student = require('./models/student');
const Teacher = require('./models/teacher');
const app = express();

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running")
})
