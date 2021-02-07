let p = document.querySelector('p').textContent;

console.log(p);

// this extracts just the content inside the p tag
// with spacings inside them, which is due to HTML markup


// changing the innerHtml of the selected tag
let h1 = document.querySelector('h1');

console.log(h1);

h1.innerHTML = `<i> ${h1.innerText} <- now in italics </i>`;

// getting the attributes inside a html element
const firstLink = document.querySelector('a');
console.log(firstLink.href); // <- shows the link inside the anchor tag

console.log(firstLink.getAttribute('href')); // <- will yield the exact result inside anchor tag

// getAttribute returns a null value if the attribute inside, is not present
console.log(firstLink.getAttribute('id')); // <- returns a null value

// changing the type of the input specified
const input = document.querySelector('input[type="checkbox"]');
input.type = 'password';
// changing the input type using setAttribute type
input.setAttribute('type', 'text');
