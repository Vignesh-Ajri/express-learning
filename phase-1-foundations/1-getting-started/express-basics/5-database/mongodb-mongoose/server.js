const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
const connectDB = require('./config/database');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', (req,res) =>{
    res.send('API is Running')
})

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));