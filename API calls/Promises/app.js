fetch("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(response => {
        console.log("Response, Waiting to parse", response);
        return response.json();
    })
    .then(response => {
        console.log("Price of Bitcoin today =>", response.ticker.price);
    })
    .catch(error => {
        console.log("Error", error);
    })

// async function to do the same

const fetchBitcoinPrice = async () => {
    const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    const data = await res.json();
    console.log(data);
}