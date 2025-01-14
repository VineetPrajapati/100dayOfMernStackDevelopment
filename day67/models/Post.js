const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: String,
  text: String,
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
  comments: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;