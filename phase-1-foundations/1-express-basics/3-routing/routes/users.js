const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("List of users"));
router.post("/", (req, res) => res.send("Create a new user"));
router.get("/:id", (req, res) => res.send(`User details for ID: ${req.params.id}`));

module.exports = router;