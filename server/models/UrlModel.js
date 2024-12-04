const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    clickCount: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

module.exports = mongoose.model('Url', UrlSchema);
