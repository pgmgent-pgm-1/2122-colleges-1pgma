let students = [
  'Veli',
  'Helena',
  'Sienna'
];
console.log(students);
console.log(`The length of the array is ${students.length}`);
console.log(`The 2nd element of the array is ${students[1]}`);
students[3] = 'Luk';
console.log(`The length of the array is ${students.length}`);
// Add an element at the end of the array
students.push('Sarah');
console.log(students);
// Add one or more elements at the beginning of the array
students.unshift('Ismail', 'Linus');
console.log(students);
// Add elements between other elements
students.splice(1, 0, 'Patrick', 'Nina', 'Jessica');
console.log(students);
// Remove elements and add one
students.splice(1, 2, 'Jeroen');
console.log(students);
const classB = [
  'Ann',
  'Mohammed',
  'Anuna',
  'Tom',
  'Jerome',
  'Corneel'
];
students = students.concat(classB);
console.log(students);

// Iterate over array with for loop
let output = '';
for (let i = 0; i < students.length; i++) {
  output += `\n${i} => ${students[i]}`;
}
console.log(output);


// Iterate over array with for ... of
output = '';
let j = 0;
for (let element of students) {
  output += `\n${j} => ${element}`;
  j++;
}
console.log(output);

output = '';
for (let [ind, elem] of students.entries()) {
  output += `\n${ind} => ${elem}`;
}
console.log(output);

// Remove the last element from the array
let removedElem = students.pop();
console.log(`The removed element ${removedElem}`);

// Remove the first element of the array
removedElem = students.shift();
console.log(`The removed element ${removedElem}`);

// Copy elements fron the array
const classC = students.slice(3, 5);
console.log(classC);

// Transform an array into a string
const os = ['windows', 'linux', 'macOS'];
os.reverse();
const osAsString = os.join(' | ');
console.log(osAsString);
os.sort();
console.log(os);

// Transformation of an array to another array
const numbers = [1, 4, 9];
let roots = numbers.map(function(elem) {
  return Math.sqrt(elem);
});
roots = numbers.map((elem) => Math.sqrt(elem));
console.log(roots);

// What about students?
output = '';
output += students.map((student, ind) => `${ind} => ${student}`).join('\n');
console.log(output);