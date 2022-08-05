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

//Exercise #1
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
})


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
})