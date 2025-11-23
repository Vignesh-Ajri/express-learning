const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("All posts"));
router.post("/", (req, res) => res.send("Create new post"));

module.exports = router;