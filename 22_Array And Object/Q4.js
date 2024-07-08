const students = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 20,
        grade: "A",
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        age: 22,
        grade: "B",
    },
    {
        id: 3,
        firstName: "Bob",
        lastName: "Johnson",
        age: 19,
        grade: "A",
    }
];

// a. Add a Student
function addStudent(newStudent) {
    students.push(newStudent);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    } else {
        console.log('Student not found');
    }
}

// c. Delete a Student
function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
    } else {
        console.log('Student not found');
    }
}

// d. List All Students
function listAllStudents() {
    console.log('List of all students:');
    students.forEach(student => {
        console.log(`${student.id}. ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}


addStudent({ id: 4, firstName: "Alice", lastName: "Brown", age: 21, grade: "B" });
updateStudent(2, { age: 23, grade: "A" });
deleteStudent(1);
listAllStudents();

const gradeAStudents = findStudentsByGrade('A');
console.log('Students with grade A:', gradeAStudents);

const averageAge = calculateAverageAge();
console.log('Average Age:', averageAge);