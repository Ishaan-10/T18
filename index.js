const {
    createTeacher,
    createStudent,
    assignTeacherToStudent,
    getTeacher,
    getStudents,
    editStudent,
    getAssignedStudentsToTeacher} = require('./functions');

// Connectig db
const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/student-teacher', { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Database Connected")
});


const teacher = {
    name:"Ishaan",
    email:"b.ishaan10@gmail.com",
    subject:"Computer Science"
}
// createTeacher(teacher);

const student = {
  name:"Ishaan",   
  email:"b.ishaan10@gmail.com",
  grade:9,
  section:"A"
}

// createStudent(student);

// assignTeacherToStudent("6263985ccf956be165396451","6263962e57e9b91c64a6430c");
// getTeacher("Computer Science")
// getStudents(9,"A");

const updatedStudent = {
  name:"Ishaan",   
  email:"b.ishaan10@gmail.com",
  grade:10,
  section:"C"
}
// editStudent("62639b1f5bb77cd9c8d506ac",updatedStudent)
getAssignedStudentsToTeacher("6263962e57e9b91c64a6430c")