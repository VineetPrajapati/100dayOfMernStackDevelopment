const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Vineet", email: "vineetppt@gmail.com" },
  { id: 2, name: "Ram", email: "ram@gmail.com" },
  { id: 3, name: "Rahul", email: "rahul@gmail.com" },
  { id: 4, name: "Ravi", email: "ravi@gmail.com" },
  { id: 5, name: "Annu", email: "annu@gmail.com" },
];

app.use(express.json());

// get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// get users by Id
app.get("/users/:id", (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
      throw new Error(`User not found!`);
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Add new user
app.post("/users", (req, res, next) => {
  try {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
      res.status(400).json({
        error: "Id, Name, and Email required!",
      });
    } else {
      users.push({ id, name, email });
      res.status(201).json({
        message: "User added",
        users,
      });
    }
  } catch (error) {
    next(error);
  }
});

// update user by id
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { id, name, email } = req.body;

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({
      error: "User not found",
    });
  }
  users[userIndex] = { id: id, name, email };
  res.json(users[userIndex]);
});

// delet user by id
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      error: "User not found!",
    });
  }

  const deleteUser = users.splice(userIndex, 1);
  res.json({
    message: "User deleted",
    user: deleteUser,
  });
});

app.listen(8080, () => console.log(`Server Started!`));
