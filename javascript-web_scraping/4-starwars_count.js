#!/usr/bin/node

const request = require('request');

const Id = '18';
const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error('Invalid response:', response.statusCode);
    } else {
        const movies = JSON.parse(body).results;
	    if (!movies) {
		    console.log('No films found.');
	    } else {
		    const moviesWithWedge = movies.filter(movie => movie.characters.includes(`https://swapi-api.hbtn.io/api/people/${Id}/`));
		    console.log(moviesWithWedge.length);
	    }
    }
});

