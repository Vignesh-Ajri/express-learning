const compression = require("compression");

exports.enableCompression = (app) => {
  app.use(compression());
  console.log("Response compression enabled");
};
