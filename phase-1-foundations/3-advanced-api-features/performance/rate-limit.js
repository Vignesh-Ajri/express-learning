const rateLimit = require("express-rate-limit");

exports.applyRateLimit = (app) => {
  const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: "Too many requests from this IP, please try again later"
  });
  app.use("/api", limiter);
  console.log("Rate limiting enabled");
};
