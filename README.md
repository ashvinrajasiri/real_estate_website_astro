# Real Estate Website - Astro

A modern real estate property listing website built with **AstroWind** template, featuring Astro 5 and Tailwind CSS.

## Features

- **18 Property Listings** - Apartments, villas, offices, shops, houses, and warehouses
- **Production-Ready Performance** - Built on AstroWind's optimized foundation
- **Dark Mode Support** - Automatic theme switching
- **SEO Optimized** - Meta tags, sitemaps, and Open Graph support
- **Responsive Design** - Mobile-first approach
- **Type-Safe** - Full TypeScript support with strict mode
- **Blog Ready** - Content collections for articles and updates

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
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Run all checks (Astro, ESLint, Prettier)
npm run fix          # Auto-fix ESLint and Prettier issues
```

## Based On

This project uses the [AstroWind](https://github.com/arthelokyo/astrowind) template - a free, open-source Astro 5.0 + Tailwind CSS starter.

## License

See LICENSE.md for details.
