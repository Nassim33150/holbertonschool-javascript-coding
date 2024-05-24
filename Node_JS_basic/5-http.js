// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (url === '/students') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        const database = process.argv[2];

        countStudents(database)
            .then((data) => {
                res.end(`This is the list of our students\n${data}`);
            })
            .catch((error) => {
                res.end(`This is the list of our students\n${error.message}`);
            });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

const port = 1245;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
