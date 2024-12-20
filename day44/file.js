// Dec 23, 2024
// Day 44: Learn about asynchronous programming and callbacks.

const fs = require("fs");

// synchronous method :- small scale project
// fs.writeFileSync("text.txt", "This is a sync text file");
// const readFile = fs.readFileSync("./text.txt",  "utf-8");
// console.log(readFile);

// Asynchronous method :- suitable for large scale project;
// fs.writeFile("./test.txt", "this is a asynchronous file", (err) => {
//   if (err) {
//     throw err;
//   }
// });

fs.readFile("./test.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
