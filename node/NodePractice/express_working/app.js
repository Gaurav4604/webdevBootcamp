const express = require('express');

let app = express();

// set a view engine
app.set('view engine', 'ejs');

app.use("/public", express.static('public'));

app.listen(3000);

app.get('/', (req, res) => {
    res.render('index')
});


app.get('/Profile/:name', (req, res) => {
    let data = {
        hobbies: ['eating', 'angry', 'grrr']
    };
    res.render('profile', {person: req.params.name, data: data});
});


// app.get('/profile/:id', (req, res) => {
//     res.send(`You requested to see profile with id: ${req.params.id}`);
// });

app.get('/contact', (req, res) => {
    res.render('contact');
});