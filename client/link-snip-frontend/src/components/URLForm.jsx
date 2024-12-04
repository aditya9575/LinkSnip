import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import axios from 'axios';

const URLForm = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);  // Reset error state before making a new request

        try {
            // Send POST request using Axios to your backend
            const response = await axios.post('https://link-snip.vercel.app/url', {
                url,  // Sending the original URL in the request body
            });

            // If the request is successful, update the short URL
            setShortUrl(response.data.shortUrl);
        } catch (err) {
            // Handle errors like network issues or invalid URL
            setError(err.response?.data?.error || 'Failed to shorten URL.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter your long URL here..."
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                        required
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isLoading ? 'Shortening...' : 'Shorten'}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </form>

            {error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">{error}</p>
                </div>
            )}

            {shortUrl && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">Your shortened URL:</p>
                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="text"
                            value={shortUrl}
                            readOnly
                            className="flex-1 px-3 py-2 bg-white border border-green-200 rounded"
                        />
                        <button
                            onClick={() => navigator.clipboard.writeText(shortUrl)}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default URLForm;
