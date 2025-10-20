// Demonstrates the ORDER of middleware execution in Express

const express = require("express");
const app = express();

// ---------------------------
// 1 Middleware examples
// ---------------------------
app.use((req, res, next) => {
  console.log("Middleware 1: Runs first");
  next(); // pass to next middleware
});

app.use((req, res, next) => {
  console.log("Middleware 2: Runs second");
  next(); // pass to next middleware
});

app.use((req, res, next) => {
  console.log("Middleware 3: Runs third");
  next(); // pass to next middleware
});

// ---------------------------
// 2 Final route handler
// ---------------------------
app.get("/", (req, res) => {
  console.log("Route handler: Final response sent");
  res.send("Middleware order demo complete");
});

// ---------------------------
// 3 Example of stopping the chain
// ---------------------------
app.get("/stop", (req, res) => {
  console.log("Stopping middleware chain here");
  res.send("This route stopped the chain, no further middleware will run.");
});

// ---------------------------
// 4 Start server
// ---------------------------
app.listen(4000, () => {
  console.log("Middleware order demo running on http://localhost:4000");
});
