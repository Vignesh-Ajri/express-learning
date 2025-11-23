const cors = require("cors");

exports.setupCORS = (app) => {
  const corsOptions = {
    origin: ["http://localhost:3000", "https://your-production-domain.com"],
    credentials: true,
  };

  app.use(cors(corsOptions));
  console.log("CORS setup enabled");
};
