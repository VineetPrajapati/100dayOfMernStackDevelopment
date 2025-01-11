// Jan 5 - 8, 2025
// Day 57-60: Create a small project (e.g., a "To-Do" REST API) that includes authentication

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
const PORT = 5000;

// Import routes
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
