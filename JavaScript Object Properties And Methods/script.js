//! Object Properties
//? Defining Properties
let person = {};
person.name = "Alice";
person["age"] = 25;
//? Accessing Properties
console.log(person.name);
console.log(person["age"]);

//? Property Shorthand
let name = "Bob";
let age = 30;
let person1 = { name, age };
console.log(person1);

//? Computed Property Names
let prop = "favoriteColor";
let person2 = {
  [prop]: "Blue",
};
console.log(person2.favoriteColor);

//! Object Methods
//? Defining Methods
let person3 = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
//FIXME: shorthand syntax
let person4 = {
  name: "Bob",
  greet() {
    console.log("Hello, " + this.name);
  },
};
// calling methods
person3.greet();
person4.greet();

//? common object methods
// Object.keys(obj)
let keys = Object.keys(person3);
console.log(keys);

// Object.values(obj)
let values = Object.values(person3);
console.log(values);

// Object.entries(obj)
let entries = Object.entries(person3);
console.log(entries);

// Object.assign(obj)
let target = {};
let source = {a: 1, b : 2};
let valueReturn = Object.assign(target, source);
console.log(valueReturn);

// Object.freeze(obj)
let obj = {a: 1};
Object.freeze(obj);
obj.a = 2; // typeError in strict mnode

// Object.seal(obj)
let obj1 = {a: 1};
Object.seal(obj1);
obj1.b = 2;// typeError in strict mnode

// Object.create(proto, [propertiesObject])
let proto = {
    greet() {
        console.log("Hello");
    }
}
let Obj = Object.create(proto);
Obj.greet();

//? Example
let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    getInfo() {
      return `${this.brand} ${this.model} (${this.year})`;
    },
    updateYear(newYear) {
      this.year = newYear;
    }
  };
  
  console.log(car.getInfo()); // 'Toyota Corolla (2020)'
  car.updateYear(2021);
  console.log(car.getInfo()); // 'Toyota Corolla (2021)'
  
  // Using Object methods
  console.log(Object.keys(car)); // ['brand', 'model', 'year', 'getInfo', 'updateYear']
  console.log(Object.values(car)); // ['Toyota', 'Corolla', 2021, [Function: getInfo], [Function: updateYear]]
  console.log(Object.entries(car)); // [['brand', 'Toyota'], ['model', 'Corolla'], ['year', 2021], ['getInfo', [Function: getInfo]], ['updateYear', [Function: updateYear]]]
  
  let newCar = Object.assign({}, car);
  console.log(newCar); // { brand: 'Toyota', model: 'Corolla', year: 2021, getInfo: [Function: getInfo], updateYear: [Function: updateYear] }