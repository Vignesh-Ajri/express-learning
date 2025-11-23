const xssClean = require("xss-clean");

exports.preventXSS = (app) => {
  app.use(xssClean());
  console.log("XSS protection enabled");
};
