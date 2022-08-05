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
    return (input % 2 === 0 && typeof input !== 'boolean');
}

function isVowel(input){
    let vowels = 'aeiou';
    return (!!input && typeof input == 'string' && vowels.includes(input.toLowerCase()))
}

function add(input1, input2){
    return (parseFloat(input1) + parseFloat(input2));
}

