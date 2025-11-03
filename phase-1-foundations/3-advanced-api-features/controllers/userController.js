const User = require("../models/Users");
const { filterUsers } = require("../api-features/filtering");

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// @desc    Get all users (with filtering support)
// @route   GET /api/v1/users
// @access  Public
exports.getAllUsers = async (req, res) => {
  await filterUsers(req, res, null, User);
};