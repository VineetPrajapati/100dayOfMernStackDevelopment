const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes")

// express app
const app = express();

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("DB Connection Error:", err));

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", postRoutes);

app.get("/", (req, res) => res.send("Hello from express server"));

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
