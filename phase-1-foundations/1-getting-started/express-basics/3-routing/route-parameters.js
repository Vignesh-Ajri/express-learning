const express = require("express");
const app = express();

// Example: /users/101
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID requested: ${userId}`);
});

// Example: /products/electronics/5
app.get("/products/:category/:id", (req, res) => {
  res.send(`Category: ${req.params.category}, ID: ${req.params.id}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));