const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
process.stdout.write('Welcome to Holberton School, what is your name?\n');
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  console.log('This important software is now closing');
  rl.close();
});
