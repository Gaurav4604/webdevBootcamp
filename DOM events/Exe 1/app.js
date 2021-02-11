const form = document.querySelector('form');

const submit = document.querySelector('button');

submit.addEventListener('submit', function (event) {

    let product = document.querySelector('#product').value;
    let quality = document.querySelector('#qty').value;
    let ls = document.createElement('li');
    ls.append(`${product} ${quality}`);
    document.querySelector('#list').append(ls);
    document.querySelector('#product').value = '';
    document.querySelector('#qty').value = '';
    event.preventDefault();
});

submit.addEventListener('click', function (event) {

    let product = document.querySelector('#product').value;
    let quality = document.querySelector('#qty').value;
    let ls = document.createElement('li');
    ls.append(`${product} ${quality}`);
    document.querySelector('#list').append(ls);
    document.querySelector('#product').value = '';
    document.querySelector('#qty').value = '';
    event.preventDefault();
});