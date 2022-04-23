const Student = require('./models/student');
const Teacher = require('./models/teacher');


const teacher = {
    name:"Ishaan",
    email:"b.ishaan10@gmail.com",
    subject:"Computer Science"
}
const createTeacher = async (obj) =>{
    const {name,email,subject} = obj;
    const newTeacher = new Teacher({name,email,subject});
    await newTeacher.save();
    console.log("Created new teacher")
}

const createStudent = async (obj)=>{
    const {name,email,grade,section} = obj;
    const newStudent = new Student({name,email,grade,section});
    await newStudent.save();
    console.log("Created new student")
}


const assignTeacherToStudent = async (student_id,teacher_id)=>{
    const teacher = await Teacher.findById(teacher_id);
    const student = await Student.findById(student_id);
    student.assignedTeacher = teacher;
    student.save();
    console.log("Assigned student to teacher")
}

const getTeacher = async (subject) =>{
    const teachers = await Teacher.find({subject}).exec().then((result)=>{
        return result;
    })
    console.log(teachers);
    return teachers;
}


const getStudents = async (grade,section) =>{
    const students = await Student.find({grade,section});
    console.log(students)
    return students;
}


const editStudent = async (student_id,updatedObj)=>{
    await Student.findByIdAndUpdate(student_id,updatedObj);
    console.log("Student updated")
}


const getAssignedStudentsToTeacher = async(teacher_id)=>{
    const students = await Student.find({}).populate('assignedTeacher');
    const filtered = students.filter(obj=>{
        return obj.assignedTeacher?._id == teacher_id})
    // console.log(students)
    console.log(filtered)
}

module.exports = {
    createTeacher,
    createStudent,
    assignTeacherToStudent,
    getTeacher,
    getStudents,
    editStudent,
    getAssignedStudentsToTeacher
}