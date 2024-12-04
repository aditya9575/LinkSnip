const shortid = require('shortid');
const Url = require('../models/UrlModel');

// Create a short URL
const createShortUrl = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'Please provide a URL to shorten.' });
    }

    // Generate a unique short ID using shortid
    const shortId = shortid.generate();

    // Construct the short URL (use the host where your app is running)
    const shortUrl = `${req.protocol}://${req.get('host')}/${shortId}`;

    const newUrl = new Url({
        originalUrl: url,
        shortUrl: shortId,  // Ensure you are using 'shortUrl' here
    });

    try {
        // Save the new URL to the database
        await newUrl.save();

        // Respond with the shortened URL
        return res.status(201).json({ shortUrl });
    } catch (err) {
        console.error('Error saving URL:', err);
        return res.status(500).json({ error: 'Error saving URL to the database.' });
    }
};

// Redirect short URL to original URL
const redirectShortUrl = async (req, res) => {
    const { shortId } = req.params;

    try {
        const url = await Url.findOne({ shortUrl: shortId });

        if (!url) {
            return res.status(404).json({ error: 'Short URL not found.' });
        }

        // Increment click count
        url.clickCount += 1;
        await url.save();

        return res.redirect(url.originalUrl);
    } catch (err) {
        return res.status(500).json({ error: 'Error retrieving URL.' });
    }
};



module.exports = { createShortUrl, redirectShortUrl };

