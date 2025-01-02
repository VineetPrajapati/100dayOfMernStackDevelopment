// Jan 04, 2025
// Day 56: Secure your API endpoints with authentication middleware.

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const PORT = 8000;

const SECRET_KEY = "Secret@124";

// middleware
app.use(express.json());
function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No token provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }
    req.user = user;
    next();
  });
}

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard", user: req.user });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "Vineetppt" && password === "Pass@1234") {
    const token = jwt.sign({ username }, SECRET_KEY);
    return res.json({ token, username:username });
  }

  res.status(401).json({ message: "Invalid credentials" });
});



// server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
