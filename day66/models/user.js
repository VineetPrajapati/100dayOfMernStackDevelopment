const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Name is required field`],
    trim: true, //id will ensures to remove the white spaces
    min: [3, `Name must be at least 3 character long`],
    max: [50, `Name cannot exceed 50 characters`],
  },

  email: {
    type: String,
    require: [true, `Email is required field`],
    unique: true,
    match: [/.+@.+\..+/, "Invalid email address"], // Validate: Regex pattern for email
  },

  age: {
    type: Number,
    min: [18, `Age must be at least 18`],
    max: [100, `Age cannot exceed 100`],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
