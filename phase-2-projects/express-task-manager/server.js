const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Import routes
const authRoutes = require('./src/routes/authRoutes');
const tasksRoutes = require('./src/routes/tasksRoutes');
const categoriesRoutes = require('./src/routes/categoriesRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// View Engine Setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/api/auth",authRoutes);
app.use("/api/tasks",tasksRoutes);
app.use("/api/categories",categoriesRoutes);

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

// Handle undefined routes (404)
app.all('*', (req, res, next) => {
  const error = new Error(`Cannot find ${req.originalUrl} on this server!`);
  error.statusCode = 404;
  next(error);
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('ERROR:', err);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})