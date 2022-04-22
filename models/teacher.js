const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String
})

const Teacher = new mongoose.model(teacherSchema,'Teachers')