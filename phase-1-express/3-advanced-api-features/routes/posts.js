const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Main routes for posts
router.get("/", postController.getAllPosts);

module.exports = router;
