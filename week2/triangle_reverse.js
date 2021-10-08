let b = 12;
let h = b;
const ch = '*';
const space = '|';
let output = '';

for (let r = 0; r < h; r++) {
  for (let c = 0; c < (r + 1); c++) {
    output += ch + space;
  }
  output += '\n';
}
console.log(output);