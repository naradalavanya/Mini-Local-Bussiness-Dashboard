# Local Business Dashboard Frontend

This is the frontend for the Local Business Dashboard application, deployed on Netlify.

## Features

- Business data simulation
- SEO headline generation
- Modern React UI with Tailwind CSS
- Netlify Functions backend

## Deployment

This project is configured for Netlify deployment with:
- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `build`
- Functions directory: `netlify/functions`

## API Endpoints

- `POST /.netlify/functions/business-data` - Get business data
- `GET /.netlify/functions/business-data?name=X&location=Y` - Regenerate headline
- `GET /.netlify/functions/health` - Health check 