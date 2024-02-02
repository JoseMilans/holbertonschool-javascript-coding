process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (input) => {
  const trimmedInput = input.toString().trim();
  process.stdout.write(`Your name is: ${trimmedInput}\r\n`);
  process.stdout.write('This important software is now closing\r\n');
  process.exit();
});
