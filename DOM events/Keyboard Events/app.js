let body = document.querySelector('body');
let btn = document.createElement('button');
let input = document.createElement('input');
btn.innerText = "Click me";
body.appendChild(btn);
body.appendChild(input);

// this function will look for keydown event, and evt is the argument passed
// into our function as it will help to determine what key caused the event to occur
input.addEventListener('keydown', function (evt) {
    console.log(evt);
    console.log(evt.key);
    console.log(evt.code);
})
// listening for events on the whole screen via keyboard
window.addEventListener('keydown', function (evt) {
    switch (evt.code) {
        case "ArrowUp":
            console.log("UP");
            break;
        case "ArrowDown":
            console.log("DOWN");
            break;
        case "ArrowLeft":
            console.log("LEFT");
            break;
        case "ArrowRight":
            console.log("RIGHT");
            break;
        default:
            console.log("IGNORED");
    }
})