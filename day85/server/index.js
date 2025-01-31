// Feb 01, 2025
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// mongodb
connectDB();

// routes
app.use("/api/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
