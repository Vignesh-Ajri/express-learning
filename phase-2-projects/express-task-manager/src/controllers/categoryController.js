const Category = require('../models/Category');

// Create category
const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: 'Category name is required' });
    }

    const category = await Category.create({ name, createdBy: req.user._id });
    res.status(201).json({ success: true, data: category });
  } catch (err) {
    next(err);
  }
};

// Get all categories by user
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({ createdBy: req.user._id }).sort('-createdAt');
    res.json({ success: true, data: categories });
  } catch (err) {
    next(err);
  }
};

// Delete category
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findOneAndDelete({
      _id: id,
      createdBy: req.user._id
    });

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found or unauthorized' });
    }

    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { createCategory, getCategories, deleteCategory };
