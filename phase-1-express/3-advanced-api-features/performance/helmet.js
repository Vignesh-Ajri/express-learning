const helmet = require("helmet");

exports.setSecurityHeaders = (app) => {
  app.use(helmet());
  console.log("Helmet security headers enabled");
};
