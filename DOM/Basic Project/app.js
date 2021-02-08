// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const div = document.querySelector('div');

for (let i = 0; i <= 151; i++) {
    let parent = document.createElement('div');
    parent.classList.add('pokemon');
    let img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    let text = document.createElement('span');
    text.innerText = `#${i}`;
    parent.append(img, text);
    div.appendChild(parent);
}
