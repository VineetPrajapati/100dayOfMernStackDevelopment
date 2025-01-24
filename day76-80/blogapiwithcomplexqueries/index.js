const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// dotenv configuration
dotenv.config();

// db connection
connectDB();

// middleware
app.use(bodyParser.json());

app.get("/", (req, res) => res.send(`Welcome to blog-api`));
app.use("/api/blogs", blogRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
