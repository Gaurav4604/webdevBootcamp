let maximum = parseInt(prompt("Enter your maximum number"));
let count = 0;
while (!maximum)
    maximum = parseInt(prompt("Enter a valid number"));

const target = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess");

while (parseInt(guess) !== target) {
    count++;
    if (guess == 'q')
        break;
    if (guess > target) {
        guess = prompt("Too high, guess again");
    }
    else {
        guess = prompt("too low, Guess again");
    }
}
if (guess == 'q')
    alert('Ok, you quit');
else
    alert(`You got it,\n it took you ${count} tries`);