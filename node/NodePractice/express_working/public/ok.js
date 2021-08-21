let flag = false;

setInterval(() => {
    flag? document.body.style.backgroundColor = "white": document.body.style.backgroundColor = "blue";
    flag = !flag;
}, 1000);