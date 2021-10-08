// Function expression = Anonymous function
const sq = function(v) {
  return v ** 2;
};

console.log(`sq(5): ${sq(5)}`);

// Arrow function
const mp = (a, b) => {
  return a * b;
};

console.log(`mp(2): ${mp(2, 5)}`);

// Rest parameter
function people(leader, ...helpers) {
  let output = '';
  output += `\nLeader: ${leader}`;
  output += `\n--------------------------------`
  for (let element of helpers) {
    output += `\n${element}`;
  }
  return output;
}
console.log(`People: ${people('Remco Evenepoel', 'Bart', 'Eva', 'Willy')}`)

// Recap Array
const fruit = ['Apple', 'Banana', 'Orange'];
console.log(`Length of the array: ${fruit.length}`);
console.log(`Get the second fruit: ${fruit[1]}`);
// fruit.length = 30;
// console.log(fruit);
fruit[0] = 'Grape';
console.log(fruit);
// fruit[99] = 'Candy';
// console.log(fruit);
const lecturers = [];
lecturers[0] = 'Evelien';
lecturers[1] = 'Adriaan';
const randomNumbers = [];
for (let i=0; i < 25000; i++) {
  randomNumbers[i] = Math.floor(Math.random() * 10000);
}
console.log(randomNumbers);

console.log(`The award is ${getAward()}`);

// Scope of a function
// Hoisting
function getAward() {
  return 'CLIPO-award';
}

console.log(`The award is ${getAward()}`);

// console.log(`The sum is ${add(4, 3)}`);
// Function expressions are not hoisted
const add = (a, b) => {
  return a + b;
};
console.log(`The sum is ${add(4, 3)}`);

// Scope of a variable
if (true) {
  var e = 15;
}
console.log(e);

if (true) {
  let f = 16;
}
// console.log(f);

let g = 16;
if (true) {
  let g = 18;
  console.log(g);
}
console.log(g);

var h = 15;
if (true) {
  var h = 19;
  console.log(h);
}
console.log(h);

var i = 16;
if (true) {
  let i = 12;
  console.log(i);
}
console.log(i);


console.log(pipo);
var pipo = 'IT';

// console.log(k3);
// let k3 = 'sla';

// Object person with properties
// Property = Key / value pair
const person = {
  firstName: 'Philippe',
  lastName: 'De Pauw - Waterschoot',
  '633|<': 'drdynscript'
};
console.log(`Your firstname: ${person.firstName}`);
person.firstName = 'Mira';
console.log(`Your firstname: ${person.firstName}`);
person.age = 36;
person.genderCode = 2;
console.log(person);
person['age'] = 32;
console.log(`Your age is ${person.age}`);
console.log(`Your age is ${person['633|<']}`);
let output = 'Properties of the object person\n--------------------';
for (let prop in person) {
  output += `\n${prop} -> ${person[prop]}`;
}
console.log(output);

const students = [
  {
    firstName: 'Emma'
  },
  {
    firstName: 'Robin',
    addresses: [
      {
        street: 'Koekoekstraat'
      },
      {
        street: 'Industrieweg'
      }
    ]
  }
];
console.log(`The firstname of the second student: ${students[1].firstName}`);
console.log(`The street of the second address of the second student: ${students[1].addresses[1].street}`);