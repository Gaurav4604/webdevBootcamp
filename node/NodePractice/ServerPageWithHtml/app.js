const http = require('http');
const fs = require('fs');

let server = http.createServer(
    (req, res) => {
        if (req.url == '/' || req.url == '/home'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            let readStream = fs.createReadStream(`${__dirname}/index.html`);
            readStream.pipe(res);
        }
        else if (req.url == '/api'){
            let obj = {
                name: "Gaurav Singh",
                age: 20,
                gender: 'Male'
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(obj));
        }
        else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            let readStream = fs.createReadStream(`${__dirname}/404.html`);
            readStream.pipe(res);
        }
    }
)

server.listen(3000, '127.0.0.1');