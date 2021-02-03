console.log('hello')
//works asynchronously
//thus anything below it is printed without waiting for 
// this setTimeout to be executed
setTimeout(() => {
    console.log('Are you still there?')
}, 3000);

console.log('After Timeout'); //this will run imediately


//set interval (calling a particular function every 2000 ms)
const ID = setInterval(() => {
    console.log(Math.random())
}, 2000);

// how to stop a setInterval operation
//doig it inside setTimeout as it needs to be done after 6000 ms delay
setTimeout(() => (clearInterval(ID)), 6000);