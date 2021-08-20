let events = require('events');

let customEmitter = new events.EventEmitter();


customEmitter.on('name_entered', (name) => {
    console.log(name);
});

// customEmitter.emit('name_entered', 'Gaurav Singh');


class Person extends events.EventEmitter{
    constructor(name){
        super(name);
        this.name = name
        customEmitter.emit('name_entered', name);
    }
}

let names = ["Gaurav Singh", "abc", "efg"];
let people = [];

names.forEach((name) => {
    people.push(new Person(name));
});