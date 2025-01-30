const express = require("express");
const { getAllpost, createBlogPost } = require("../controllers/postController");
const router = express.Router();


router.get("/posts", getAllpost);
router.post("/posts/create", createBlogPost);

module.exports = router