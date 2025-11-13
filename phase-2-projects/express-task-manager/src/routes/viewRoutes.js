const express = require("express");
const router = express.Router();
const { protect } = require('../middleware/auth');

// Public Pages
router.get("/", (req, res) => res.render("index"));
router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));

// Protected Pages
router.get("/me", (req, res) => res.render("dashboard"));
router.get("/tasks", protect, (req, res) => res.render("tasks"));
router.get("/categories", protect, (req, res) => res.render("categories"));

module.exports = router;
