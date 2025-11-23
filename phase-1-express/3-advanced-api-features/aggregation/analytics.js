const User = require("../models/Users");

// @desc    Get user statistics
// @route   GET /api/v1/users/stats
// @access  Public
exports.getUserStats = async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $group: {
          _id: "$role",          // group by role
          totalUsers: { $sum: 1 },
        },
      },
      {
        $sort: { totalUsers: -1 }, // sort by count descending
      },
    ]);

    res.status(200).json({
      status: "success",
      data: stats,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
