const express = require('express');
const {
  getCommentsByPost,
  createComment,
  deleteComment
} = require('../controllers/commentController');
const { protect } = require('../middleware/auth');
const { validateComment } = require('../middleware/validator');

const router = express.Router();

router.get('/post/:postId', getCommentsByPost);
router.post('/post/:postId', protect, validateComment, createComment);
router.delete('/:id', protect, deleteComment);

module.exports = router;