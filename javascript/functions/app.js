function sing() {
    console.log("Do");
    console.log("Re");
    console.log("Me");
}

sing()

// Write your function here:
function printHeart() {
    console.log("<3");
}

printHeart();


// function with arguments
function greet(person) {
    console.log(`Hello ${person}!`);
}
greet('gaurav');

function greetings(person1, person2) {
    console.log(`Hello People, ${person1}, ${person2}`);
}

greetings('gaurav', 'singh');


function repeat(input, num) {
    let temp = '';
    for (let i = 0; i < num; i++)
        temp += input;
    console.log(temp);
}

repeat("I Love my Chickens!! ", 5);

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
        return NaN;
    else
        return x + y;
}

console.log(add('a', 20));