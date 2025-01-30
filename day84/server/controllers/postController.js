const { response } = require("express");
const Post = require("../models/Post");

// fetch all blogs
exports.getAllpost = async (req, res) => {
  try {
    const blogs = await Post.find();
    res.status(200).json(blogs);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching blog data", err });
  }
};

exports.createBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required!" });
    }

    const newPost = new Post({ title, content });
    // console.log(newPost);

    await newPost.save();
    res.status(201).json({ success: true, newPost });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error in posting data", err });
  }
};
