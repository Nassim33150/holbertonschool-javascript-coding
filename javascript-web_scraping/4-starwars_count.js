#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, function (err, data, body) {
  if (err) {
    console.log(err);
  } else {
    let nboffilms = 0;
    const films = JSON.parse(body).results;
    for (let i = 0; i < films.length; i++) {
      const characters = films[i].characters;
      for (let j = 0; j < characters.length; j++) {
        if (characters[j] === 'https://swapi-api.hbtn.io/api/people/18/' || characters[j] === 'http://swapi-api.hbtn.io/api/people/18/') {
          nboffilms += 1;
        }
      }
    }
    console.log(nboffilms);
  }
});
