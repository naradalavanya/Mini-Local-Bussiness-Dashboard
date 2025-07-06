@echo off
echo 🚀 Starting Netlify deployment...

REM Check if Netlify CLI is installed
netlify --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Netlify CLI not found. Installing...
    npm install -g netlify-cli
)

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the project
echo 🔨 Building project...
npm run build

REM Deploy to Netlify
echo 🌐 Deploying to Netlify...
netlify deploy --prod

echo ✅ Deployment complete!
echo 📋 Check the URL above for your live site
pause 