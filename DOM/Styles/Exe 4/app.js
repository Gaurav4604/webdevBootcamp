// WRITE YOUR CODE IN HERE:

const contain = document.querySelector('#container');
for (let i = 0; i < 100; i++) {
    const btn = document.createElement('button');
    btn.innerText = 'Hey!';
    contain.appendChild(btn);
}
