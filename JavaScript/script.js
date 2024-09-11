/*==================== Basic of JavScript =================*/
//! Function Declaration
//? example 1
function functionName(parameters) {
    //function body
    console.log(parameters);
}
functionName("Hello");

//? example 2
function greet(name) {
    return `Hello, ${name}`;
}
let firstName = greet("Kaushik");
console.log(firstName);

//! Function Expression
//? example 1
const FunctionName = function(parameters) {
    // function body
    console.log(parameters);
}
FunctionName("Hello World");

//? example 2
const Func = function(name) {
    return `Hello, ${name}`;
}
let finalValue = Func("Aditya");
console.log(finalValue);


//! Arrow Function Expression
//? Example 1
const FuncName = (name) => {
    // function body
    console.log(name);
}
FuncName("Hello I am Arrow Function Expresssion 1")

//? Example 2
const great = (name) => {
    return `Hello, ${name}`;
}
let store = great("I am Arrow Function Expresssion 2");
console.log(store);

//! Single Expression Arrow Function
const singleFunc = name => `Hello, ${name}`;
let Single = singleFunc("I am Single Function Expression");
console.log(Single);


//! IIFE (Immediately Invoked Function Expression)
//? Example 1
(function(parameters) {
    // function body
})(/*arguments*/);

//? Example 2
(function(parameters) {
    console.log(`Hello, ${parameters}`);
})('World');


/*=============== Something Function Name ==================*/
//? Anonymous Function
const AnonFunc = function(parameters) {
    // function body
}
//? Named Function
function namedFunc() {
    // function body
}
//? Arrow Function
const ArrowFunc = () => {
    // function body
}
//? IIFE
(function() {
    // function body
})();

//! Another Named Function Example
const factorial = function fac(n) {
    return n <= 1 ? 1 : n * fac(n - 1);
}
let finalFactorial = factorial(5);
console.log(finalFactorial);