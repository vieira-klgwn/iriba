const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
connectDB(); // Connect to MongoDB

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/gospels', require('./routes/gospels'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
