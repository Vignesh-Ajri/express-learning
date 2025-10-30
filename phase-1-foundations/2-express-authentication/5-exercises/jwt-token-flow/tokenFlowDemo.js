// Simple flow to understand how JWT works
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const payload = { id: 101, name: "Vignesh" };
const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10s" });
console.log("Generated Token:", token);

setTimeout(() => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Verified Token:", decoded);
  } catch (err) {
    console.log("❌ Token expired or invalid:", err.message);
  }
}, 12000);
