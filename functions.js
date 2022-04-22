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
    const teacher = await Teacher.findById(teacher_id);
    const student = await Student.findById(student_id);
    student.assignedTeacher = teacher;
    student.save();
}

const getTeacher = async (subject) =>{
    const teachers = await Teacher.find({subject})
    return teachers;
}

const getStudents = async (grade,section) =>{
    const students = await Student.find({grade,section});
    return students;
}

const editStudent = async (student_id,updatedObj)=>{
    await Student.findByIdAndUpdate(student_id,updatedObj);
}

const getAssignedStudentsToTeacher = async(teacher_id)=>{
    const students = await Student.find({}).populate({
        path:'teacherAssigned',
        match:{
            _id:teacher_id
        }
    });
    return students;
}