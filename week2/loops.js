/*
Associate Degree in Computer Programming
Topic: Loops
Developed by: drdynscript
Modified: 10-01-21
*/

// for
for (let i = 0; i <= 10; i++) {
  console.log(`The value of i is ${i}`);
}

// example: sort of rectangle
let output = '', nRows = 6, nCols = 12, ch = '\u{1F344}';
for (let row = 0; row < nRows; row++) {
  for (let col = 0; col < nCols; col++) {
    output += ch;
  }
  output += '\n';
}
console.log(output);

// for...in
let person = {
  firstName: 'Joe',
  lastName: 'Doe',
  gender: 1
};
console.log(person.firstName);
person.firstName = 'Jane';
console.log(person);
output = '';
for (let prop in person) {
  output += `\nThe property ${prop} has the value ${person[prop]}`;
}
console.log(output);

// Ternary operator
let isPlaying = true;
output = '';
if (isPlaying) {
  output = 'I\'m playing';
} else {
  output = 'Game Over!';
}
console.log(output);
output = (isPlaying) ? 'I\'m playing' : 'Game Over!';
console.log(output);