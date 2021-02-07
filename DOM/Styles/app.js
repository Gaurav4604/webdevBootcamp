const h1 = document.querySelector('h1');

console.log(h1);

console.log(h1.style); // this doesn't include the styles declared using the stylesheet

const allLinks = document.querySelectorAll('a');

// changing color of all anchor tags
for (let links of allLinks) {
    links.style.color = 'rgb(0,200,134)';
    links.style.textDecorationColor = 'magenta';
    links.style.textDecorationStyle = 'wavy';
}
