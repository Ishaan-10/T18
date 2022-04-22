const Student = require('./models/student');
const Teacher = require('./models/teacher');

// const teacher = {
//     name:"Ishaan",
//     email:"b.ishaan10@gmail.com",
//     subject:"Computer Science"
// }
const createTeacher = async (obj) =>{
    const {name,email,subject} = obj;
    const newTeacher = new Teacher({name,email,subject});
    await newTeacher.save();
}

// const student = {
//     name:"Ishaan",
//     email:"b.ishaan10@gmail.com",
//     grade:9,
//     section:"A"
// }
const createStudent = async (obj)=>{

    const {name,email,grade,section} = obj;
    const newStudent = new Student({name,email,grade,section});
    await newStudent.save();

}

const assignTeacherToStudent = async (student_id,teacher_id)=>{
    const teacher = Teacher.findById(teacher_id);
    const student = Student.findByID(student_id);
    student.assignedTeacher = teacher;
    student.save();
}