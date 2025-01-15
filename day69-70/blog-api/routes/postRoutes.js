const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getAllPosts);
router.get("/posts/:id", postController.getPostById);
router.get("/add-post", postController.addPost);
router.post("/posts", postController.createPost);
router.post("/posts/:id", postController.updatePost);
router.post("/posts/:id/delete", postController.deletePost);

module.exports = router;