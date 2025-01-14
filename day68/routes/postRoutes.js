const express = require("express");
const router = express.Router();

const { getPosts, createPost, deletePost } = require("../controller/postController")

router.get("/", getPosts);
router.post("/add", createPost);
router.get("/delete/:id", deletePost);

module.exports = router;