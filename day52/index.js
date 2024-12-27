// Dec 31, 2024
// Day 52: Create routes for a simple API (GET, POST, PUT, DELETE).

const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the simple API");
});

// GET REQUEST
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

// GET REQUEST BY ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(400).json({
      success: false,
      data: "User not found!",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// POST REQUEST
app.post("/users", (req, res, next) => {
  try {
    const { id, first_name, last_name, email, gender } = req.body;

    const newUser = {
      id: users.length + 1,
      first_name,
      last_name,
      email,
      gender,
    };

    if (!first_name || !last_name || !email || !gender) {
      res.status(400).json({
        success: false,
        error: "Incomplet field",
      });
    }

    users.push(newUser);

    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
});

// PUT REQUEST
app.put("/users/:id", (req, res) => {
  const userID = parseInt(req.params.id);
  const user = users.find((u) => u.id === userID);

  if (!user) {
    res.status(400).json({
      success: false,
      error: "User not found",
    });
  }

  const { first_name, last_name, email, gender } = req.body;
  user.first_name = first_name || user.first_name;
  user.last_name = last_name || user.last_name;
  user.email = email || user.email;
  user.gender = gender || user.gender;

  res.status(200).json({
    success: true,
    data: user,
  });
});

// DELETE REQUEST
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "User not found",
    });
  }

  const deleteUser = users.splice(userIndex, 1);
  res.status(200).json({
    success: true,
    data: deleteUser
  });
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
