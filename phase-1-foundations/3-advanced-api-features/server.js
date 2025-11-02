const express = require('express')
const dotenv = require('dotenv');

const connectDB = require('./config/database');

dotenv.config();
connectDB();

const app = express()
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})