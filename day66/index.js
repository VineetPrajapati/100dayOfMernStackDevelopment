// Jan 14, 2025

const express = require("express");

const connectDB = require("./config/database");
const productRouter = require("./router/productRouter");

// connection to DB
connectDB();

const app = express();

app.use(express.json()); // middleware

app.use("/api", productRouter);

app.get("/", (req, res) =>
  res.send(`Day 66: Practice defining schemas with Mongoose validation.`)
);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
