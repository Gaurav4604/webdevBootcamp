let http = require('http');

let server = http.createServer(
    (req, res) => {
        console.log(`req was made ${req.url}`);
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Hello There');
    }
);


server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');