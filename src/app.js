function getAnElement() {
    const element = document.querySelector('.one')
    console.log(element)
} 

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
]

function getStudentAverage(student) {
    sumGrade = 0 
    for (const grade of student.grades){ 
        sumGrade += grade
    
    }
    avgGrade = sumGrade / student.grades.length
    return(avgGrade)
} 

function getStudentScholarship(listOfStudents) {
    const studentsScholarship = []
    
    for (const student of listOfStudents){
        const averageGrade = getStudentAverage(student)
        if (averageGrade > 80){
            studentsScholarship.push({name: student.name, gradeAvg: averageGrade})
        }
    } return(studentsScholarship)
} 

function toggleTheme() {
    const  theme = document.querySelector('.light-theme')
    theme.classList.toggle("dark-theme")    
}
