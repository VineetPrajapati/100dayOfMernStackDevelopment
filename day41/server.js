// Dec 20, 2024
// Day 41: Introduction to Node.js; create a basic server.

// http module
const http = require("http");

// PORT
const PORT = 8080;

// create a basic http server;
const server = http.createServer((req, res) => {
  // http response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello, World! to Node.js Server.");
});

// start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
