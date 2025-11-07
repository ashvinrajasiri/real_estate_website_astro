# Real Estate Website - Astro

A modern real estate property listing website built with **AstroWind** template, featuring Astro 5, Tailwind CSS, and **Sanity CMS** for easy property management.

## Features

- **Sanity CMS Integration** - Manage properties through a user-friendly admin interface (no code required!)
- **18 Property Listings** - Apartments, villas, offices, shops, houses, and warehouses
- **Mortgage Calculator** - Interactive calculator for properties for sale
- **Production-Ready Performance** - Built on AstroWind's optimized foundation
- **Dark Mode Support** - Automatic theme switching
- **SEO Optimized** - Meta tags, sitemaps, and Open Graph support
- **Responsive Design** - Mobile-first approach
- **Type-Safe** - Full TypeScript support with strict mode
- **Blog Ready** - Content collections for articles and updates

## 🚀 NEW: Sanity CMS Setup

This project is now configured for **Sanity CMS** - a modern headless CMS that lets you manage property listings without touching code!

### Quick Start with Sanity

1. **Read the setup guide**: Open `NEXT_STEPS.md` for step-by-step instructions
2. **Total setup time**: ~20 minutes
3. **What you'll get**: A visual admin interface to manage properties

### Documentation

- **📋 NEXT_STEPS.md** - Start here! Complete setup instructions
- **📘 SANITY_SETUP.md** - Detailed technical guide
- **👥 USER_GUIDE.md** - Simple guide for non-technical users
- **📊 SANITY_SUMMARY.md** - Overview of what's been set up

### Benefits

- ✅ **No code changes** needed to add/edit/delete properties
- ✅ **Visual interface** - user-friendly admin panel
- ✅ **Free tier** - 20 users, 10K documents, 1M API requests/month
- ✅ **Automatic rebuilds** - via webhooks (when deployed to Vercel)
- ✅ **Image optimization** - built-in CDN

**Status**: 90% configured - you just need to create a Sanity account and complete the setup!

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to view the site.

## Project Structure

```
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable Astro components
│   ├── content/          # Content collections (MDX)
│   ├── data/
│   │   └── properties/   # Property data (18 properties)
│   ├── layouts/          # Page layouts
│   ├── pages/            # File-based routing
│   ├── types/            # TypeScript definitions
│   └── utils/            # Helper functions
├── public/
│   └── images/
│       ├── properties/   # Property images
│       └── property_option/ # Category icons
└── vendor/               # Third-party assets
```

## Property Data

All property data is located in `src/data/properties/properties.ts` with type definitions in `src/types/property.ts`.

**Property categories:**
- Apartments
- Villas
- Offices
- Shops
- Houses
- Warehouses

**Each property includes:**
- Price, location, beds, bathrooms
- Living area, garages, region
- Buy/Rent status and tags
- Images and category icons

## Configuration

### Site Settings
Edit `src/config.yaml` to customize:
- Site name and description
- Social media links
- Analytics integration
- Default language settings

### Navigation
Modify `src/navigation.ts` to update:
- Header menu items
- Footer links
- Social media icons

## Tech Stack

- **Framework:** Astro 5.x
- **Template:** AstroWind
- **Styling:** Tailwind CSS v3
- **TypeScript:** v5 (strict mode)
- **Content:** Content Collections
- **Icons:** Tabler Icons via astro-icon
- **SEO:** @astrolib/seo
- **Analytics:** @astrolib/analytics

## Customization

1. Replace property images in `public/images/properties/`
2. Update property data in `src/data/properties/properties.ts`
3. Customize homepage at `src/pages/index.astro`
4. Modify Tailwind colors in `tailwind.config.js`
5. Add property listing and detail pages

## Commands

```bash
# Astro
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Run all checks (Astro, ESLint, Prettier)
npm run fix          # Auto-fix ESLint and Prettier issues

# Sanity CMS
npm run sanity       # Run Sanity Studio locally (http://localhost:3333)
npm run sanity:deploy # Deploy Sanity Studio to Sanity hosting
npm run sanity:build  # Build Sanity Studio
```

## Based On

This project uses the [AstroWind](https://github.com/arthelokyo/astrowind) template - a free, open-source Astro 5.0 + Tailwind CSS starter.

## License

See LICENSE.md for details.
