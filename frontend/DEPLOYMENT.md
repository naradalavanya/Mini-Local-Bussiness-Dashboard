# Netlify Deployment Guide

## Prerequisites
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Make sure you have a Netlify account
3. Ensure your code is committed to Git

## Deployment Steps

### Option 1: Deploy via Netlify CLI

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize Netlify project:**
   ```bash
   netlify init
   ```

4. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify Dashboard

1. **Push your code to GitHub**

2. **Go to [netlify.com](https://netlify.com) and sign in**

3. **Click "New site from Git"**

4. **Choose your repository**

5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Functions directory: `netlify/functions`

6. **Click "Deploy site"**

## Environment Variables (Optional)

If you need to set environment variables:

1. Go to Site settings > Environment variables
2. Add any required variables

## Testing Your Deployment

1. **Test the health endpoint:**
   ```
   https://your-site.netlify.app/.netlify/functions/health
   ```

2. **Test the business data endpoint:**
   ```
   POST https://your-site.netlify.app/.netlify/functions/business-data
   Content-Type: application/json
   
   {
     "name": "Test Business",
     "location": "Test City"
   }
   ```

## Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check Node.js version (should be 18+)
   - Ensure all dependencies are installed
   - Check for syntax errors

2. **Functions not working:**
   - Verify function files are in `netlify/functions/`
   - Check function syntax
   - Review Netlify function logs

3. **CORS issues:**
   - Functions include CORS headers
   - Check if frontend URL is correct

### Useful Commands:

```bash
# Test functions locally
netlify dev

# View function logs
netlify functions:list

# Invoke function locally
netlify functions:invoke business-data --body '{"name":"test","location":"test"}'
```

## API Endpoints

- `POST /.netlify/functions/business-data` - Get business data
- `GET /.netlify/functions/business-data?name=X&location=Y` - Regenerate headline
- `GET /.netlify/functions/health` - Health check 