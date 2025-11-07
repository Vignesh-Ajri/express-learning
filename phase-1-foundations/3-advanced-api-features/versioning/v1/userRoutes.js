const express = require("express");
const router = express.Router();

// Example V1 route
router.get("/", (req, res) => {
  res.json({
    version: "v1",
    message: "Welcome to API v1 - Basic user data",
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" }
    ]
  });
});

module.exports = router;
