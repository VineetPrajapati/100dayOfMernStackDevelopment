const Post = require("../models/post");

// Get all post with pagination, sorting, and filtering

exports.getPosts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort = "-createdAt",
      category,
      tags,
    } = req.query;

    const query = {};
    if (category) query.category = category;
    if (tags) query.tags = { $in: tags.split(",") };

    const posts = await Post.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Post.countDocuments(query);

    res.status(200).json({
      success: true,
      data: posts,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limt),
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Create a post
exports.createPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body, author: req.user.id });
    await post.save();
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
