let fs = require('fs');


let readStream = fs.createReadStream(`${__dirname}/readme.txt`, 'utf8');
let writeStream = fs.createWriteStream(`${__dirname}/writeMe.txt`);

// readStream.on('data', (chunk) => {
//     console.log('new data received');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);