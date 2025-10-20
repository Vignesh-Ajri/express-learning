const express = require("express");
const app = express();

app.get("/divide", async (req, res) => {
  try {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);

    if (b === 0) throw new Error("Division by zero not allowed");

    res.send(`Result: ${a / b}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
