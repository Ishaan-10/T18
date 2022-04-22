const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    class:Number,
    section:String,
    assignedTeacher:{
        type:mongoose.Types.ObjectId,
        ref:'Teacher'
    }
})

const Student = new mongoose.model('Student',studentSchema)

module.exports = Student;