const express = require("express");
const router = express.Router({ mergeParams: true }); // Important for nested routes
const Post = require("../models/Post");

// /api/v1/users/:userId/posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.userId });
    res.json({
      status: "success",
      count: posts.length,
      data: posts
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
});

module.exports = router;
