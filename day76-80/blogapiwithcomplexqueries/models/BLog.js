const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: [String],
    createdAt: {
      type: Date,
      required: Date.now,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", BlogSchema);
module.exports = Blog;
