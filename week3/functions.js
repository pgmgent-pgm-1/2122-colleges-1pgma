/*
Topic: functions
Author: drdynscript
Modified: 10-05-2021
*/
function sayHello() {
  console.log('Hello World!');
}
// Call the function sayHello
sayHello();
sayHello();

function greeting(fullName) {
  console.log(`Welcome ${fullName}.`);
}
greeting('Philippe De Pauw - Waterschoot');
greeting('Notorious BIG');

function multiply(a, b) {
  const c = a * b;
  console.log(c);
}
multiply(3, -4);

/*
Describe a function in order to generate a rectangle shape
The function has two parameters: nCols (amount of columns) and nRows (the amount of rows)
*/
function generateRectangle(nCols, nRows, ch, sp) {
  let output = '';
  for (let r = 0; r < nRows; r++) {
    for (let c = 0; c < nCols; c++) {
      output += ch + sp;
    }
    output += '\n';
  }
  console.log(output);
}
generateRectangle(3, 3, '*', ' ');
generateRectangle(9, 6, '@', '|');
generateRectangle(12, 22, '-', '_');

const personA = 'John Doe';
function swap(person) {
  person = 'Jane Doe';
  return person;
}

const personB = swap(personA);
console.log(`Person A: ${personA}`);
console.log(`Person B: ${personB}`);

/*
Describe a function in order to generate a random number
Two parameters: min value and max value
*/
function generateRandomNumber(min, max) {
  const v = Math.round(min + Math.random() * (max - min));
  return v;
}
let v1 = generateRandomNumber(6, 8);
console.log(`The random value is ${v1}`);
v1 = generateRandomNumber(-2, 4);
console.log(`The random value is ${v1}`);

let c = String.fromCharCode(189);
console.log(c);

function generateRandomUsername(nChars) {
  let output = '';
  for (let n = 0; n < nChars; n++) {
    output += `${String.fromCharCode(generateRandomNumber(70, 124))}`;
  }
  return output;
}
let userName = generateRandomUsername(6);
console.log(`The username is ${userName}`);
userName = generateRandomUsername(20);
console.log(`The username is ${userName}`);