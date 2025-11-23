const v1UserRoutes = require("./v1/userRoutes");
const v2UserRoutes = require("./v2/userRoutes");

exports.setupVersioning = (app) => {
  app.use("/api/v1/users", v1UserRoutes);
  app.use("/api/v2/users", v2UserRoutes);
  console.log("API Versioning enabled (v1 & v2)");
};
