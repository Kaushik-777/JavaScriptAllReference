//! Conditional Statements
//? if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

//? if else statement
let ag = 16;
if (ag >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//? else if statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//? switch statement
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Bananas are high in potassiam");
    break;
  default:
    console.log("Unknown fruit.");
}

//! looping structure
//? for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//? while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

//? do while loop
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 5);

//? for in loop
let person = {
  name: "Alice",
  age: 25,
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//? for of loop
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}

//? Exception Handling
// try, catch()
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.log("An error occured: ", error.message);
}

//? try, catch(), finnaly
try {
  let res = riskyOperation();
  console.log(res);
} catch (error) {
  console.log("An error occured: ", error.message);
} finally {
  console.log("This code runs no matter what");
}

//! control flow interruptions
//? break statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//? continue statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//? return statement
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

//? Example combining multiple control structures
function classifyNumber(num) {
  if (num < 0) {
    return "Negative";
  } else if (num > 0) {
    return "Positive";
  } else {
    return "Zero";
  }
}

for (let i = -2; i <= 2; i++) {
  console.log(`${i} is ${classifyNumber(i)}`);
}

try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This code runs no matter what.");
}

function riskyOperation() {
  // This function might throw an error
  if (Math.random() > 0.5) {
    throw new Error("Random error");
  }
  return "Success";
}

//! Throwing Errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log("Error: ", error.message);
}

//! custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required.");
  }
  if (!user.age || user.age < 18) {
    throw new ValidationError("User must be at least 18 years old.");
  }
}

try {
  validateUser({ age: 16 });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error: ", error.message);
  } else {
    console.error("Unexpected Error: ", error);
  }
}

//! Error handling with promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ data: "Simple data" });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}
fetchData()
  .then((data) => {
    console.log("Received data: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error.message);
});


//! Using finally with Promise
fetchData().then(data => {
  console.log("Recieved data: ", data);
}).catch(error =>  {
  console.log("Error: ", error.message);
}).finally(() => {
  console.log("Fetch attempt finished");
});

//! Error handling with Async/Await
async function fetchData5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ data: 'Sample data' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

async function main1() {
  try {
    const data = await fetchData5();
    console.log('Received data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    console.log('Fetch attempt finished.');
  }
}

main1();


