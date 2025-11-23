const express = require("express");
const router = express.Router({ mergeParams: true });
const Post = require("../models/Post");

// GET /api/users/:userId/posts → Fetch posts by user
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.userId })
      .populate("user", "name email")
      .sort("-createdAt");

    res.status(200).json({
      status: "success",
      results: posts.length,
      data: { posts },
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

module.exports = router;
