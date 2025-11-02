const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = require('./config/database');

dotenv.config();
connectDB();

const app = express()
app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
})