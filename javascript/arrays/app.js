//arrays data structure

//basic array
let colors = ['red', 'orange', 'yellow'];
console.log(colors);

let days = ['Monday', 'Tuesday', 'Wednesday'];

//mixed array with another array reference inside it
let kitchenSink = [true, undefined, 12, NaN, 9.9, 'Hello There', null, days];
console.log(kitchenSink);

let length = kitchenSink.length;
//indexing an array
console.log(kitchenSink[length - 1]);

// calling value of the referenced array inside of the other array
console.log(kitchenSink[length - 1][0]);

//NOTE if an invalid index is called, output of 'undefined' is printed out

// updating the index of array
days[0] = 'blue';

// assigning an empty slot inside an array
days[10] = 'Sunday';
console.log(days); // will work, with extra spaces in between filled with undefined

//push and pop on arrays
let movieLine = ['Tom', 'nancy'];
movieLine.push('Gaurav'); //gaurav is pushed at the end, thus changing the values inside the array
console.log(movieLine);
movieLine.push('Tommy', 'Goat'); //pushing multiple things inside array

// popping items inside the array
let person = movieLine.pop(); //the last value of array is removed from the array and returned
console.log(person);

//shifting and unshifting inside the array
//shift
let patron = movieLine.shift(); //removing and returning the first index of the array
console.log(patron);

//unshift
movieLine.unshift('VIP'); //adding a person to the start of the array
console.log(movieLine);

// concatination inside array
let movieLine2 = ['New1', 'New2', 'New3'].concat(movieLine);
console.log(movieLine2); //movieline is added to the end of movieline2 and returned as a new array

//indexOf
console.log(movieLine2.indexOf('VIP')); //returns the index of arguement passed, if it is present, otherwise returns a value, -1

movieLine2.reverse(); //permanent method, applies to the original array. reverses the array. thus is a destructive method
console.log(movieLine2);

//slice and splice in array
let value = movieLine2.slice(1); // makes a new array from the specified start index, to an optional end index and returns it
console.log(value);

//splicing
let months = ['Jan', 'March', 'April'];
// splice can be used to add and delete things inside the array
// arg 1 = index at which we want to start scanning
// arg 2 = no. of items to be deleted from the passed start index
// arg 3 = items to be added after delete arg.
months.splice(1, 0, 'Feb');
console.log(months);

let rainbow = ['red', 'yellow', 'blue', 'green', 'orange', 'violet', 'indigo'];
rainbow.splice(5, 2); //wanting to delete 2 items after index 5
console.log(rainbow);

// adding value using splicing
rainbow.splice(2, 0, 'red-orange'); //adding value after index of 2
console.log(rainbow);
// adding multiple values
rainbow.splice(3, 0, 'red-blue', 'blue-green'); //adding values after the index of 3
console.log(rainbow);

//replacing using splice
rainbow.splice(3, 3, 'DELETED!!'); //starting from 3rd index, deleting 3 items and replacing them with single value, 'DELETED!!'
console.log(rainbow);

//sorting the arrays
//very useless since all the values are sorted according to their UNICODE value
// array elements are converted to string values, then those string values generate unicode, which is then used as a comparator to sort them
// we can use custom comparator made via function to sort them as well
rainbow.sort();
console.log(rainbow);

// references inside array
nums = [1, 2, 3, 4];

num2 = [1, 2, 3, 4];

// these two values have different references and point to different objects, thus a comparison will yield a false value
console.log(num2 === nums);

// if they point to same value, then changes inside one will affect the other 
numsCopy = nums;
nums.push(10);

console.log(nums, numsCopy); //both will print the same value even though, nums and numsCopy are different variables, as they point to same memory reference

// since they point to the same reference
console.log(nums === numsCopy); // will print true

// const with arrays
const numbers = [1, 2, 3, 4];

// there will be no errors as long as the array is not reassigned
numbers.push(10);
numbers.pop();

// we cannot set a new reference to the given array
numbers = [2.3, 4, 5]; //this will throw an error