const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB
mongoose
  .connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

// rotutes
app.use("/api/blogs", blogRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log("Server running on port:", PORT));
