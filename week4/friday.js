let quote = 'The quick brown fox jumps over the lazy dog';
let searchTerm = '   Fox   ';
searchTerm = searchTerm.trim().toLowerCase();
let position = quote.indexOf(searchTerm);
let message = '';
if (position !== -1) {
  message = `We have the first occurence for the search term ${searchTerm} at position ${position}`;
} else {
  message = `No results for the search term ${searchTerm}`;
}
console.log(message);

const tagCloud = [
  'gebarentaal',
  'stualyttle',
  'eten',
  'chuck norris',
  'JavaScript',
];
const tagCloudAsString = tagCloud.join(' | ');
console.log(tagCloudAsString);

const baseline = 'Love Code Like Graphics Make Cool Shit';
const baselineWords = baseline.split(' ');
message = baselineWords.map((word) => `${word}`).join('\n');
console.log(message);

