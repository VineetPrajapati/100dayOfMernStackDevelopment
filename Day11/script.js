/* Javascript is a versatile, high - level programming language   essential for creating dynamic and interactive web applications.
 */

/* 1. Variables
   Variables are containers for storing data values. In javascript, we declare varibles using "var", "let", or "const".
*/
// let variableName = value;  Modern way to declare variables

/* Types of Declarations:
   1. "let" : Block-scoped and can be reassigned.
   2. "const" : Block-scoped and cannot be reassigned after initialization
   3. "var" : Function-scoped (older style, avoid using in modern code)
*/

let age = 25;
age = 30; // Allowed

const pi = 3.14;
// pi = 3.15; cause an error

var name = "John";

/* Data Types
   Javascript has two main categories of data types : "Primitive" and Non - Primitive
*/

// Primitive data types
let name1 = "Alice" // String : Represents textual data.

let score = 25;  // Number : Represents integers and floating-point numbers;

let isStudent = true // Boolean : Representes "true" or "false"

let value;    // Undefined : A variable declared but not assigned a value.
console.log(value);

let data = null; //Represents an explicitly empty or unknown value.

// Symbol : Uses for unique identifiers (introduces in ES6).
// BigInt : Used for very large numbers beyond the "Number" type's range.

// Non - Primitive Types:
let person = { name : "Alice", age : 26}; // Object : Collection of properties.

/* 
Types of Operators:
1. Arithmetic Operators : perform mathematical operations;
2. Assignment Operators : Assign values to variables;
3. Comparision Operators : Compare two values and return a boolean (true or false);
4. Logical Operators : Combine multiple conditions;
5. String Operators : Concatenate string;
6. Unary Operators : Work with one operand;
7. Ternary Operator : shortcut of if...else;  
*/

// Arithmetic Operator
console.log(10+5); 
console.log(10-5);
console.log(10*5);
console.log(10/5);
console.log(10%5); // modulus gives the reminder

// Assignment Operators
let x = 5;
x += 3; // x = x + 3
x *= 2; // x = x * 2

// Comparision Operators
let isEqual = 5 == "5";
let isStictEqual = 5 === "5" // strict equality --> cehecks the data type as well
let isGreater = 10 >5;

// Logical Operators;
let and = true && false;
let or = true || false;
let not = !true 

// String Operators;
let greeeting = "Hello" + " World";
console.log(greeeting);

// Unary Operators;
let y = 5;
y++; // Increment
y--; // Decrement

// Ternary Operator

let result = 10 > 5 ? "Greeting" : "Smalller"
console.log(result);









