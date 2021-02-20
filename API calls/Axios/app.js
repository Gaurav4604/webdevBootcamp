axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(response => {
        console.log(response.data.ticker.price);
    })
    .catch(error => {
        console.log(error);
    })

const ul = document.querySelector('ul');


const getDadJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    const output = res.data.joke;
    const LI = document.createElement('li');
    LI.append(output);
    ul.append(LI);
}

const button = document.querySelector('button');

button.addEventListener('click', getDadJoke);