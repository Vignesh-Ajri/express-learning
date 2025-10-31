import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
app.use(express.json());

// Generate JWT
app.post("/token", (req, res) => {
  const { userId, email } = req.body;
  const token = jwt.sign({ userId, email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Verify JWT
app.get("/verify", (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ msg: "Token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ msg: "Valid token", decoded });
  } catch (err) {
    res.status(400).json({ msg: "Invalid token" });
  }
});

app.listen(5000, () => console.log("JWT Demo running on port 5000"));
