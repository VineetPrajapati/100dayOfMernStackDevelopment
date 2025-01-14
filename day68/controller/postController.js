const Post = require("../model/postModel");

// Fetch Posts with Query Customization
exports.getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order || -1;
    const author = req.query.author;

    const filter = author ? { author: new RegExp(author, "i") } : {};

    const posts = await Post.find(filter)
      .sort({ [sortBy]: order })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Post.countDocuments(filter);

    res.render("index", {
      posts,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a New Post
exports.createPost = async (req, res) => {
  try {
    const { title, body, author, likes } = req.body;
    const newPost = new Post({ title, body, author, likes });
    await newPost.save();
    res.redirect("/");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a Post
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect("/");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
