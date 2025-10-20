// Demonstrates how to create and use your OWN middleware in Express

const express = require("express");
const app = express();

// ---------------------------
// 1 Custom middleware function
// ---------------------------
// Middleware has 3 parameters: (req, res, next)
// - req → request object
// - res → response object
// - next → a function that passes control to the next middleware/route
function loggerMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // very important! otherwise the request will hang
}

// Another custom middleware
function checkAuth(req, res, next) {
  const authorized = false; // pretend we check if user is logged in
  if (authorized) {
    next(); // go to the next middleware/route
  } else {
    res.status(403).send("🚫 Access Denied: Not Authorized");
  }
}

// ---------------------------
// 2 Apply middleware
// ---------------------------
// Global middleware (applies to ALL routes)
app.use(loggerMiddleware);

// Route-specific middleware (applies only to this route)
app.get("/secret", checkAuth, (req, res) => {
  res.send("This is a secret page 🔑");
});

// Normal route (only loggerMiddleware runs here)
app.get("/", (req, res) => {
  res.send("Hello from custom middleware example! 🎉");
});

// ---------------------------
// 3 Start server
// ---------------------------
app.listen(3000, () => {
  console.log("Custom middleware server running on http://localhost:3000");
});
