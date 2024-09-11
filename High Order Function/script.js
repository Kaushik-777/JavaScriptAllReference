/*=========== Higher Order Function ====================*/
//! Function as Argument
//? Higher-order function can take other function as argument

/*========== Example 1 ===============*/
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/*========== Example 2 ===============*/
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15
