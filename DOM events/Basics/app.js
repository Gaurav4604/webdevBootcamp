const btn = document.querySelector('#btn');

btn.onclick = function () {
    console.log("Hello there");
    console.log("Bye FO");
};

const btnV2 = document.querySelector('#btnV2');

btnV2.addEventListener('click', function () {
    console.log("Done");
});

// event listeners can handle multiple functions at once
// whereas onClick can be assigned only one function at a time