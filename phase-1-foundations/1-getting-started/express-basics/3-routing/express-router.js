const express = require("express");
const app = express();

// Basic routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Page!");
});

app.get("/about", (req, res) => {
  res.send("About Us Page");
});

// POST route
app.post("/contact", (req, res) => {
  res.send("Contact form submitted!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
