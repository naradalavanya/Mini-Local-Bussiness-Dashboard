#!/bin/bash

echo "🚀 Starting Netlify deployment..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
netlify deploy --prod

echo "✅ Deployment complete!"
echo "📋 Check the URL above for your live site" 