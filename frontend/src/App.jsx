import React, { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessDisplayCard from './components/BusinessDisplayCard';

// Main App component
const App = () => {
    // State for form inputs
    const [businessName, setBusinessName] = useState('');
    const [location, setLocation] = useState('');

    // State for displayed business data
    const [businessData, setBusinessData] = useState(null);

    // State for loading indicators
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isRegeneratingHeadline, setIsRegeneratingHeadline] = useState(false);

    // State for error messages
    const [error, setError] = useState('');

    // Base URL for the backend API
    const API_BASE_URL = 'http://localhost:3001';

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!businessName.trim() || !location.trim()) {
            setError('Please enter both business name and location.');
            return;
        }

        setIsLoadingData(true);
        setBusinessData(null);

        try {
            const response = await fetch(`${API_BASE_URL}/business-data`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: businessName, location: location }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch business data.');
            }

            const data = await response.json();
            setBusinessData(data);
        } catch (err) {
            console.error('Error fetching business data:', err);
            setError(err.message || 'An unexpected error occurred. Please try again.');
        } finally {
            setIsLoadingData(false);
        }
    };

    // Handle headline regeneration
    const handleRegenerateHeadline = async () => {
        setError('');
        setIsRegeneratingHeadline(true);

        try {
            const response = await fetch(`${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(businessName)}&location=${encodeURIComponent(location)}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to regenerate headline.');
            }

            const data = await response.json();
            setBusinessData(prevData => ({
                ...prevData,
                seoHeadline: data.seoHeadline,
            }));
        } catch (err) {
            console.error('Error regenerating headline:', err);
            setError(err.message || 'An unexpected error occurred while regenerating headline.');
        } finally {
            setIsRegeneratingHeadline(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 p-4 font-inter transition-all duration-500">
            {/* Hero Section at the top */}
            <div className="max-w-3xl mx-auto mb-8 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-700 mb-2 drop-shadow-lg flex items-center justify-center gap-2">
                    <span role="img" aria-label="rocket">🚀</span> Welcome to Growth Pro!
                </h1>
                <p className="text-center text-gray-600 mb-4 text-lg font-medium">
                    Instantly get simulated business insights and catchy SEO headlines for your local business.
                </p>
            </div>
            {/* Centered group for form and result card */}
            <div className="w-full flex justify-center items-center flex-1">
                <div className={`flex flex-col md:flex-row gap-12 items-stretch justify-center w-full max-w-6xl animate-fade-in-up py-8 ${businessData ? 'md:items-start' : 'md:items-center'}`}>
                    {/* Form on the left */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-full max-w-xl bg-white/90 rounded-3xl shadow-2xl border border-indigo-100 p-10 backdrop-blur-md">
                            <BusinessForm
                                businessName={businessName}
                                setBusinessName={setBusinessName}
                                location={location}
                                setLocation={setLocation}
                                handleSubmit={handleSubmit}
                                isLoadingData={isLoadingData}
                                error={error}
                            />
                        </div>
                    </div>
                    {/* Result card on the right (only if data exists) */}
                    {businessData && (
                        <div className="flex-1 flex items-center justify-center">
                            <div className="w-full max-w-xl bg-white/90 rounded-3xl shadow-2xl border border-indigo-100 p-10 backdrop-blur-md animate-fade-in-up">
                                <BusinessDisplayCard
                                    businessData={businessData}
                                    handleRegenerateHeadline={handleRegenerateHeadline}
                                    isRegeneratingHeadline={isRegeneratingHeadline}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;

// Add fade-in animation to Tailwind config if not present:
// In tailwind.config.js, add:
// theme: { extend: { keyframes: { 'fade-in-up': { '0%': { opacity: 0, transform: 'translateY(40px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } } }, animation: { 'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) both' } } } };
