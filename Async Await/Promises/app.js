const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7)
                resolve('Your Fake data here!');
            else
                reject('Request Error');
        }, 2000);
    });
};

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('Done with requests!', data);
    })
    .catch((err) => {
        console.log("the request failed to acknowledge", err);
    })

// making a Custom promise that changes screen color

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('lightgreen', 1000))
    .then(() => delayedColorChange('yellow', 1000))