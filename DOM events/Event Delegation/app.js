const usr = document.querySelector('#usr');
const tweet = document.querySelector('#tweet');

const btn = document.querySelector('button');

let listCreate = document.querySelector('ul');

btn.addEventListener('click', function () {
    let ls = document.createElement('li');
    let b = document.createElement('b');
    b.innerText = usr.value;
    ls.append(b);
    ls.append(` ${tweet.value}`);
    listCreate.append(ls);
    usr.value = '';
    tweet.value = '';
});

let list = document.querySelector('ul');

list.addEventListener('click', function (e) {
    console.log(e.target.nodeName);
    e.target.nodeName === 'LI' && e.target.remove();
});