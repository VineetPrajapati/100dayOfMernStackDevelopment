/*
An array is a collection of elements (numbers, strings, objects, or even other arrays) stored in a single variavle. Elements in an array are indexed, starting from "0".
*/
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// Common array operations:
console.log(fruits[1]); // accessed element using index

fruits.push("mango"); // add elem at the end
console.log(fruits);

fruits.unshift("kiwi"); //add elem at the beginning
console.log(fruits);

fruits.pop(); // remove elem at the end
console.log(fruits);

fruits.shift(); // remove elem at the beginning
console.log(fruits);

console.log(fruits.length); //gives the length of the array

/*
An object is collection of key-value pairs. It allows you to store data with meaningful identifiers.
*/
let person = {
  name: "John",
  age: 30,
  isEmployed: true,
};
console.log(person);

// Common object operations:
console.log(person.name); //dot notation
console.log(person["isEmployed"]); //bracket notation

person.city = "New York"; // add or update property
console.log(person);

delete person.isEmployed;
console.log(person);

// Basic array methods

// map() : creates a new array by transforming each element in the original array
// filter() : Creates a new array with elements that pass a condition
// reduce() : Reduces the array to a single value by applying a function to each (from left to right)
let num = [1, 2, 3, 4, 5, 6];
let square = num.map((n) => n * n); //map()
console.log(square);

let above2 = num.filter((n) => n > 3); //filter()
console.log(above2);

let sum = num.reduce((total, num) => total + num, 0);
console.log(sum);

// Array of objects
let books = [
  { title: "Book A", author: "Author A", pages: 150 },
  { title: "Book B", author: "Author B", pages: 300 },
  { title: "Book C", author: "Author C", pages: 250 },
];

// Extracting title
let title = books.map((tit) => tit.title);
console.log(title);

// Filter books with more than 200 pages
let pages = books.filter((page) => page.pages > 200);
console.log(pages);

// calculate total pages using reduce()

let pageTotal = books.reduce((pageTotal, page) => pageTotal + page.pages, 0);
console.log(pageTotal);
