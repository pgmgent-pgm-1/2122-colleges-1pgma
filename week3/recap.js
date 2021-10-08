// Defined a function that simulate a conversation between two people
function conversationBetweenTwoPerson() {
  const conversation = `
  Pieter: Hoe gaat het vandaag?
  Amy: Ok. Ik ben geen ochtendmens.
  `;

  console.log(conversation);
}

// Call the function conversationBetweenTwoPerson
conversationBetweenTwoPerson();

// Define a function that returns a string with an extra amount of digits
function toDigits(value, nDigits, ch = '0') {
  let v = String(value);
  while (v.length < nDigits) {
    v = ch + v;
  }
  return v;
}

let d = toDigits('5', 2, '|');
console.log(`The new value is ${d}`);
d = toDigits('1', 6);
console.log(`The new value is ${d}`);

let isPlaying = true;
let nMoves = 0;

while (isPlaying) {
  if (nMoves + 1 > 999) {
    isPlaying = false;
  } else {
    nMoves++;
  }
}
console.log(`The amount of moves is ${nMoves}`);

// Digital Clock
function toTime() {
  let date = '09:36:18';
  const dateAndTime = new Date(); // Make an instance of the Date class
  const nHours = dateAndTime.getHours();
  const nMinutes = dateAndTime.getMinutes();
  const nSeconds = dateAndTime.getSeconds();
  const nMilliseconds = dateAndTime.getMilliseconds();
  date = `${toDigits(nHours, 2)}:${toDigits(nMinutes, 2)}:${toDigits(nSeconds, 2)}:${toDigits(nMilliseconds, 3)}`;
  return date;
}
console.log(`The time is ${toTime()}`);