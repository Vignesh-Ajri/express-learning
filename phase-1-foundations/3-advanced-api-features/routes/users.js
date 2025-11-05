const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { getUserStats } = require("../aggregation/analytics");

// Define route
router.get("/", userController.getAllUsers);
router.get("/stats", getUserStats);

module.exports = router;
