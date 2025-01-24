const Blog = require("../models/BLog");

// feth all data
exports.getBlogs = async (req, res, next) => {
  try {
    const { page = 1, limit = 5, sort = "createdAt" } = req.query;
    const blogs = await Blog.find()
      .sort({ [sort]: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Blog.countDocuments();

    res.status(200).json({
      success: true,
      data: blogs,
      total,
    });
  } catch (err) {
    next(err);
  }
};

// create new blog
exports.createBlog = async (req, res, next) => {
  try {
    const { title, content, author, tags } = req.body;
    const newBlog = await Blog.create({ title, content, author, tags });
    res.status(201).json({ success: true, data: newBlog });
  } catch (err) {
    next(err);
  }
};

// get single blog post
exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

// update a blog post
exports.updateBlog = async (req, res, next) => {
  try {
    const updateBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updateBlog });
  } catch (err) {
    next(err);
  }
};

// delete a blog post
exports.deleteBlog = async (req, res, next) => {
  try {
    const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: deleteBlog });
  } catch (err) {
    next(err);
  }
};
