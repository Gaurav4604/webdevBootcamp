const btn = document.querySelector('button');

const p = document.querySelector('p');

const random = function () {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
};

btn.addEventListener('click', function (e) {
    // to prevent event from propagating to another event
    // overlayed on top of the current event
    e.stopPropagation();
    btn.style.backgroundColor = random();
});

p.addEventListener('click', function (e) {
    p.style.backgroundColor = random();
});