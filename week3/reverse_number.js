function reverse (value) {
  const l = value.length;
  let output = '';
  for (let i=(l - 1); i >= 0; i--) {
    output += value.charAt(i);
  }
  return output;
}
// Call the function reverse with a specified argument value
let v = '12345';
let r = reverse(v);
console.log(`The reversed value of ${v} is ${r}.`);
v = 'spitaalpoortstraat';
r = reverse(v);
console.log(`The reversed value of ${v} is ${r}.`);