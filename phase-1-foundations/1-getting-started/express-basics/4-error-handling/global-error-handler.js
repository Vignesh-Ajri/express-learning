const express = require("express");
const app = express();

// Route with error
app.get("/", (req, res) => {
  throw new Error("Unexpected error!");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something broke! Please try again later.",
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
