document.body.style.backgroundColor = 'red';

setTimeout(() => {
    document.body.style.backgroundColor = 'orange';
    setTimeout(() => {
        document.body.style.backgroundColor = 'blue';
        setTimeout(() => {
            document.body.style.backgroundColor = 'green';
            setTimeout(() => {
                document.body.style.backgroundColor = 'purple';
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

// this is callback hell