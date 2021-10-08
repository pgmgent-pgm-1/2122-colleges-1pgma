const amountOfSeconds = 5282855990;

// How many years are there in the amountOfSeconds
const nYears = Math.floor(amountOfSeconds / (365 * 24 * 60 * 60));
let secondsLeft = amountOfSeconds - nYears * (365 * 24 * 60 * 60);
const nDays = Math.floor(secondsLeft / (24 * 60 * 60));
secondsLeft = secondsLeft - nDays * (24 * 60 * 60);
const nHours = Math.floor(secondsLeft / (60 * 60));
secondsLeft = secondsLeft - nHours * (60 * 60);
const nMinutes = Math.floor(secondsLeft / (60));
secondsLeft = secondsLeft - nMinutes * 60;
const nSeconds = secondsLeft;

const output = `
=====================================================================
Amount of seconds to convert = ${amountOfSeconds}
=====================================================================
${amountOfSeconds} seconds = ${nYears}years ${nDays}days ${nHours}hours ${nMinutes}minutes ${nSeconds}seconds
=====================================================================
`;
console.log(output);