const { setSecurityHeaders } = require("../performance/helmet");
const { applyRateLimit } = require("../performance/rate-limit");
const { preventHpp } = require("../performance/hpp");
const { enableCompression } = require("../performance/compression");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const cors = require("cors");

/**
 * Combine all security and performance middlewares
 * so that server.js stays clean and organized.
 */
exports.applySecurityMiddleware = (app) => {
  // 1 Basic security headers (Helmet)
  setSecurityHeaders(app);

  // 2 Prevent HTTP Parameter Pollution (HPP)
  preventHpp(app);

  // 3 Rate limiting (express-rate-limit)
  applyRateLimit(app);

  // 4 Compression (gzip)
  enableCompression(app);

  // 5 Prevent NoSQL injection
  app.use(mongoSanitize());

  // 6 Prevent XSS attacks
  app.use(xssClean());

  // 7 Enable CORS
  app.use(cors());

  console.log("Security & performance middleware applied successfully.");
};
