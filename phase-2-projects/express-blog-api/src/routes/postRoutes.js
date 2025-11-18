const express = require('express');
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');
const { protect } = require('../middleware/auth');
const { validatePost } = require('../middleware/validator');

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/', protect, validatePost, createPost);
router.put('/:id', protect, validatePost, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;