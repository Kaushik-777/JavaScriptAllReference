const { chownSync } = require("fs");

/*================= Basic Array Destructing =====================*/
const numbers = [1, 2, 3, 4, 5];

//destructing the first two elements
const [first, second] = numbers;

console.log(first);
console.log(second);

//? skipping elements
const number = [1, 2, 3, 4, 5];

// skip the first elemment nad destructing the second and fourth elements
const [, third, fourth] = number;

console.log(third);
console.log(fourth);

//? using rest operator
const num = [1, 2, 3, 4, 5];

// Destructure the first element and collect the rest into a new array
const [fifth, ...sixth] = num;

console.log(fifth);
console.log(sixth);

//? default values
const nums = [1, 2];

// Destructure with default values
const [seventh, eight, nineth = 3] = nums;

console.log(seventh);
console.log(eight);
console.log(nineth);

//? nested destructing
const nestedArray = [1, [2, 3], 4];

//Destructure the newsted array
const [fs, [sc, th], fort] = nestedArray;

console.log(fs);
console.log(sc);
console.log(th);
console.log(fort);

//? swapping variables
let a = 1;
let b = 2;

// swap variables using array destructing
[a, b] = [b, a];

console.log(a);
console.log(b);
