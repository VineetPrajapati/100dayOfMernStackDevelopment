const Post = require("../models/Post");

// fetch data
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.render("index", { posts });
  } catch (err) {
    res.status(500).send("Error fetching posts");
  }
};

// create post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error creating post");
  }
};
