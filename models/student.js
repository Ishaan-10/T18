const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    grade:Number,
    section:String,
    assignedTeacher:{
        type:mongoose.Types.ObjectId,
        ref:'Teacher'
    }
})

const Student = new mongoose.model('Student',studentSchema)

module.exports = Student;