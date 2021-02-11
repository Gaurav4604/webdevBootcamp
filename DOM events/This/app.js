let body = document.querySelector('body');

for (let i = 0; i < 40; i++) {
    let parent = document.createElement('button');
    parent.innerText = 'Click Me';
    body.appendChild(parent);
}

for (let i = 0; i < 20; i++) {
    let parent = document.createElement('h5');
    parent.innerText = 'I am H5';
    body.appendChild(parent);
}

let colorize = function () {
    this.style.backgroundColor = colors();
    this.style.color = colors();
}

for (let button of document.querySelectorAll('button')) {
    button.addEventListener('click', colorize);
}

for (let h5 of document.querySelectorAll('h5')) {
    h5.addEventListener('click', colorize);
}

let colors = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}