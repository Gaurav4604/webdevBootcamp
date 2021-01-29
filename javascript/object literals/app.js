const person = {
    firstName: "Gaurav",
    lastName: "Singh",
    age: 18,
    hobbies: ["coding", "reading"],
    true: 'dat'
}

//accessing data from object
console.log(person['firstName']);
console.log(person['age']);

console.log(person.lastName);

//keys that are integers or keywords, then they are converted to strings if access is required
console.log(person[true]); //here true is the key converted to string, then accessed for person object (doesnt work on any other variables)


//modifying objects

const midterms = {
    guy: 10,
    girl: 19
}

midterms.guy = 79;
midterms.girl = 67;
console.log(midterms);

//adding new terms to object literals
midterms.newPerson = 81;
midterms["newPerson2"] = 89;
console.log(midterms);

// making array of objects
let arr = [person, midterms];
console.log(arr);

// same thing differently

let comments = [
    {
        username: 'g4604',
        text: 'lololol'
    },
    {
        username: 'pks73',
        text: 'study now'
    }
];

console.log(comments);