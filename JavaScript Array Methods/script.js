//? push()
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
//? pop()
let arr1 = [1, 2, 3];
arr1.pop();
console.log(arr1);
//? shift()
let arr2 = [1, 2, 3];
arr2.shift();
console.log(arr2);
//? unshift()
let arr3 = [1, 2, 3];
arr3.unshift(4);
console.log(arr3);
//? splice()
let arr4 = [1, 2, 3, 4, 5, 6, 7];
arr4.splice(2, 2, 101, 102);
console.log(arr4);
//? sort()
let arr5 = [3, 2, 1];
arr5.sort();
console.log(arr5);
//? reverse()
let arr6 = [1, 2, 3];
arr6.reverse();
console.log(arr6);

//! Accessor Methods

//? slice()
let arr7 = [1, 2, 3, 4, 5];
let newArr = arr7.slice(1, 3);
console.log(newArr);
//? concat()
let arr8 = [1, 2];
let arr9 = [3, 4];
let arr10 = arr8.concat(arr9);
console.log(arr10);
//? join()
let arr11 = [1, 2, 3, 4];
let str = arr11.join("-");
console.log(str);
//? indexOf()
let arr12 = [1, 2, 3];
let NewArr = arr12.indexOf(2);
console.log(NewArr);
//? lastIndexOf()
let arr13 = [1, 2, 3, 2];
let newArrReturn = arr13.lastIndexOf(3);
console.log(newArrReturn);
//? includes()
let arr14 = [1, 2, 3];
let returnArr = arr14.includes(2);
console.log(returnArr);
//? substring()
let text = "Hello World!";
let subText = text.substring(7, 12);
console.log(subText);
//? charAt()
let txt = "I love JavaScript";
const index = 4;
console.log(`The character at index ${index} is ${txt.charAt(index)}`);
//? charCodeAt()
let sentence = "The quick brown fox jumps over the lazy dog.";
const idx = 4;
console.log(
  `Character code ${sentence.charCodeAt(idx)} is equal to ${sentence.charAt(
    idx
  )}`
);
//? fromCharCode()
console.log(String.fromCharCode(75, 97, 117, 115, 104, 105, 107));
//? toFixed()
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456));
//? replace()
let rep = "Hello";
let place = rep.replace("lo", "p");
console.log(place);

//? replaceAll()
let text1 = 'Hello, world! Welcome to the world of javascript';
let newText = text1.replaceAll("world", "Universe");
console.log(newText);
//! JavaScript Iteration Methods
//? forEach()
let arr20 = [1, 2, 3, 4];
//FIXME: Example 1
arr20.forEach((element) => console.log(element));
//FIXME: Example 2
arr.forEach((val) => {
  console.log(val);
});

//? map()
let a = [1, 2, 3, 4, 5];
//FIXME: Example 1
a.map((element) => console.log(element * 2));
//FIXME: Example 2
let newA = a.map((element) => {
  console.log(element * 2);
});

//? filter()
let b = [1, 2, 3, 4, 5];
let newB = b.filter((element) => {
  return element > 2;
});
console.log(newB);

//? reduce()
let c = [1, 2, 3, 4];
let sum = c.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

//? reduceRight()
let d = [1, 2, 3, 4];
let sum1 = d.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum1);

//? some()
let e = [1, 2, 3];
let hasEven = e.some((element) => element % 2 === 0);
console.log(hasEven);

//? every()
let f = [1, 2, 3];
let allEven = f.every((element) => element % 2 === 0);
console.log(allEven);

//? find()
let g = [1, 2, 3];
let found = g.find((element) => element > 1);
console.log(found);

//? findIndex()
let h = [1, 2, 3];
let foundIndex = h.findIndex((element) => element > 2);
console.log(foundIndex);

//? flat()
let i = [1, 2, [3, 4]];
let flatArr = i.flat(2);
console.log(flatArr);

//? flatMap()
let j = [1, 2, 3];
let flatMappedArr = j.flatMap((x) => [x, x * 2]);
console.log(flatMappedArr);
