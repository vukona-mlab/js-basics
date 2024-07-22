let student = {
    name: 'Ayanda',
    age: 34,
    surname: 'Radebe'
}
// add to an object
student.gender = 'female'



// updating an object field
student.age = 24




console.log({ student });
console.log({name: student.name });

delete student.surname
console.log({ student });