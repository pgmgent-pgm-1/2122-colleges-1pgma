const cats = ['Frodo', 'Corneel', 'Kroket', 'Pitta'];
console.log(`The length of the cats array is ${cats.length}`);
console.log(`The 2nd cat is ${cats[1]}`);

for (let i=0; i< cats.length; i++) {
  console.log(`The cat at ${i} is ${cats[i]}`);
}

let j = 0;
for (let element of cats) {
  console.log(`The cat at ${j} is ${element}`);
  j++;
}

for (let [j, element] of cats.entries()) {
  console.log(`The cat at ${j} is ${element}`);
}

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
console.log(`Get WED: ${daysOfWeek[3]}`);
function getReadableDayOfTheWeek() {
  return daysOfWeek[new Date().getDay()];
}
console.log(`Get the number of the day: ${getReadableDayOfTheWeek()}`)

let counter = 99;
do {
  counter++;
  console.log(counter);
} while(counter < 99);