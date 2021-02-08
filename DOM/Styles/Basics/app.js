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

// getting the computed styles
const obj = window.getComputedStyle(h1);

console.log(obj.fontSize);
// we cannot set size using this property
// thus we change it using the document object
h1.style.fontSize = '100px';

// toggling classList
const h2 = document.querySelector('h2');
console.log(h2.getAttribute('class'));

h2.setAttribute('class', 'purple'); // individually sets attributes a particular class

// adding multiple classes onto a element using classlist
h2.classList.add('purple');
h2.classList.add('border');

h2.classList.remove('purple');

// toggling a particular class
// (if class has it, then it is removed, else it is added)
let flag = h2.classList.toggle('border'); // returns a boolean
console.log(flag); // if value exists, it returns false
flag = h2.classList.toggle('border');
console.log(flag); // now it returns true

const firstBold = document.querySelector('b');

const paragraph = firstBold.parentElement; // returns the parent element of the document object

console.log(paragraph.children[0]); // returns the 0th index inside the children list of paragraph element

// first element with square class
const squareImg = document.querySelector('.square');
console.log(squareImg);
// adjacent elements to squareImg are returned by the given functions 
console.log(squareImg.previousElementSibling);
console.log(squareImg.nextElementSibling);
// the nodes containing element values are returned by the following functions
console.log(squareImg.previousSibling); // returns a newline
console.log(squareImg.nextSibling); // returns a newline
// the above whitespaces are generated due to spaces between the element Siblings


// adding new elements to the webpage

const newImg = document.createElement('img');

newImg.src = 'https://avatars.githubusercontent.com/u/59768109?s=460&v=4';

document.body.append(newImg);

newImg.classList.add('square');

const h3 = document.createElement('h3');

h3.innerText = 'I am new!';
document.body.appendChild(h3);

const p = document.querySelector('p');
p.append('I have been added to you!!!!!'); // adding values to a already defined element

const bold = document.createElement('b');
bold.innerText = "Hello, I am Bold";
p.prepend(bold); // adding something to a begining of something

const h2_new = document.createElement('h2');
h2_new.append("This is a new H2");
// inserting this h2 after the h1 already present in the document
const h1_new = document.querySelector('h1');
h1_new.insertAdjacentElement('afterend', h2_new); //using this we can append elements specified by the index we want
// we can use indexs such as beforebegin, afterbegin, beforeend, afterend


// removing elements from the page

// using removeChild
const firstLi = document.querySelector('li');

firstLi.parentElement.removeChild(firstLi); // we need to remove the particular element we want
// we need to switch to parent then access the child and delete it from there

// directly removing an element from the page
const img = document.querySelector('img');
img.remove(); // thus directly removing the child from the page