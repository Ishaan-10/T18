const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    class:Number,
    section:String,
    assignedTeacher:{
        type:mongoose.Types.ObjectId,
        ref:'Teachers'
    }
})

const Student = new mongoose.model(studentSchema,'Students')