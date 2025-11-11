# Google Reviews Setup Guide

This guide will help you integrate Google Business reviews into your real estate website.

## Overview

The website automatically fetches reviews from your Google Business Profile using the Google Places API. Reviews are fetched at build time, so there are no ongoing API costs for visitors.

## Cost

**FREE** ✅ - Google provides $200/month in free credits, and build-time fetching uses minimal API calls.

## Setup Steps

### 1. Create or Claim Your Google Business Profile

1. Go to [Google Business Profile](https://business.google.com/)
2. Sign in with your Google account
3. Create or claim your business listing
4. Complete your profile with:
   - Business name and category
   - Address and service areas
   - Phone number and website
   - Business hours
   - Photos of your business

### 2. Verify Your Business

Follow Google's verification process (usually via postcard, phone, or email). This is required to manage your reviews.

### 3. Get Your Place ID

**Option A: From Google Maps URL**
1. Search for your business on [Google Maps](https://maps.google.com/)
2. Click on your business
3. Look at the URL - it will contain something like: `https://www.google.com/maps/place/...!1s0x1234567890abcdef:0x1234567890abcdef`
4. The Place ID is the part after `!1s` (e.g., `ChIJN1t_tDeuEmsRUsoyG83frY4`)

**Option B: Using Place ID Finder**
1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for your business
3. Click on your business marker
4. Copy the Place ID

### 4. Set Up Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Click "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"

### 5. Create API Key

1. In Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key

### 6. Restrict Your API Key (Recommended)

1. Click on your API key to edit it
2. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add your domains (e.g., `yourwebsite.com/*`, `localhost:*`)
3. Under "API restrictions":
   - Select "Restrict key"
   - Select "Places API"
4. Save

### 7. Add Environment Variables

Create a `.env` file in your project root (if it doesn't exist) and add:

```bash
GOOGLE_PLACES_API_KEY=your_actual_api_key_here
GOOGLE_PLACE_ID=your_actual_place_id_here
```

**Important:**
- Never commit your `.env` file to Git (it's in `.gitignore`)
- The `.env.example` file shows the format but doesn't contain real credentials

### 8. Test Locally

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Visit your homepage at `http://localhost:4321`

3. Check the browser console for messages:
   - If credentials are missing: "Using mock reviews"
   - If successful: Reviews will be fetched from Google

### 9. Deploy Environment Variables

When deploying to production (Vercel, Netlify, etc.), add the environment variables:

**Vercel:**
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`
4. Redeploy

**Netlify:**
1. Go to Site Settings > Environment Variables
2. Add `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`
3. Redeploy

## How It Works

1. **Build Time Fetching**: Reviews are fetched when you build your site (`npm run build`)
2. **Static Generation**: Reviews are baked into your HTML (super fast!)
3. **Fallback**: If API is not configured, displays mock/placeholder reviews
4. **Filtering**: Only shows 4-5 star reviews (max 10)
5. **Updates**: Rebuild your site to fetch new reviews

## Getting Reviews

Share this link with clients to request reviews:
```
https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
```

Replace `YOUR_PLACE_ID` with your actual Place ID.

## Troubleshooting

### Reviews Not Showing

1. **Check console logs**: Look for error messages in terminal or browser console
2. **Verify credentials**: Make sure API key and Place ID are correct
3. **Check API status**: Ensure Places API is enabled in Google Cloud Console
4. **Billing account**: Some Google APIs require a billing account (but stay within free tier)

### "API Error" Message

1. Check if Places API is enabled
2. Verify API key restrictions aren't too strict
3. Ensure billing is set up in Google Cloud (required even for free tier)

### Mock Reviews Showing

This is normal if:
- Environment variables are not set
- API credentials are incorrect
- API request fails

To use real reviews, ensure `.env` file has correct credentials.

## API Costs

- **Place Details**: $0.017 per request
- **Free tier**: $200/month credit = ~11,700 requests
- **Your usage**: ~1 request per build (essentially free)
- **Example**: 100 builds/month = $1.70 = still within free tier

## Best Practices

1. **Encourage reviews**: Send the review link to happy clients
2. **Respond to reviews**: Reply to reviews in your Google Business Profile
3. **Regular rebuilds**: Set up scheduled builds (daily/weekly) to keep reviews fresh
4. **Mix sources**: Consider adding manual testimonials to Sanity CMS for more control

## Support

If you encounter issues:
1. Check the [Google Places API documentation](https://developers.google.com/maps/documentation/places/web-service/overview)
2. Review your Google Cloud Console for any error messages
3. Check the browser console and server logs for debugging info

## Manual Testimonials (Alternative)

If you prefer full control over testimonials:
1. Create a `testimonial` schema in Sanity CMS
2. Manually add testimonials through Sanity Studio
3. Fetch from Sanity instead of Google API
4. Mix both: Show some Google reviews + some manual testimonials
