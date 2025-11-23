const dotenv = require("dotenv");

exports.loadEnv = () => {
  dotenv.config({ path: "./config.env" });
  console.log("Environment variables loaded");
};
