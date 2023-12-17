const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page!!!');
    } else if (req.url === '/about') {
        res.end('Its all about u!!!');
    } else {
        res.end(`
            <h1>Oops!!</h1>
            <p>No Page Found!!</p>
            <a href="/">Back to home</a>`);
    }
    // default
    
    // console.log(req);
    // res.write('Welcome to home page!!!');
    // res.end();
});

server.listen(5000);