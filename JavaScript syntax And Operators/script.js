/*===================== Basic Syntax ====================*/
//! variables
var x = 5;
let y = 6;
const z = 7;

//! Data Types
//? Number, String, Boolean, Object, Array, Function, Null, Undefined.

let number = 42; // number
let text = "Hello"; // string
let isTrue = true; // boolean
let obj = { Key: "Value" }; // object
let array = [1, 2, 3]; // array
let func = function () {
  // function
  return "Hello World";
};
let nothing = null; // null
let notDefined; // undefined

//! comments
//? single-line comments
// This is single-line comments

//? multi-line comments
/*This is Multi-line comments*/

//! Operators
let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Remainder: 0
console.log(a ** b); // Exponentiation: 100000

//! Assignment Operators
let c = 10;

c += 5; // Equivalent to x = x + 5
c -= 5; // Equivalent to x = x - 5
c *= 5; // Equivalent to x = x * 5
c /= 5; // Equivalent to x = x / 5
c %= 5; // Equivalent to x = x % 5
c **= 5; // Equivalent to x = x ** 5

//!Comparison Operators
let d = 10;
let e = 5;
console.log(d == e); // Equal to: false
console.log(d != e); // Not equal to: true
console.log(d === e); // Strict equal to: false
console.log(d !== e); // Strict not equal to: true
console.log(d > e); // Greater than: true
console.log(d < e); // Less than: false
console.log(d >= e); // Greate than equal to: true
console.log(d <= e); // Less than equal to: false

//! logical Operators
let one = true;
let two = false;

console.log(one && two); // Logical AND: false
console.log(one || two); // Logical OR: true
console.log(!a); // Logical NOT: false

//! Bitwise Operators
let on = 5; // 0101 in binary
let tw = 3; // 0011 in binary

console.log(on & tw); // AND: 0001 (1 in decimal)
console.log(on | tw); // OR: 0111 (7 in decimal)
console.log(on ^ tw); // XOR: 0110 (6 in decimal)
console.log(~on); // NOT: 1010 (-6 in decimal)
console.log(on << 1); // Left shift: 1010 (10 in decimal)
console.log(on >> 1); // Right shift: 0010 (2 in decimal)
console.log(on >>> 1); // Zero-fill right shift: 0010 (2 in decimal)

//! String Operators
let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2);
console.log((str1 += " Everyone"));


//! conditional(Ternary) operator
let age = 20;
let canVote  = (age >= 18) ? "Yes" : "No";
console.log(canVote);

//! Type Operators
console.log(typeof 42);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){});// "function"

//console.log(instanceof Array);   // true for arrays
//console.log(instanceof Object);  // true for objects



//! Spread and Rest Operators
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr);

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//! Example Combining Syntax and Operators
function calculateArea(radius) {
  if(radius <= 0) {
    return "Radius must be positive.";
  }

  const pi = 3.14159;
  let area = pi * radius ** 2;

  return `The area is ${area.toFixed(2)} square units.`;
}
let radii = [3, 5, -1, 7];
radii.forEach(r => {
  let result = calculateArea(r);
  console.log(result);
})