const express = require('express');

const app = express();
const port = 1245;
// Route handler for get req to root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// Start server on defined port
app.listen(port);
module.exports = app;
