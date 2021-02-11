const body = document.querySelector('body');

let input = function (name, text) {
    let value = document.createElement('input');
    value.type = 'text';
    value.name = name;
    value.placeholder = text;
    return value;
}

let btn = document.createElement('button');
btn.innerText = "Submit";

let list = document.createElement('ul');
let h1 = document.createElement('h1');
h1.innerText = "Tweets";

body.appendChild(input("username", "Username"));
body.appendChild(input("tweet", "Tweet"));
body.appendChild(btn);
body.appendChild(h1);
body.appendChild(list);

btn = document.querySelector('button');

btn.addEventListener('submit', function (e) {
    e.preventDefault();
    inputs = document.querySelectorAll('input');
    let userText = inputs[0].value;
    let tweetText = inputs[1].value;
    post(userText, tweetText);
    inputs[0].value = '';
    inputs[1].value = '';
});

let post = (username, tweet) => {
    let list = document.querySelector('ul');
    let listChild = document.createElement('li');
    let Btag = document.createElement('b');
    Btag.append(`${username}`);
    listChild.append(Btag);
    listChild.append(` -> ${tweet}`);
    list.append(listChild);
};