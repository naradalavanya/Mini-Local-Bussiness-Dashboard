import React from 'react';

const BusinessDisplayCard = ({
    businessData,
    handleRegenerateHeadline,
    isRegeneratingHeadline,
}) => {
    // Defensive check: If businessData is null or undefined, return null.
    // This acts as a safeguard, even though the parent component (App.jsx)
    // is designed to only render this component when businessData is present.
    if (!businessData) {
        console.warn("BusinessDisplayCard rendered without businessData. This might indicate an issue with parent component's conditional rendering.");
        return null; // Do not render anything if data is not available
    }

    return (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Simulated Google Business Data</h2>
            <div className="space-y-3">
                <p className="text-gray-700">
                    <span className="font-semibold">Google Rating:</span> {businessData.googleRating} ⭐
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Number of Reviews:</span> {businessData.numberOfReviews}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Headline:</span>
                    <span className="block text-blue-600 font-medium mt-1 p-2 bg-white rounded-md border border-blue-100 shadow-sm">
                        {businessData.seoHeadline}
                    </span>
                </p>
            </div>
            <button
                onClick={handleRegenerateHeadline}
                className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isRegeneratingHeadline}
            >
                {isRegeneratingHeadline ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    'Regenerate SEO Headline'
                )}
            </button>
        </div>
    );
};

export default BusinessDisplayCard;
