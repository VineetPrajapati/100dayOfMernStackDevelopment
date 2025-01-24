const express = require("express");
const router = express.Router();

const {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");


router.get("/", getBlogs);
router.post("/", createBlog);
router.get("/:id", getBlogById);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);


module.exports = router;