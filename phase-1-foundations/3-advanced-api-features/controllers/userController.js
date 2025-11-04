const User = require("../models/User");
const { filterUsers } = require("../api-features/filtering");
const { sortResults } = require("../api-features/sorting");
const { limitFields } = require("../api-features/field-limiting");

exports.getAllUsers = async (req, res) => {
  if (req.query.sort) {
    await sortResults(req, res, User);
  } else if (req.query.fields) {
    await limitFields(req, res, User);
  } else {
    await filterUsers(req, res, null, User);
  }
};
