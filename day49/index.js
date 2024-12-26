// Dec 28, 2024
// Day 49: Practice error handling and debugging.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Something went wrong");
});

// Custom Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error : "Internal server Error!"
    })
})

app.listen(8080, () => console.log("Server started!"));
