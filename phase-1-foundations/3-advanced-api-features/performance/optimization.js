/**
 * MongoDB & API Performance Optimization Tips
 *
 * This file contains helper snippets and best practices
 * to make your Express + MongoDB app faster and more efficient.
 */

// 1 Use Indexes for frequently queried fields
// Example: In models/User.js
// schema.index({ email: 1 });  // Ascending index for quick lookups

// 2 Avoid using `.populate()` unnecessarily — it's expensive.
// Instead, store small denormalized data if needed.

// 3 Use `.select()` to limit fields in queries
// e.g., User.find().select("name email") to avoid loading all fields.

// 4 Paginate large collections using skip/limit or cursor-based pagination.

// 5 Cache frequent queries using in-memory cache (Redis or Node Cache).
// Example idea (pseudo):
// const cache = require("memory-cache");
// if (cache.get("users")) return cache.get("users");

// 6 Disable unused middleware and logs in production for speed.

// 7 Use Lean Queries to get plain JS objects (faster!)
// e.g., User.find().lean();

// 8 Use Compression (already added) to reduce response size.

// 9 Keep connections open — don’t reconnect DB on every request.

// Example utility to log query performance
exports.logQueryTime = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} took ${duration}ms`);
  });
  next();
};
