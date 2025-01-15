const Post = require("../models/Post");

// get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.render("index", { posts });
  } catch (err) {
    res.status(500).send(`Error fetching posts.`);
  }
};

// get single post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render("postDetails", { post });
  } catch (err) {
    res.status(404).send(`Post not found.`);
  }
};

// create new post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Post.create({ title, content });
    res.redirect("/");
  } catch (err) {
    res.status(400).send(`Error creating post.`);
  }
};

// edit post
exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Post.findByIdAndUpdate(req.params.id, { title, content });
    res.redirect("/");
  } catch (err) {
    res.status(400).send(`Error updating post.`);
  }
};

// delete post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(400).send(`Error deleting post.`);
  }
};
