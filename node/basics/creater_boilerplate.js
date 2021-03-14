const fs = require('fs');

fs.mkdir('Person',{recursive: true }, (err) => {
    console.log("Inside Callback");
    if (err)
        throw err;
});

console.log("not a callback");