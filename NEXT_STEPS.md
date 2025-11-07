# Next Steps: Completing Your Sanity CMS Setup

Congratulations! I've set up the foundation for Sanity CMS integration with your real estate website. Here's what to do next to get it fully working.

## What's Been Done

✅ Installed Sanity dependencies
✅ Created property schema matching your existing data structure
✅ Set up Sanity Studio configuration
✅ Created Sanity client utility functions for Astro
✅ Created migration script for existing properties
✅ Added NPM scripts for running Sanity Studio
✅ Created comprehensive setup and user guides

## What You Need To Do

### Step 1: Create Your Sanity Project (5 minutes)

1. Go to [https://www.sanity.io](httpsloo://www.sanity.io) and create a free account
2. Once logged in, go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
3. Click "Create new project"
4. Fill in:
   - Project name: "Real Estate Properties"
   - Dataset name: "production"
   - Region: Choose closest to you
5. **Copy your Project ID** (looks like: `abc123de`)

### Step 2: Configure Environment Variables (2 minutes)

1. Create a `.env` file in your project root:
   ```bash
   touch .env
   ```

2. Add these lines to `.env` (replace with your actual Project ID):
   ```
   PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   PUBLIC_SANITY_DATASET=production
   ```

3. Update three configuration files with your Project ID:

   **File 1:** `sanity.config.ts`
   - Find line: `projectId: 'YOUR_PROJECT_ID',`
   - Replace `YOUR_PROJECT_ID` with your actual ID

   **File 2:** `sanity/sanity.cli.ts`
   - Find line: `projectId: 'YOUR_PROJECT_ID',`
   - Replace `YOUR_PROJECT_ID` with your actual ID

   **File 3:** `src/utils/sanity.ts`
   - Find line: `projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',`
   - Replace the second `YOUR_PROJECT_ID` with your actual ID

### Step 3: Deploy Sanity Studio (3 minutes)

Run this command to deploy your admin interface:

```bash
npm run sanity:deploy
```

You'll be prompted to:
- Log in to Sanity (use your credentials from Step 1)
- Choose a studio hostname (e.g., "your-real-estate-admin")

After deployment, you'll get a URL like:
`https://your-real-estate-admin.sanity.studio`

**Bookmark this URL** - this is where you'll manage properties!

### Step 4: Optional - Migrate Existing Properties (10 minutes)

If you want to import your existing 18 properties into Sanity:

1. First, create an API token:
   - Go to https://www.sanity.io/manage
   - Select your project
   - Click "API" → "Tokens"
   - Create token with "Editor" permissions
   - Copy the token

2. Add the token to your `.env` file:
   ```
   SANITY_API_TOKEN=your_token_here
   ```

3. Run the migration script:
   ```bash
   npx tsx scripts/migrate-properties.ts
   ```

4. **Important**: The script migrates data but NOT images. You'll need to:
   - Go to your Sanity Studio URL
   - Open each property
   - Upload the property image
   - Click "Publish"

**Alternative**: Skip migration and manually add properties through Sanity Studio (recommended for learning the interface)

### Step 5: Update Astro Pages to Use Sanity (5 minutes)

You need to update three files to fetch properties from Sanity instead of the TypeScript file:

#### **File 1:** `src/pages/index.astro`

Find this line (around line 10):
```typescript
import { properties } from '~/data/properties/properties';
```

Replace with:
```typescript
import { getAllProperties } from '~/utils/sanity';
const properties = await getAllProperties();
```

#### **File 2:** `src/pages/properties.astro`

Same change - find and replace the import:
```typescript
// OLD
import { properties } from '~/data/properties/properties';

// NEW
import { getAllProperties } from '~/utils/sanity';
const properties = await getAllProperties();
```

#### **File 3:** `src/pages/properties/[slug].astro`

This one needs more changes. Find the imports and `getStaticPaths` section (lines 1-14):

**OLD CODE:**
```typescript
import { properties } from '~/data/properties/properties';
import type { GetStaticPaths } from 'astro';

export const getStaticPaths = (() => {
  return properties.map((property) => ({
    params: { slug: property.slug },
    props: { property },
  }));
}) satisfies GetStaticPaths;
```

**NEW CODE:**
```typescript
import { getAllProperties } from '~/utils/sanity';
import type { GetStaticPaths } from 'astro';

export async function getStaticPaths() {
  const properties = await getAllProperties();
  return properties.map((property) => ({
    params: { slug: property.slug },
    props: { property },
  }));
}
```

### Step 6: Test Everything (5 minutes)

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Add a test property in Sanity Studio:
   - Go to your Sanity Studio URL
   - Click "+ Create" → "Property"
   - Fill in all required fields (*)
   - Upload an image
   - Click "Publish"

3. Rebuild your Astro site:
   - Stop the dev server (Ctrl+C)
   - Start it again: `npm run dev`

4. Visit `http://localhost:4321`
   - Your new property should appear!

### Step 7: Deploy to Vercel (Optional - 10 minutes)

When you're ready to deploy:

1. Push your code to GitHub

2. Connect to Vercel:
   - Go to [https://vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables:
     - `PUBLIC_SANITY_PROJECT_ID`: your Project ID
     - `PUBLIC_SANITY_DATASET`: production
   - Deploy!

3. Set up automatic rebuilds:
   - In Vercel: Settings → Git → Deploy Hooks
   - Create hook named "Sanity Content Update"
   - Copy the webhook URL

   - In Sanity: https://www.sanity.io/manage
   - Select your project → API → Webhooks
   - Create webhook:
     - Name: "Vercel Deploy"
     - URL: (paste Vercel webhook URL)
     - Dataset: production
     - Trigger: Create, Update, Delete
     - Filter: `_type == "property"`

Now when you update properties in Sanity, your site automatically rebuilds!

## Documentation

I've created three guides for you:

1. **SANITY_SETUP.md** - Complete technical setup guide
2. **USER_GUIDE.md** - Simple guide for non-technical users managing properties
3. **NEXT_STEPS.md** - This file!

## Quick Reference Commands

```bash
# Run Astro development server
npm run dev

# Run Sanity Studio locally (on port 3333)
npm run sanity

# Build Sanity Studio for deployment
npm run sanity:build

# Deploy Sanity Studio
npm run sanity:deploy

# Build Astro site for production
npm run build

# Migrate existing properties to Sanity
npx tsx scripts/migrate-properties.ts
```

## Troubleshooting

**"Cannot find module '@sanity/client'"**
- Run: `npm install`

**Sanity Studio shows empty**
- Check your Project ID in `.env` and config files
- Make sure you're logged in to Sanity

**Properties not showing on website**
- Make sure properties are "Published" in Sanity (not just saved as drafts)
- Rebuild your Astro site (restart dev server)
- Check that `.env` file has correct Project ID

**Images not displaying**
- Ensure images are uploaded in Sanity Studio
- Check the `urlFor()` function is working in `src/utils/sanity.ts`

## What Happens After Setup

Once complete, managing properties will be as simple as:

1. Go to your Sanity Studio URL
2. Click "+ Create" → "Property"
3. Fill in the form
4. Upload images
5. Click "Publish"
6. Wait 2-5 minutes for site to rebuild (if webhook is set up)
7. Property appears on your website!

No code changes needed. No Git commits required. No technical knowledge necessary.

## Support

- **Sanity Documentation**: https://www.sanity.io/docs
- **Astro Documentation**: https://docs.astro.build
- **Sanity Slack**: https://slack.sanity.io

## Next Phase Enhancements (Future)

Once you're comfortable with Sanity, consider:

- Add more image fields for property galleries
- Add rich text descriptions
- Create categories for neighborhoods
- Add agent profiles
- Set up scheduled publishing
- Add property search functionality
- Create property comparison features

---

## Ready to Start?

Follow Steps 1-6 above in order. Take your time with each step. Once complete, you'll have a fully functional CMS for managing your property listings!

If you get stuck on any step, refer to the detailed guides in SANITY_SETUP.md and USER_GUIDE.md.

Good luck! 🚀
