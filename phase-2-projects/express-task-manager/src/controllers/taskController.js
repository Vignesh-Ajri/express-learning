const Task = require('../models/Task');
const Category = require('../models/Category');

// Create task
const createTask = async (req, res, next) => {
  try {
    const { title, description, dueDate, status, category } = req.body;

    if (!title) {
      return res.status(400).json({ 
        success: false, 
        message: 'Task title is required' 
      });
    }

    // Validate category if provided
    if (category) {
      const categoryExists = await Category.findOne({ 
        _id: category, 
        createdBy: req.user._id 
      });
      
      if (!categoryExists) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid category' 
        });
      }
    }

    const task = await Task.create({
      title,
      description,
      dueDate,
      status: status || 'pending',
      category,
      createdBy: req.user._id
    });

    res.status(201).json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};

// Get all tasks
const getTasks = async (req, res, next) => {
  try {
    const { category, status } = req.query;

    const filter = { createdBy: req.user._id };
    
    if (category) filter.category = category;
    if (status) filter.status = status;

    const tasks = await Task.find(filter)
      .populate('category', 'name')
      .sort('-createdAt');

    res.json({ success: true, data: tasks });
  } catch (err) {
    next(err);
  }
};

// Update task
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndUpdate(
      { _id: id, createdBy: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found' 
      });
    }

    res.json({ success: true, data: task });
  } catch (err) {
    next(err);
  }
};

// Delete task
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({ 
      _id: id, 
      createdBy: req.user._id 
    });

    if (!task) {
      return res.status(404).json({ 
        success: false, 
        message: 'Task not found' 
      });
    }

    res.json({ success: true, message: 'Task deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };