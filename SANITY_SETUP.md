# Sanity CMS Setup Guide for Property Management

This guide will walk you through setting up Sanity CMS to manage your property listings without needing to update code.

## Step 1: Create a Sanity Account and Project

1. Go to [https://www.sanity.io](https://www.sanity.io) and sign up (free account)
2. After signing in, go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
3. Click "Create new project"
4. Enter project name: "Real Estate Properties" (or your preferred name)
5. Choose a dataset name: "production" (recommended)
6. Choose a region close to your users (e.g., North America)
7. Copy your **Project ID** (looks like: abc123de)

## Step 2: Configure Your Environment Variables

1. In your project root, create a file called `.env`:
   ```bash
   touch .env
   ```

2. Add the following to `.env` (replace with your actual Project ID):
   ```
   PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   PUBLIC_SANITY_DATASET=production
   ```

3. Update `sanity.config.ts` with your Project ID:
   - Replace `YOUR_PROJECT_ID` with your actual Project ID

4. Update `sanity/sanity.cli.ts` with your Project ID:
   - Replace `YOUR_PROJECT_ID` with your actual Project ID

5. Update `src/utils/sanity.ts`:
   - Replace `YOUR_PROJECT_ID` with your actual Project ID (or it will use the env variable)

## Step 3: Deploy Sanity Studio

Sanity Studio is the admin interface where you'll manage properties. Deploy it to Sanity's free hosting:

```bash
npm run sanity:deploy
```

You'll be prompted to:
- Log in to Sanity (if not already logged in)
- Choose a studio hostname (e.g., "your-real-estate")

After deployment, your Sanity Studio will be available at:
`https://your-real-estate.sanity.studio`

## Step 4: Run Sanity Studio Locally (Optional)

To test Sanity Studio locally before deploying:

```bash
npm run sanity
```

This starts Sanity Studio at `http://localhost:3333`

## Step 5: Add Your First Property

1. Go to your Sanity Studio URL (either local or deployed)
2. Click "+ Create" → "Property"
3. Fill in the property details:
   - **Property Title**: Name of the property
   - **Slug**: Click "Generate" to create from title
   - **Property Image**: Upload an image
   - **Property Price**: e.g., "$750,000"
   - **Category**: Choose from dropdown (apartment, villa, house, etc.)
   - **Status**: For Sale or For Rent
   - **Bedrooms, Bathrooms, Garages**: Numbers
   - **Living Area**: e.g., "2,500 sq ft"
   - **Location**: e.g., "Toronto, ON"
   - **Region**: Choose from dropdown
   - **Tags** (optional): Featured, New, Hot, Reduced
4. Click "Publish"

## Step 6: Update Your Astro Site to Use Sanity

The code is already set up! You just need to update the property pages:

### Update `/src/pages/properties.astro`

Replace the import at the top:
```typescript
// OLD
import { properties } from '~/data/properties/properties';

// NEW
import { getAllProperties } from '~/utils/sanity';
const properties = await getAllProperties();
```

### Update `/src/pages/properties/[slug].astro`

Replace the imports and getStaticPaths:
```typescript
// OLD
import { properties } from '~/data/properties/properties';

export const getStaticPaths = (() => {
  return properties.map((property) => ({
    params: { slug: property.slug },
    props: { property },
  }));
}) satisfies GetStaticPaths;

// NEW
import { getAllProperties, getPropertyBySlug } from '~/utils/sanity';

export async function getStaticPaths() {
  const properties = await getAllProperties();
  return properties.map((property) => ({
    params: { slug: property.slug },
    props: { property },
  }));
}
```

### Update `/src/pages/index.astro`

Replace the import:
```typescript
// OLD
import { properties } from '~/data/properties/properties';

// NEW
import { getAllProperties } from '~/utils/sanity';
const properties = await getAllProperties();
```

## Step 7: Test Your Setup

1. Make sure your `.env` file has the correct Project ID
2. Restart your Astro dev server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:4321`
4. Your properties from Sanity should now appear!

## Step 8: Set Up Automatic Rebuilds (Vercel)

When you deploy to Vercel, you'll want the site to rebuild automatically when you update properties in Sanity.

### In Vercel:
1. Go to your project settings
2. Navigate to "Git" → "Deploy Hooks"
3. Create a new hook named "Sanity Content Update"
4. Copy the webhook URL

### In Sanity:
1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to "API" → "Webhooks"
4. Click "Create webhook"
5. Name: "Vercel Deploy"
6. URL: Paste the Vercel webhook URL
7. Dataset: production
8. Trigger on: Create, Update, Delete
9. Filter: `_type == "property"`
10. Save

Now, whenever you publish, update, or delete a property in Sanity, your site will automatically rebuild on Vercel!

## Managing Properties (For Non-Technical Users)

### Adding a New Property
1. Go to your Sanity Studio URL
2. Click "+ Create" button
3. Select "Property"
4. Fill in all required fields (marked with *)
5. Upload images
6. Click "Publish"

### Editing an Existing Property
1. Go to your Sanity Studio URL
2. Find the property in the list
3. Click on it to open
4. Make your changes
5. Click "Publish" to save

### Deleting a Property
1. Go to your Sanity Studio URL
2. Find the property in the list
3. Click on it to open
4. Click the three dots menu (⋯) in the top right
5. Select "Delete"
6. Confirm deletion

## Troubleshooting

### Properties not showing up?
- Check that your `.env` file has the correct `PUBLIC_SANITY_PROJECT_ID`
- Verify properties are published in Sanity Studio (not just drafts)
- Restart your dev server after changing `.env`

### Images not loading?
- Make sure images are uploaded in Sanity Studio
- Check that the image field is filled in each property

### Build failing?
- Ensure you have at least one published property in Sanity
- Check that all required fields are filled in for each property
- Verify your Sanity Project ID is correct

## Next Steps

- Add more properties through Sanity Studio
- Customize the property schema in `/sanity/schemas/property.ts` if needed
- Invite team members to Sanity (up to 20 free seats)
- Explore Sanity's image optimization features

## Support

- Sanity Documentation: https://www.sanity.io/docs
- Sanity Slack Community: https://slack.sanity.io
