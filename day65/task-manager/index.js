const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const connetDB = require("./config/database");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
const app = express();

// connet to DB
connetDB();

// middleware
app.use(bodyParser.json());
app.use("/api/task", taskRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Task Manger API")
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
