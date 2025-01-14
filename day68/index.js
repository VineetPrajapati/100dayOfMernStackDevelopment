// Jan 16, 2025
// Day 68: Work on query customization (sorting, filtering, pagination).

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// connectDB

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB connect successfully`))
  .catch((err) => console.log(err));

// Routes
app.use("/", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
