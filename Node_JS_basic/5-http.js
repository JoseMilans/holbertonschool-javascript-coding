const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    // Temporarily override console.log
    let consoleOutput = '';
    const originalConsoleLog = console.log;
    console.log = (message) => {
      consoleOutput += `${message}\n`;
    };
    countStudents(process.argv[2])
      .then(() => {
        // Restore original console.log function
        console.log = originalConsoleLog;
        res.end(`This is the list of our students\n${consoleOutput.trim()}`);
      })
      .catch((error) => { // eslint-disable-line no-unused-vars
        console.log = originalConsoleLog;
        res.statusCode = 500;
        res.end('This is the list of our students\nCannot load the database');
      });
  }
}).listen(1245, () => console.log('Server is running on port 1245'));

module.exports = app;
