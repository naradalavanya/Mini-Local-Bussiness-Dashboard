import React from 'react';
import ReactDOM from 'react-dom/client'; // Use /client for React 18+
import App from './App'; // Import your main App component
import './index.css'; // Import your global CSS (e.g., for Tailwind base styles)

// Get the root DOM element where your React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root for concurrent mode (React 18+)
const root = ReactDOM.createRoot(rootElement);

// Render your App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
