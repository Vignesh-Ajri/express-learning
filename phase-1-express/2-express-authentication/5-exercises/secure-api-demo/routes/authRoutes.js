import express from "express";
import { register, login } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ msg: "Welcome!", user: req.user });
});
router.get("/admin", authMiddleware, roleMiddleware(["admin"]), (req, res) => {
  res.json({ msg: "Hello Admin!" });
});

export default router;
