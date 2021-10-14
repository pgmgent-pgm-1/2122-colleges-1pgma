// Describe a person
const person = {
  hairColor: 'black',
  length: 1.72,
  weight: 66,
  dob: new Date(1982, 11, 12).getTime(),
  jump: function() {
    console.log('JUMP AROUND!');
  },
  fight() {
    console.log('FIGHT');
  },
  eat: () => {
    return 'EATING';
  }
};
// Call properties from an object
const myDob = new Date(person.dob);
console.log(myDob.toString());
person.length = 1.73;
console.log(person);
person['weight'] = 67;
person.nickName = 'drdynscript';
console.log(person);
person.jump();
person.fight();
console.log(person.eat());

// Make a copy but where the hell are the functions?
const person2 = JSON.parse(JSON.stringify(person));
person2.hairColor = 'red';
console.log(person2);

// Custom object with constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.toString = () => {
    return `${this.firstName} ${this.lastName}`;
  }
}
// Make an instance
const person1 = new Person('Aster', 'De Pauw');
console.log(person1.firstName + ' ' + person1.lastName);
console.log(person1.toString());
const person3 = new Person('Nona', 'Lola');
console.log(`${person3.firstName} ${person3.lastName}`);
console.log(person3.toString());

// Describe a Post
function Post(title, synopsis) {
  this.title = title;
  this.synopsis = synopsis;
  this.body;
  this.toString = () => {
    return this.title;
  }
};
let post = new Post('Activision kondigt anti-cheatsysteem op kernelniveau voor Call of Duty op pc aan', 'Activision start met Ricochet, een technologie die valsspelen in Call of Duty moet tegengaan. Onderdeel van het systeem is een driver voor de pc-versie van het spel. Die werkt op kernelniveau en moet later dit jaar verschijnen.');
post.body = `
<p>De anti-cheatdriver verschijnt nog dit jaar voor de pc-versie van Call of Duty: Warzone, samen met de Pacific-update voor dat spel. Op een later moment moet deze ook voor Call of Duty: Vanguard uitkomen. De driver helpt bij het opsporen van valsspelers en het verbeteren van de beveiliging van servers, meldt Activision.</p><p>Hoewel het om een driver voor de pc-versie gaat, helpt deze indirect ook de spelervaring van consolespelers te verbeteren, claimt de uitgever verder. Dat is omdat de zij via crossplay met pc-spelers kunnen gamen. Zodra de driver beschikbaar is gemaakt, is deze vereist om Warzone op de pc te kunnen spelen. Hetzelfde zal later waarschijnlijk gelden voor Vanguard.</p><p>De driver monitort op interactie en manipulatie met software van derde partijen die wijzen op cheating. Daarnaast voert Activision serverwijzigingen door zodat machine-learningalgoritmes gameplay kunnen analyseren op valsspelen. De uitgever benadrukt dat de driver actief wordt bij het draaien van Warzone en ook alleen Call of Duty in de gaten houdt. De driver sluit af zodra de speler het spel weer stopt.</p>`
console.log(post.toString());
console.log(post.synopsis);
console.log(post.body);