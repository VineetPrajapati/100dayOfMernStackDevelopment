const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Todo", todoSchema);
