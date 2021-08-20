let fs = require('fs');
let {promisify} = require('util');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const unlink = promisify(fs.unlink);

readFile(`${__dirname}/read_me.txt`, 'utf-8').then((data, err) => {
    console.log(data);
});

writeFile(`${__dirname}/write_me.txt`, 'this is some sample data to be written onto a file').then(() => {
    console.log('completed');
});

//deleting file
// unlink('write_me.txt');