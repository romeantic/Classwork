// TODO: Write Your JavaScript Code Here
var students = ['Samantha', 'Ormond', 'Angela', 'Izzy', 'Hakeem'];

console.log(students.length);

for (var i = 1; i < students.length; i++) {
    console.log('Great to see you, ' + students[i] + '!');
}
students.shift()
console.log(students)