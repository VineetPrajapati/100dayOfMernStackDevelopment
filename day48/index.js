// Dec 27, 2024
// Day 48: Learn how to handle requests and responses.

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to the Home Page!"));

app.get("/user/:id", (req, res) => {
  const userID = req.params.id;
  res.send(`User ID : ${userID}`);
});

app.get("/search", (req, res) => {
  const query = req.query.name;
  res.send(`You serached for: ${query}`);
});

// handle post request
app.post("/create-user", (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: "User created successfully",
    user: { name, email },
  });
});

app.put("/update-user/:id", (req, res) => {
  const userID = req.params.id;
  const { name, email } = req.body;

  res.json({
    message: `User ${userID} upadated successfully`,
    updatedData: { name, email },
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
