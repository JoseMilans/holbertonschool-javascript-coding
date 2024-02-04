const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let consoleOutput = 'This is the list of our students\n';
  const oriConsoleLog = console.log;

  console.log = (message) => {
    consoleOutput += `${message}\n`;
  };
  try {
    await countStudents(process.argv[2]);
  } catch (error) {
    consoleOutput += 'Cannot load the database';
  }
  console.log = oriConsoleLog;
  res.send(consoleOutput.trim());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
