// Dec 25, 2024
// Day 46: Set up an Express server, create routes.

const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.json());

// Get request
// home
app.get("/", (req, res) => res.send("Welcome to the express server!"));

// about
app.get("/about", (req, res) => res.send("This is a about page"));

// contact
app.get("/contact", (req, res) => res.send("This is a contact page"));

// Post, put and delete request
app.post("/submit", (req, res) => {
  const requestData = req.body;
  console.log("Data received:", requestData);
  res.status(200).send("Data received successfully.");
});
app.put("/update", (req, res) => res.send("Data updated!"));
app.delete("/delete", (req, res) => res.send("Data has been deleted!"));

// Handle 404 errors
app.use((req, res) => res.status(404).send("404 - Page Not Found"));

// Start the Server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
