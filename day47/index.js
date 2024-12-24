// Dec 26, 2024
// Day 47: Use middleware for logging and error handling..

const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8080;

// Middleware for parsing JSON
// Built-in Middleware
app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

// middleware logging library
app.use(morgan("common"));

// adding error - handling middleware
app.use((err, req, res, next) => {
  console.err(err.message);
  res.stack(500).json({ message: "Something went wrong!" });
});

app.get("/", (req, res) => res.send("Welcome to the Middleware Example!"));

app.listen(PORT, () =>
  console.log(`Server started at hppt://localhost:${PORT}`)
);
