const express = require("express");
const path = require("path");
const app = express();

// Built-in middleware to serve static files (e.g., HTML, CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Built-in middleware to parse JSON body
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Built-in middleware example");
});

app.post("/data", (req, res) => {
  res.json({ message: "Data received", body: req.body });
});

app.listen(3000, () => {
  console.log("Built-in middleware server running at http://localhost:3000");
});