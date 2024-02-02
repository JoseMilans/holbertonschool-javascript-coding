process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (input) => {
  console.log(`Your name is: ${input.toString().trim()}`);
  console.log('This important software is now closing');
  process.exit();
});
