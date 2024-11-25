/* 
A function is a reusavle block of code designed to perform a specific task. We can define a function once and call it multiple times. 
*/

// Declaring Functions : It can be decalared using the "function" keyword.

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Ali");

// Function Expression :  function will be stored in a variable.

const greet1 = function (name) {
  console.log(`Hello, ${name}!`);
};
greet1("Ram");

// Arrow function : A modern way of writing functio and widely used!

const greet2 = (name) => console.log(`Hello, ${name}!`);
greet2("Charlie");

// Parameters and Return Values : Function can accept parameters and return values.

function add(a, b) {
  return a + b;
}
let sum = add(3, 4);
console.log(sum);

/*
Scope determines where a variable is accessible in your code. JavaScropt has two main types of Scope : "Global" and "Local". 
*/

// Global Scope : Variables declared outside any function or block are accessible globally.

let globVar = "I am a globla";
function test() {
  console.log(globVar);
}
test();

// Local Scope : Variables declared inside a function or block are accessible only within that function or block.

function test1() {
  let localVar = "I am local";
  console.log(localVar);
}
test1();
// console.log(localVar); cause an error : localVar not defined

/*
Block Scope (ES6 with let and const) : Variables declared with "let" or "const" have block scope, meaning they exist only with the "{}" where they were declared. 
*/

{
  let blockVar = "Block Scoped";
  console.log(blockVar);
}
// console.log(blockVar); cause an error : blockVar not defined

/*
Function Scope : Variables decalared with "var" are function-scoped, meaning they are accessiblye throughout the function.
*/

function test2() {
  var functionVar = "Function Scoped";
  console.log(functionVar);
}
test2();
// console.log(functionVar);  cause an error : functionVar not defined

/*
A closure is a funciton that retains access to its paresnt's variables even after the parents function has executed. CLosures are created every time a function is defined inside another function.

-> Data Privacy : Create private variables for functions.
-> Callback Function : Pass inner functions that maintain their scope.
*/

function outerFunction(outerVar) {
  return function innerFunction(innerVal) {
    // console.log("Hello");
    
    console.log(`Outer : ${outerVar}, Inner : ${innerVal}`);
  };
}
const closureFunction = outerFunction("Outer Val");
closureFunction("Inner val");


