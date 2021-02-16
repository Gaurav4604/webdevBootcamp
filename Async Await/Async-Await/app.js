async function hello() {

} // returns a promise

const sing = async () => {
    throw new Error("This didnt work :(");
    // throwing an error will reject the promise
    return 'La La La';
    // returning a value resolves the promise

}

sing()
    .then((data) => console.log("Promise resolved with", data))
    .catch((err) => console.log(err));

const login = async (usr, pswd) => {
    if (!usr || !pswd) throw 'Missing Credentials';
    if (pswd.length > 6) return 'Welcome';
    else throw 'Invalid Pswd';
}

login('bleh')
    .then((data) => {
        console.log(data);
        console.log("Logged In")
    }).catch((err) => {
        console.log("ERROR!");
        console.log(err);
    })

// await function

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7)
                resolve('Your Fake data here!', url);
            else
                reject('Request Error');
        }, 2000);
    });
};
// note await only works with Promises
async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('white', 1000);
    await delayedColorChange('green', 1000);
    return 'all done';
}

rainbow().then((data) => console.log(data));

async function makeTwoRequests() {
    let data1 = await fakeRequest('page1/');
    console.log(data1);
}