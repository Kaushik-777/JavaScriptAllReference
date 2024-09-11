// mutable
let obj = {
  name: "john",
};

obj.name = "Kaushik"; // This value of object is changed to {name: "Kaushik"}
console.log(obj);

let arr = [1, 2, 3];
arr.push(4); // This value of arr is changed to [1, 2, 3, 4]
console.log(arr);

// immutable
let str = "Hello";
str[0] = "J"; // This has no effect, str remains "Hello"
console.log(str);

let num = 5;
num += 1; // This creates a new value 6, num is now 6, but the original 5 is not changed

console.log(num);

let obj1 = {
  name: "John",
};
let newObj = { ...obj1, name: "Kaushik" };
console.log(newObj); // output Kaushik

let arr1 = [1, 2, 3];
let newArr = [...arr1, 4];
console.log(newArr); // output [1, 2, 3, 4]
