#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const file = process.argv[3];

request.get(url, function(err, response, body) {
    if (err) {
        console.error(err);
    } else if (response.statusCode !== 200) {
        console.error('Invalid response:', response.statusCode);
    } else {
        fs.writeFile(file, body, { encoding: 'utf-8' }, function(err) {
            if (err) {
                console.error(err);
            } else {
                console.log(`File ${file} has been saved.`);
            }
        });
    }
});
