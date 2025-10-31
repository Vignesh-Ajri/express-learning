import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Secure API Demo"));
app.listen(5000, () => console.log("Secure API running on port 5000"));
