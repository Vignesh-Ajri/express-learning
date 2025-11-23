const express = require("express");
const app = express();

// Example: /search?keyword=laptop&sort=price
app.get("/search", (req, res) => {
  const { keyword, sort } = req.query;
  res.send(`Search for: ${keyword}, Sort by: ${sort}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));