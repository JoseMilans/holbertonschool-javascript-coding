#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const films = JSON.parse(body).results;
  let wAntillesCounter = 0;

  films.forEach(film => {
    const characters = film.characters;
    if (characters.some(characterUrl => characterUrl.endsWith('/18/'))) {
      wAntillesCounter++;
    }
  });
  console.log(wAntillesCounter);
});
