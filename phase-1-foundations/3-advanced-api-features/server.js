const express = require('express')
const dotenv = require('dotenv');

const connectDB = require('./config/database');

const { setSecurityHeaders } = require("./performance/helmet");
const { applyRateLimit } = require("./performance/rate-limit");
const { preventHpp } = require("./performance/hpp");
const { enableCompression } = require("./performance/compression");
const { logQueryTime } = require("./performance/optimization");
const { loadEnv } = require("./security/dotenv-config");
loadEnv();

dotenv.config();
connectDB();

const app = express()

// Middleware
app.use(express.json());
app.use(logQueryTime);
setSecurityHeaders(app);
applyRateLimit(app);
preventHpp(app);
enableCompression(app);

// Routes
const userRoutes = require("./routes/users");
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})