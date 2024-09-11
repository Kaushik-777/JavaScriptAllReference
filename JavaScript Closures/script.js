//? Example of a Closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ', outerVariable);
        console.log('Inner variable: ', innerVariable);
    }
}
const newFunction = outerFunction('Outside');
newFunction('inside');

//? Second Example
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());

//? Example with Asynchronous Code
function greetAfterDelay(name) {
    const greeting = 'Hello';

    setInterval(() => {
        console.log(`${greeting}, ${name}`);
    }, 1000);
}
greetAfterDelay("Alice");