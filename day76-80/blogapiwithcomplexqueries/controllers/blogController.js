const mongoose = require("mongoose");
const Blog = require("../models/Blog");

// create post
exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ success: true, date: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// sort, filtering and pagination
exports.getBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = "createdAt", tags } = req.query;
    const query = tags ? { tags: { $in: tags.split(",") } } : {};

    const blogs = await Blog.find(query)
      .sort({ [sort]: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Blog.countDocuments(query);

    res.status(200).json({
      success: true,
      data: blogs,
      total,
      page: Number(page),
      toatalPage: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// update post
exports.updatePost = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, content } = req.body;

    const updatedBlogs = await Blog.findByIdAndUpdate(_id, {title, content}, {new: true, runValidators: true});

    if(!updatedBlogs) {
      return res.status(404).json({ success: false, message: "Blog not found"})
    }

    res.status(200).json({success: true, message: "Blog updated successfully", blog: updatedBlogs})


  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// transaction handling
exports.deleteBlog = async (req, res) => {
  try {
    const { _id } = req.params;

    const delteBlog = await Blog.findByIdAndDelete(_id);

    if (!delteBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
