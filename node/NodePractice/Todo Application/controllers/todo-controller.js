const bodyParser = require('body-parser');


const urlEncodedParser = bodyParser.urlencoded({extended: false});

let data = [
    {item: 'get milk'},
    {item: 'walk dog'},
    {item: 'kick some coding ass'},
];

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlEncodedParser,(req, res) => {
        data.push(req.body);
        // sending back data to client
        res.json(data);
    });

    app.delete('/todo/:item', (req, res) => {
        data = data.filter(todo => todo.item.replace(/ /g, '-') !== req.params.item);
        res.json(data);
    });
}