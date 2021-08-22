const express = require('express');

const todoController = require('./controllers/todo-controller');

let app = express();


// set template engine
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

// listen to port
app.listen(3000);
console.log('listening on port 3000');

todoController(app);
