const chalk = require('chalk');
const log = console.log;
let hue = 0;

setInterval(() => {
  hue = Math.round(Math.random() * 365);
  log(chalk.hsl(hue, 100, 80).bgHsl(hue, 100, 30).bold('This a wicked interface'));
}, 268);
