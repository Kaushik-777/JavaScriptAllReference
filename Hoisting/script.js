/*=========== first example ================*/
console.log(x); // undefined
var x = 5;
console.log(x); //5
/*============ second example =============*/
console.log(y); //Cannot access y before initialization
let y = 5;
console.log(y);
/*================ third example ===============*/
foo(); // Hello World
function foo() {
  console.log("Hello World");
}
/*============== fourth example ============*/
bar(); // bar is not a function
var bar = function () {
  console.log("Hello World");
};
bar(); // Hello World
//!var: Declaration is hoisted and initialized to undefined
//!let and const: Declarations are hoisted but not initialized, leading to a temporal dead zone
//!Function declarations: Fully hoisted, including the function body
//!Function expressions: Only the variable declaration is hoisted, not the function definition
