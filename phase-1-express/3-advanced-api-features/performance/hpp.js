const hpp = require("hpp");

exports.preventHpp = (app) => {
  app.use(hpp());
  console.log("HTTP Parameter Pollution protection enabled");
};
