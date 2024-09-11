/*=================== Basic Object Destructing =====================*/
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Destructure the object
const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

//? Destructing with different variable names
const Person = {
  name: "John",
  age: 30,
};

// Destructure with different variable names
const { name: fullName, age: yearsOld } = Person;

console.log(fullName);
console.log(yearsOld);

//? Default values
const per = {
  name: "John",
  age: 30,
};

// Destructure with default values
const { nm, ag, ciy = "Unknown" } = per;

console.log(nm);
console.log(ag);
console.log(ciy);

//? Nested Destructing
const man = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001",
  },
};

// Destructure nested objects
const {
  nam,
  address: { cty, zip },
} = man;

console.log(nam);
console.log(cty);
console.log(zip);

//? Destructing with rest operator
const women = {
  name: "Alisa",
  age: 25,
  city: "New York",
  country: "USA",
};

// Destructure and use the rest operator
const { n, a, ...rest } = women;

console.log(n);
console.log(a);
console.log(rest);

//? Function parameters destructing
const woMen = {
  nanme: "Alisa",
  age: 25,
};

function greet({ Name, Age }) {
  console.log(`Hello, my name is ${Name} and I am ${Age} years old.`);
}

greet(woMen);
