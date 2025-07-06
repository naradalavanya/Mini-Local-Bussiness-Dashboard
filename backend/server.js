// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // You can choose any port

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To parse JSON request bodies

// Simulated SEO headline templates with placeholders
const seoHeadlineTemplates = [
    "Boost {name} in {location} Online!",
    "Unlock Growth: SEO Strategies for {name} in {location}",
    "Dominate {location} Search: Get More Customers for {name} Now!",
    "{name}, Elevated: Expert SEO Solutions for {location}",
    "Attract Local Customers to {name} with Powerful SEO in {location}",
    "Grow {name} in {location}: Smart SEO for Small Enterprises"
];

// Helper to fill in the template
function generateHeadline(name, location) {
    const template = seoHeadlineTemplates[Math.floor(Math.random() * seoHeadlineTemplates.length)];
    return template.replace(/{name}/g, name).replace(/{location}/g, location);
}

// POST /business-data endpoint
// Accepts business name and location, returns simulated business data
app.post('/business-data', (req, res) => {
    const { name, location } = req.body;

    if (!name || !location) {
        return res.status(400).json({ message: "Business name and location are required." });
    }

    // Simulate Google Rating and Number of Reviews
    const simulatedRating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1); // Random rating between 3.5 and 5.0
    const simulatedReviews = Math.floor(Math.random() * (500 - 50) + 50); // Random reviews between 50 and 500

    // Get an initial random SEO headline
    const initialHeadline = generateHeadline(name, location);

    res.json({
        googleRating: parseFloat(simulatedRating),
        numberOfReviews: simulatedReviews,
        seoHeadline: initialHeadline
    });
});

// GET /regenerate-headline endpoint
// Returns a new, randomly selected SEO headline
app.get('/regenerate-headline', (req, res) => {
    // Extract name and location from query params
    const { name, location } = req.query;

    if (!name || !location) {
        return res.status(400).json({ message: "Business name and location are required." });
    }

    const newHeadline = generateHeadline(name, location);
    res.json({ seoHeadline: newHeadline });
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
    console.log('Endpoints available:');
    console.log(`  POST /business-data (e.g., {"name": "My Business", "location": "City"})`);
    console.log(`  GET /regenerate-headline`);
});
