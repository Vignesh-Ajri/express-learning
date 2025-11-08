const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const { logQueryTime } = require("./performance/optimization");
const { loadEnv } = require("./security/dotenv-config");
const { setupVersioning } = require("./versioning/api-versioning");
const { applySecurityMiddleware } = require("./security/security-middleware");

loadEnv();
dotenv.config();
connectDB();

const app = express();
setupVersioning(app);
app.use(express.json());
app.use(logQueryTime);

// Apply all security + performance middlewares
applySecurityMiddleware(app);

// Routes
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);

const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})