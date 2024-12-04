const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const urlController = require("./controllers/UrlController.js")

// To Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/url', urlController.createShortUrl);// Create shortened URL
app.get('/:shortId', urlController.redirectShortUrl);// Redirect to original URL


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
