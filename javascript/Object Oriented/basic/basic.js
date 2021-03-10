function hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// making objects using factory functions
function colorMaker(r, g, b) {
    colors = {};
    colors.r = r;
    colors.g = g;
    colors.b = b;

    colors.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`
    }
    colors.hex = function () {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return colors;
}
// objects using constructor functions
const obj = colorMaker(12, 234, 19);
console.log(obj.rgb());
console.log(obj.hex());

function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
    console.log(this);
}

Color.prototype.rgb = function () {
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`;
}

Color.prototype.rgba = function(a=1.0){
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`;
}

const black = new Color(0,0,0); // here the new keyword triggers the constructor function

// good way of using classes and objects
class Color_2 {
    constructor(r,g,b,name,customGreeting){
        console.log("Inside Constructor");
        console.log(r,g,b);
        // adding properties to the class object
        this.r=r;
        this.g=g;
        this.b=b;
        this.name = name;
        this.addAttributes(customGreeting);
    }
    greet(){
        return `Hello from ${this.name}`;
    }
    innerRGB(){
        return `${this.r},${this.g},${this.b}`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`; // calling another function of the same class
    }
    addAttributes(customGreeting){
        this.greeting = customGreeting; // adding another attribute to the class from inside the class
    }
}

const c1 = new Color_2(255,67,89,"tomato","Hello There");

class Pet{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Cat extends Pet{
    constructor(name,age,noOfLives=9){
        super(name,age);
        this.noOfLives = noOfLives;
    }
    meow(){
        console.log("Meow");
    }
    // function overriding
    eat(){
        console.log(`${this.name} is eating fast!`);
        super.eat();
    }
}
class Dog extends Pet{
    bark(){
        console.log("woofff");
    }
}

const Anakin = new Cat("Anakin",1);
const kenobi = new Dog("kenobi",1);

Anakin.eat();
Anakin.meow();
kenobi.eat();
kenobi.bark();