for (let i = 0; i <= 20; ++i) {
    if (i % 2 != 0)
        console.log("odd", i);
    else
        console.log("even", i);
}


// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i -= 5)
    console.log(i);

// looping over arrays
const animals = ['tiger', 'lion', 'goat', 'monkey'];
for (let i = 0; i < animals.length; ++i)
    console.log(animals[i])

// coding exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++)
    console.log(people[i].toUpperCase());


//nesting for loops
for (let i = 0; i < 10; i++) {
    console.log("outer loop", i);
    for (let j = 0; j < 5; j++)
        console.log("inner loop", j);
}

// while loop
// let count = 0;
// while (count < 10) {
//     count += 1;
//     console.log(count);
// }
// //break statement
// let input = prompt("Hey say, something");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me")
//         break;
// }
// console.log("you win");

// for of loops
for (let person of people) {
    console.log(`Hello ${person}!`);
}

for (let char of "Words") {
    console.log(char);
}

//iterating over objects using for of loops
const values = {
    val1: 10,
    val2: 20,
    val3: 30,
    val4: 40,
    val5: 50
};

for (let value in values) {
    console.log(`value : ${values[value]}`);
}

// getting an array of object keys
const keys = Object.keys(values);
console.log(keys);

// getting an array of object key value pairs
const KeyVal = Object.entries(values);
console.log(KeyVal);