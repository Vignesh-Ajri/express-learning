const User = require("../models/Users");
const { filterUsers } = require("../api-features/filtering");
const { sortResults } = require("../api-features/sorting");
const { limitFields } = require("../api-features/field-limiting");
const { paginateResults } = require("../api-features/pagination");

// @desc    Get all users (supports filter, sort, fields, pagination)
// @route   GET /api/v1/users
// @access  Public
exports.getAllUsers = async (req, res) => {
  if (req.query.sort) {
    await sortResults(req, res, User);
  } else if (req.query.fields) {
    await limitFields(req, res, User);
  } else if (req.query.page || req.query.limit) {
    await paginateResults(req, res, User);
  } else {
    await filterUsers(req, res, null, User);
  }
};
