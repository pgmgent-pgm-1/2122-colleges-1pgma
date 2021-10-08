/*
Author: drdynscript
modified: 09-30-21
topics: logical operators
*/
// AND => &&
let result;
result = true && true;
result = false && true;
result = false && 'PGM';
result = true && 'PGM';
result = true && (3 == 6);


// OR => ||
result = true || true;
result = true || false;
result = true || (3 == 6);
result = 'PGM' || 'NMD';

// NOT => !
result = !true;
result = !'PGM';
console.log(result);

// typeof
let size = 1.72;
let firstName = 'Philippe';
console.log(typeof firstName);
console.log(typeof alien);
console.log(typeof true);
let now = new Date();
console.log(typeof now);
console.log(now.toLocaleTimeString('en-US'));

// if ... else
let isFemale = true;
if (isFemale) {
  console.log('You are a lady!');
} else {
  console.log('You are James');
}

// if ... else if ... else
let gender = 2;
if (gender == 0) {
  console.log('Gender is not know.');
} else if (gender == 1) {
  console.log('You are a male.');
} else if (gender == 2) {
  console.log('You are a female');
} else {
  console.log('Gender is not specified.');
}

// Equality operator
console.log(3 == 3);
console.log(3 != 3);
console.log(3 == '3');
console.log(3 != '3');
console.log(3 === '3');
console.log(true == 1);
console.log(true === 1);
console.log(false != 1);
console.log(false !== 0);

// relational operators
// < > <= >=
console.log(3 < 4);
console.log(3 > 4);
console.log(3 <= 3);
console.log(3 >= 4);

// switch case
let message;
gender = 7;
switch (gender) {
  case 0: message = 'Gender is not known.'; break;
  case 1: message = 'You are a male.'; break;
  case 2: message = 'You are a female.'; break;
  case 9: default: message = 'Gender is not specified.'; break;
}
console.log(message);