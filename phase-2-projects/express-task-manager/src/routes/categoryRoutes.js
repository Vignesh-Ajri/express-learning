const express = require('express');
const router = express.Router();
const { createCategory, getCategories, deleteCategory } = require('../controllers/categoryController');
const { protect } = require('../middleware/auth');

router.use(protect); // all routes protected

router.post('/', createCategory);
router.get('/', getCategories);
router.delete('/:id', deleteCategory);

module.exports = router;
