// Dec 30, 2024
// Day 51: Introduction to REST API design principles.

const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

// middleware
app.use(express.json());

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get users by id
app.get("/users/:id", (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) throw new Error("user not found!");
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Add new user
app.post("/users", (req, res, next) => {
  try {
    const { id, first_name, last_name, email, gender } = req.body;
    if (!id || !first_name || !gender) {
      res.status(400).json({
        error: "id, first_name and gender required!",
      });
    } else {
      users.push({ id, first_name, last_name, email, gender });
      res.status(201).json({
        message: "User added",
        users,
      });
    }
  } catch (error) {
    next(error);
  }
});

// Update a User by id
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(400).json({
      success: false,
      error: "User not found!",
    });
  }

  const { id, first_name, last_name, email, gender } = req.body;
  user.id = id || user.id;
  user.first_name = first_name || user.first_name;
  user.last_name = last_name || user.last_name;
  user.email = email || user.email;
  user.gender = gender || user.gender;

  res.status(200).json({
    success: true,
    data: user,
  });
});

// Delete user by id
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "User not found!",
    });
  }

  const deleteUser = users.splice(userIndex, 1);
  res.status(200).json({
    success: true,
    data: deleteUser,
  });
});

app.listen(8080, () => console.log(`Server Started!`));
