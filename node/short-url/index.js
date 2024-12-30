// modules
const express = require("express");

const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");

// express app
const app = express();

// port
const PORT = 8001;

// mongodb connection
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB Connected!")
);

// middleware
app.use(express.json());

// routes
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server Started at ${PORT}!`));
