const http = require('http');

const app = http.createServer((req, res) => {
  // Set response HTTP status code
  res.statusCode = 200;

  // Set content type header
  res.setHeader('Content-Type', 'text/plain');

  // Send response body
  res.write('Hello Holberton School!');

  res.end();
}).listen(1245, () => console.log('Server is running on port 1245'));

module.exports = app;
