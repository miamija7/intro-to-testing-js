// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(name) {
    if (!!name && typeof(name) === "string" && !parseFloat(name))
        return `Hello, ${name}!`;
    else
        return "Hello, World!";
}
let obj = {};
let array = [];

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    if (typeof input === 'boolean')
        return false;
    else
        return input % 2 === 0;
}
