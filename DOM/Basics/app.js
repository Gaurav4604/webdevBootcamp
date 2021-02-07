const imgs = document.getElementsByTagName('img');

for (let img of imgs)
    console.log(img.src);

// manipulating all imgs to show a particular img
// for (let img of imgs)
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';

// query selector
const query = document.querySelector('a[title="Java"]');
console.log(query);

const links = document.querySelectorAll('p a');
for (let link of links)
    console.log(link);