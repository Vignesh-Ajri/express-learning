import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000" }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.get("/", (req, res) => res.send("Secure API running!"));
app.listen(5000, () => console.log("Server secure with Helmet & Rate Limit"));