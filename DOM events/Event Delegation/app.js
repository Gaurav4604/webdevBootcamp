const usr = document.querySelector('#usr');
const tweet = document.querySelector('#tweet');

const btn = document.querySelector('button');

let list = document.querySelector('ul');

btn.addEventListener('click', function () {
    let ls = document.createElement('li');
    let b = document.createElement('b');
    b.innerText = usr.value;
    ls.append(b);
    ls.append(` ${tweet.value}`);
    list.append(ls);
    usr.value = '';
    tweet.value = '';
});


list.addEventListener('click', function (e) {
    console.log(e.target.nodeName);
    e.target.nodeName === 'LI' && e.target.remove();
});