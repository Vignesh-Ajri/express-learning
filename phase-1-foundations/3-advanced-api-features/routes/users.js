const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { getUserStats } = require("../aggregation/analytics");
const nestedPostRoutes = require("../nested-population/nested-routes");

// Define route
router.get("/", userController.getAllUsers);
router.get("/stats", getUserStats);

// Nested route: /api/v1/users/:userId/posts
router.use("/:userId/posts", nestedPostRoutes);

module.exports = router;
