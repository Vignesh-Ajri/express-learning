import express from "express";
import { authMiddleware } from "../day-2-jwt-authentication/auth-middleware.js";
import { roleCheck } from "./role-based-access.js";

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ msg: "Welcome to your profile!", user: req.user });
});

router.get("/admin", authMiddleware, roleCheck(["admin"]), (req, res) => {
  res.json({ msg: "Admin access granted!" });
});

export default router;