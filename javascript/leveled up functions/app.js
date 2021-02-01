// function scoping

function collectEggs() {
    let total = 6;
}

// total scope is defined only inside the function and cannot be accessed
// outside the function
let bird = "I am a bird";
function birdWatch() {
    let bird = "I am a bird inside this scope";
    console.log(bird);
}

birdWatch();


// block scoping
let radius = 8;
if (radius > 0) {
    const PI = 3.1415;
    let msg = 'HII';
}

// PI,msg is not accessible outside of the defined scope, (IF block)
// this works only with let or const keyword

//with var, variables are NOT block scoped and are accessible globally
if (radius > 0) {
    var value = 10;
}
console.log(value); // will execute and print the correct value



//lexical scoping
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`help us please, ${hero}`);
        }
        //calling the inner function to execute it
    }
    cryForHelp();
}

bankRobbery();

//function expressions <- this means functions are values in javaScript
const square = function (x) {
    return x * x;
}

console.log(square(10));


// higher order functions

//passing functions as parameters for other functions
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
// here roll Die is passed and called twice inside callTwice 
callTwice(rollDie);

// returning functions as return types from other functions
function MakeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Congrates, I am a good function");
        }
    }
    else {
        return function () {
            console.log("Bad function");
        }
    }
}
//saving the function returned onto a variable
let func = MakeMysteryFunc();
func(); // calling the function stored inside the variable

// function takes as arguments min and max, builds a dynamic function
// to find if value exists between the parent function parameters
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

let funct = makeBetweenFunc(10, 20);
console.log(funct(11));

// defining functions inside objects (defining methods)
const myMath = {
    PI: 3.14159,
    // longer method to define functions for objects
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num * num * num;
    },
    //shorter method to do the same
    add(x, y) {
        return x + y;
    }
}

console.log(myMath.cube(5));
console.log(myMath.add(2, 3));

// this keyword
const cat = {
    name: 'Kenobi',
    color: 'white',
    meow() {
        console.log(this);
        console.log(`${this.name} says Meow`);
    }
}

cat.meow();

let meow2 = cat.meow; // <- passing a reference to cat object's meow function

// since meow2 doesnt belong to any object, it belongs to the window object (parent object in js)
// it will print out that it belongs to the window context. when referenced by "this" keyword
meow2();

// coding exercise
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
}

// try catch in javaScript
try {
    hello.toUpperCase(); // there is no hello variable thus it throws an error
}
catch {
    console.log("error caught"); //error is caught
}

console.log("after");

// more examples
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) {
        console.log(e);
    }
}

yell(3);
yell('ahh');
