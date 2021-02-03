//default params
// here the params are defaulted to 6, if no parameters
// are entered
function rollDie(num = 6) {
    return Math.floor(Math.random() * num) + 1
};

// spreading an array
const nums = [3, 2, 4, 5, 2, 6, 7, 65, 3, 2, 321];
// *...* is used for spreading the array into individual elements
const min = Math.min(...nums);

console.log(min);
// each value is passed as separate value
console.log(...nums);

// anything that can be executed inside a for of loop
// can be executed for spreading
const str = "hello";
console.log(...str);

// spreading arrays into a bigger array
const cats = ['blue', 'scout', 'Rocket'];
const dogs = ['rusty', 'wyatt'];

const allPets = [...dogs, ...cats];
console.log(allPets);

// spreading objects
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Canine' };

// combining an object and adding new properties to it
const newObj = {
    ...feline,
    ...canine,  //since canine is copied later,
    //family attribute is overritten by canine family attribute
    color: 'blue',
}

console.log(newObj);

// arrays spread onto an object
const obj = {
    ...nums
}

// indexes are keys, and index values of arrays are object values
console.log(obj);

// rest in arguements
function sum(...nums) {
    console.log(nums);
}
sum(nums);

// destructuring in array
const nums_2 = nums;

const [gold, silver, ...everyoneElse] = nums_2;
console.log(gold, silver);
console.log(everyoneElse);

// destructuring for objects
const user = {
    mail: "bleh@gmail.com",
    pswd: "12345",
    name: "bleh",
    bio: "still alive",
}

const { mail, pswd } = user;
console.log(mail, pswd);

// storing them in particular variables
// storing a default value in a particular variable usnig *=*
const { mail: email, pswd: password, default: nonexistent = "N\A" } = user;
console.log(email, password, nonexistent);

// destructuring with parameters
function printer({ mail, bio = "mehh, i exist as a default" }) {
    console.log(`${mail} ${bio}`);
}

printer(user);