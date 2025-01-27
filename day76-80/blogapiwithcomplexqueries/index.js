const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");

dotenv.config();

// express app
const app = express();

// middleware
app.use(bodyParser.json());

// mongodb connection
connectDB();

// routes
app.use("/blogs", blogRoutes);

// start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server connected successfully on port:${PORT}`)
);
