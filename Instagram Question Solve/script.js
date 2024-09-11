/*==================== first example =================*/
function test() {
  if (true) {
    console.log("Nothing");
  } else {
    let data = {
      name: "Kaushik",
    };
    return data;
  }
}

console.log(test());

/*============= second example ====================*/
let another = function () {
  if (false) return;
  else {
    let data = {
      name: "Kaushik",
    };
    return data;
  }
};
console.log(another());

/*================ third example ===================*/
//? array largest number
let arr = [1, 8, 7, 56, 90];

function largest(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  document.write(max);
}

largest(arr);
