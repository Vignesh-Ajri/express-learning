/********************************************
 * JavaScript Fundamentals - All in One File
 ********************************************/

/* ============================
   01 - Variables & Data Types
===============================*/

// Variables
var oldVar = "I am var";      // function-scoped
let myLet = 42;               // block-scoped
const myConst = "constant";   // block-scoped, cannot reassign

console.log(oldVar, myLet, myConst);

// Data Types
let str = "Hello";
let num = 123;
let bool = true;
let und;
let nul = null;
let obj = { name: "Alice" };
let arr = [1, 2, 3];

console.log(typeof str, typeof num, typeof bool, typeof und, typeof nul, typeof obj, typeof arr);

// Examples / Cases
let mixedArray = [1, "two", true, null, undefined, { a: 1 }];
console.log(mixedArray);

/* ============================
   02 - Functions
===============================*/

// Regular Function
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

// Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(3, 4));

// Higher-Order Function
function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}!`);
    };
}
const greetAlice = greet("Alice");
greetAlice("Hello");

// Callback Example
function calculator(a, b, operation) {
    return operation(a, b);
}
console.log(calculator(10, 5, (x, y) => x - y));

/* ============================
   03 - Arrays & Objects
===============================*/

// Array Methods
let fruits = ["apple", "banana", "cherry"];
fruits.push("date");        // add to end
fruits.unshift("mango");    // add to start
console.log(fruits);

let removed = fruits.pop(); // remove last
console.log(removed, fruits);

let upperFruits = fruits.map(f => f.toUpperCase());
console.log(upperFruits);

// Object Operations
let person = { name: "Bob", age: 25, city: "NY" };
person.country = "USA";          // add property
delete person.city;              // remove property
console.log(person);

// Destructuring
let { name, age } = person;
console.log(name, age);

// Spread Operator
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined);

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

/* ============================
   04 - ES6 Features
===============================*/

// Template Literals
let user = "Alice";
let greeting = `Hello, ${user}! Welcome to JS.`;
console.log(greeting);

// Default Parameters
function sayHello(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
sayHello();
sayHello("Bob");

// Rest Parameter
function sumAll(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

// Spread in function call
let nums = [10, 20, 30];
console.log(sumAll(...nums));

/* ============================
   Extra Examples / Cases
===============================*/

// Nested objects & arrays
let data = {
    users: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ],
    active: true
};
console.log(data.users[0].name);

// Array filtering
let numbers = [10, 15, 20, 25];
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

// Combining everything
const processUsers = (users, callback) => {
    return users.map(user => callback(user));
};
let processed = processUsers(data.users, u => `${u.name.toUpperCase()} (${u.id})`);
console.log(processed);
