const express = require("express");
const connectDB = require("./config/database");
const Post = require("./models/postSchema");

// express app
const app = express();

// middleware
app.use(express.json());

// database connected
connectDB();

app.get("/", (req, res) => {
  res.send("Database connection");
});
app.post("/post", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newUser = new Post({ title, content });
    await newUser.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Post created" });
  }
});

// server
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost${PORT}`)
);
