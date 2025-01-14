const Post = require("../models/Post");

// add comment to the post
exports.addComment = async (req, res) => {
  try {
    const { postId, user, text } = req.body;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).send("Post not found");

    post.comments.push({ user, text });
    await post.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error adding comment");
  }
};
