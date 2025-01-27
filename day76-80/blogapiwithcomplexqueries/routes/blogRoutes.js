const express = require("express");
const {
  createBlog,
  getBlogs,
  updatePost,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

// blog routes
router.post("/", createBlog);
router.get("/", getBlogs);
router.put("/:_id", updatePost)
router.delete("/:_id", deleteBlog);

module.exports = router;
