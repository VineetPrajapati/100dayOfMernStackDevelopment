// Jan 15, 2025
// Day 67: Learn about relationships (embedded vs. referenced documents).

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const postRoutes = require("./router/postRouter");
const commentRoutes = require("./router/commentRouter");

const app = express();

// middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// mongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/relationData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.error(`MongoDB connection error: ${err}`));

//   Routes
app.use("/", postRoutes);
app.use("/comments", commentRoutes);


app.listen(8080, () => console.log(`server started`));
