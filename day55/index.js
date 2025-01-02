const express = require("express");
const app = express();
const port = 3000;

// jwt token
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// middleware
app.use(express.json());

// secret key
const SECRET_KEY = "secret123";

const users = [];

// routes
app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/user/register", async (req, res) => {
  const { username, eamil, password } = req.body;
  const userExists = users.find((user) => user.username === username);
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    id: users.length + 1,
    username,
    eamil,
    password: hashedPassword,
  });
  res.status(201).json({ message: "User registered successfully" });
});

app.post("/user/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const isPasswordvalid = await bcrypt.compare(password, user.password);

  if (!isPasswordvalid) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY);

  res.json({ token, success: true });
});

function authenticateToke(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token required" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = user;

    next();
  });
}

app.get("/user/protected", authenticateToke, (req, res) => {
  res.json({
    message: "Welcome to the protected route",
    userId: req.user.userId,
  });
});

app.listen(port, () =>
  console.log(`Sever listening at http://localhost:${port}`)
);
