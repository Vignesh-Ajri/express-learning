const express = require("express");
const router = express.Router();

// Example V2 route
router.get("/", (req, res) => {
  res.json({
    version: "v2",
    message: "Welcome to API v2 - Enhanced user data",
    users: [
      { id: 1, name: "John", email: "john@example.com" },
      { id: 2, name: "Jane", email: "jane@example.com" }
    ]
  });
});

module.exports = router;
