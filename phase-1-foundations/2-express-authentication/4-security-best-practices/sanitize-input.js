import express from "express";
import mongoSanitize from "express-mongo-sanitize";

const app = express();
app.use(express.json());
app.use(mongoSanitize());

app.post("/data", (req, res) => {
  res.json({ sanitizedData: req.body });
});
