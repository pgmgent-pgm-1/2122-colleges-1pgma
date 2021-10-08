let b = 60;
let h = b;
const ch = '*';
let output = '';

for (let r = 0; r < h; r++) {
  for (let c = b; c > 0; c--) {
    output += ch;
  }
  b--;
  if (r < h - 1) {
    output += '\n';
  }
}
console.log(output);