const express = require("express");
const app = express();
const PORT = 3000;

const { connectMongoDb } = require("./connection");

const userRouter = require("./routes/user");
const { logReqRes } = require("./middleware/index");
const { prependOnceListener } = require("./models/users");

// mongodb connection
connectMongoDb("mongodb://127.0.0.1:27017/test-app").then(() =>
  console.log("Mongodb connected!")
);
// middleware
app.use(express.json());prependOnceListener
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
