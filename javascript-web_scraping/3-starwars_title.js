#!/usr/bin/node

const request = require('request');
const apiUrl = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log(JSON.parse(body).title);
});
