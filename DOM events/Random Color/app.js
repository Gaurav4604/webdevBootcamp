let body = document.querySelector('body');
let bodyStyle = window.getComputedStyle(body);
document.querySelector('h2').innerText = `Initial Color : ${bodyStyle.backgroundColor}`;


let btn = document.querySelector("button");

let colorSwitcher = () => {
    const colors = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    document.body.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
    document.querySelector('h2').innerText = `Changed color : ${document.body.style.backgroundColor}`;
}

btn.addEventListener("click", colorSwitcher);