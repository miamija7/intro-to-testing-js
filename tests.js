// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe ('sayHello', function (){
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it ('should return a string when called', function (){
        expect(typeof sayHello()).toBe('string');
    });
    it ('should return "Hello, Jane!" from sayHello("Jane");', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it ('should return "Hello, Alex!" from sayHello("Alex");', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it ('should return "Hello, Pat!" from sayHello("Pat");', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it ('should return "Hello, World!" from sayHello();', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" from sayHello(true);', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it ('should return "Hello World!" from sayHello(false);', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" from sayHello(null);', function(){
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" from sayHello("");', function(){
        expect(sayHello("")).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" from sayHello(2.5);', function(){
        expect(sayHello(2.5)).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" from sayHello("5");', function(){
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" from sayHello(obj);', function(){
        expect(sayHello(obj)).toBe("Hello, World!");
    });
    it ('should return "Hello, World!" from sayHello(array);', function(){
        expect(sayHello(array)).toBe("Hello, World!");
    });
});

describe('isFive', function(){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it ('should return a boolean', function() {
        expect(typeof (isFive())).toBe('boolean');
    });
    it ('should return true from isFive(5);', function() {
        expect(isFive(5)).toBe(true);
    });
    it ('should return true from isFive("5");', function() {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function(){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it ('should return a boolean', function() {
        expect(typeof (isFive())).toBe('boolean');
    });
    it ('should return true from isEven(2);', function (){
        expect(isEven(2)).toBe(true);
    });
    it ('should return true from isEven(-4);', function (){
        expect(isEven(-4)).toBe(true);
    });
    it ('should return false from isEven(3);', function (){
        expect(isEven(3)).toBe(false);
    });
    it ('should return false from isEven("banana");', function (){
        expect(isEven("banana")).toBe(false);
    });
    it ('should return true from isEven("8");', function (){
        expect(isEven("8")).toBe(true);
    });
    it ('should return false from isEven(Infinity);', function (){
        expect(isEven(Infinity)).toBe(false);
    });
    it ('should return false from isEven(true);', function (){
        expect(isEven(true)).toBe(false);
    });
    it ('should return false from isEven(false);', function (){
        expect(isEven(false)).toBe(false);
    });
    it ('should return false from isEven();', function (){
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it ('should be a defined function', function() {
       expect(typeof isVowel).toBe('function');
    });
    it ('should return a boolean', function() {
        expect(typeof (isVowel())).toBe('boolean');
    });
    it ('should return a true from isVowel("a")', function() {
        expect(isVowel("a")).toBe(true);
    });
    it ('should return a true from isVowel("A")', function() {
        expect(isVowel("A")).toBe(true);
    });
    it ('should return a false from isVowel("y")', function() {
        expect(isVowel("y")).toBe(false);
    });
    it ('should return a false from isVowel(4)', function() {
        expect(isVowel(4)).toBe(false);
    });
    it ('should return a false from isVowel("4")', function() {
        expect(isVowel("4")).toBe(false);
    });
    it ('should return a false from isVowel(true)', function() {
        expect(isVowel(true)).toBe(false);
    });
    it ('should return a false from isVowel(false)', function() {
        expect(isVowel(false)).toBe(false);
    });
    it ('should return a false from isVowel("banana")', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it ('should return a false from isVowel()', function() {
        expect(isVowel()).toBe(false);
    });
});
