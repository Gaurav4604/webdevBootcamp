// conditionals using javascript
let age = parseInt(prompt("Enter your Age"));

if (age >= 40) {
    console.log("Enter the Bar Oldie");
}
else if (age >= 18) {
    console.log("Hey junior, get in there");
}
else {
    console.log("Go home kid");
}

let pswd = prompt("Enter your password");

if (pswd.length >= 6) {
    if (pswd.indexOf(" ") === -1)
        console.log("Good job, no space");
    else
        console.log("Password cannot contain spaces");
}
else {
    console.log("password too short, must be 6+ characters");
}

/*
falsy values
false
0
"" (empty string)
null
undefined
NaN

everything else in javaScript is truthy value
*/

const userInput = prompt("Enter Input");
//if input is any of the above comments
//then it is a falsy value and the else block will be printed
if (userInput) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY");
}