const { body } = require('express-validator');

exports.taskValidation = [
  body('title').notEmpty().withMessage('Task title is required'),
  body('status').optional().isIn(['pending', 'in-progress', 'completed']),
];
