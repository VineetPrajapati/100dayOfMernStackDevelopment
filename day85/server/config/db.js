const mongoose = require("mongoose");

const connecDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/auth");
    console.log("MongoDB Connected!");
  } catch (err) {
    console.error("Database connection error", err);
  }
};

module.exports = connecDB;
