const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function print(element) {
    console.log(element);
}

nums.forEach(print); //passing a method to be applied to each array element

console.log("using anonymous function")
// anonymous function
nums.forEach(function (el) {
    if (el % 2 === 0)
        console.log(el);
});

//map
const doubles = nums.map(function (num) {
    return num * 2;
});

console.log(doubles);

//arrow functions

//multiple arguements
const sum = (x, y) => {
    return x + y;
};

//single arguements
const square = x => {
    return x * x;
};
// no arguements
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// arrow functions with implicit return type
const greet = (string) => (`Hey ${string}!`);
// here no return is specified
// since function is inline, the statement is returned

console.log(sum(10, 20));
console.log(square(10));
console.log(rollDie());

console.log(greet("Gaurav"));

const Movies = [
    {
        title: 'movie1',
        score: 99
    },
    {
        title: 'movie2',
        score: 92
    },
    {
        title: 'movie3',
        score: 81
    }
];


console.log(Movies.map(function (movie) {
    return `${movie.title} - ${movie.score}`;
}));



const newMovies = Movies.map((movie) => (`${movie.title} - ${movie.score / 10}`)); //arrow function on an Object array

console.log(newMovies);

//filter method
// works based on a function working on array methods
// and returning a boolean 
const evens = nums.filter(n => {
    return n % 2 === 0
})

console.log(evens);

const goodMovies = Movies.filter(m => m.score > 95);
const goodTitles = goodMovies.map(m => m.title)

// can also be done as
const merged = Movies.filter(m => m.score > 95).map(m => m.title);

console.log(goodMovies)
console.log(goodTitles)
console.log(merged)