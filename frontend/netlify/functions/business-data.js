const seoHeadlineTemplates = [
    "Boost {name} in {location} Online!",
    "Unlock Growth: SEO Strategies for {name} in {location}",
    "Dominate {location} Search: Get More Customers for {name} Now!",
    "{name}, Elevated: Expert SEO Solutions for {location}",
    "Attract Local Customers to {name} with Powerful SEO in {location}",
    "Grow {name} in {location}: Smart SEO for Small Enterprises"
];

function generateHeadline(name, location) {
    const template = seoHeadlineTemplates[Math.floor(Math.random() * seoHeadlineTemplates.length)];
    return template.replace(/{name}/g, name).replace(/{location}/g, location);
}

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        if (event.httpMethod === 'POST') {
            // Handle business data request
            const { name, location } = JSON.parse(event.body);

            if (!name || !location) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ message: "Business name and location are required." })
                };
            }

            const simulatedRating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
            const simulatedReviews = Math.floor(Math.random() * (500 - 50) + 50);
            const initialHeadline = generateHeadline(name, location);

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    googleRating: parseFloat(simulatedRating),
                    numberOfReviews: simulatedReviews,
                    seoHeadline: initialHeadline
                })
            };
        } else if (event.httpMethod === 'GET') {
            // Handle headline regeneration request
            const { name, location } = event.queryStringParameters || {};

            if (!name || !location) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ message: "Business name and location are required." })
                };
            }

            const newHeadline = generateHeadline(name, location);
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ seoHeadline: newHeadline })
            };
        }

        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ message: "Method not allowed" })
        };
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: "Internal server error", error: error.message })
        };
    }
}; 