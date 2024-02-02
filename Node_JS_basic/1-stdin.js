console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    console.log(`Your name is: ${input.trim()}`);
    console.log('This important software is now closing');
    process.exit();
  }
});
