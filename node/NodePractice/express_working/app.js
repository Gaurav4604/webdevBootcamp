const express = require('express');

let app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.send('this is the home page');
});


app.get('/contact', (req, res) => {
    res.send('this is the contact page');
});