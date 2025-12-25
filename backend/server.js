const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');

const cors = require('cors');
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));

app.listen(5000,()=>{
    console.log('Server is running on http://localhost:5000');
})

