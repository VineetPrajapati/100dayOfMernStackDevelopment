// Dec 21, 2024
// Day 42: Understand modules, NPM, and packages.

// http module
const http = require("http");

// os module
const os = require("os");
console.log(`Free Memory: ${os.freemem()}`);
console.log(`Free Memory: ${os.totalmem()}`);



// path module
const path = require("path");

// file module "fs"
const fs = require("fs");

// port number
const PORT = 8080;

// fs module
fs.writeFileSync("example1.txt", "Another example of node.js");
const data = fs.readFileSync("example.txt", "utf-8");

// Join paths
const filePath = path.join(__dirname, "example.txt");
console.log(filePath);

const fileName = path.basename(
  "/Users/hp/Desktop/100dayOfMernStackDevelopment/day42"
);
console.log(fileName);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(data);
});

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
