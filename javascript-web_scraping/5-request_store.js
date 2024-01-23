#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const [, , url, filePath] = process.argv;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
