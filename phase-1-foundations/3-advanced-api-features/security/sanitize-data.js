const mongoSanitize = require("express-mongo-sanitize");

exports.preventNoSQLInjection = (app) => {
  app.use(mongoSanitize());
  console.log("NoSQL Injection prevention enabled");
};
