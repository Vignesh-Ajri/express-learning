import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use("/api/auth",);

app.get("/", (req, res) => res.send("Secure API Demo"));
app.listen(5000, () => console.log("Secure API running on port 5000"));
