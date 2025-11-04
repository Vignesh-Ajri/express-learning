const User = require("../models/User");
const { filterUsers } = require("../api-features/filtering");
const { sortResults } = require("../api-features/sorting");

// @desc    Get all users (filtering + sorting)
// @route   GET /api/v1/users
// @access  Public
exports.getAllUsers = async (req, res) => {
  // 🧩 Choose feature based on query
  if (req.query.sort) {
    await sortResults(req, res, User);
  } else {
    await filterUsers(req, res, null, User);
  }
};
