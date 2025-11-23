const express = require("express");
const app = express();

// Custom middleware to throw error
app.get("/error", (req, res, next) => {
  const err = new Error("Something went wrong!");
  err.statusCode = 500;
  next(err);
});

// Error-handling middleware (must have 4 params)
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
