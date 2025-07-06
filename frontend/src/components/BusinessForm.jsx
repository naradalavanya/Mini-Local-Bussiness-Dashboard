import React from 'react';

const BusinessForm = ({
    businessName,
    setBusinessName,
    location,
    setLocation,
    handleSubmit,
    isLoadingData,
    error,
}) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                </label>
                <input
                    type="text"
                    id="businessName"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                    placeholder="e.g., Cake & Co"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                    placeholder="e.g., Mumbai"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoadingData}
            >
                {isLoadingData ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    'Get Business Data'
                )}
            </button>
            {error && (
                <p className="text-red-600 text-center text-sm mt-2">{error}</p>
            )}
        </form>
    );
};

export default BusinessForm;
