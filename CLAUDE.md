# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **real estate property listing website** built with Astro, React, TypeScript, and Tailwind CSS v4. This is a rebuild of the Next.js version with improved performance and static site generation capabilities.

## Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:4321

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Other
npm run astro        # Run Astro CLI commands
```

## Architecture

### Tech Stack
- **Framework:** Astro 5.x with React integration
- **React:** v19
- **TypeScript:** v5 (strict mode)
- **Styling:** Tailwind CSS v4
- **Content:** Content Collections for blogs and properties

### Project Structure

```
src/
├── components/          # React and Astro components
│   ├── layout/         # Header, Footer
│   ├── home/           # Homepage sections
│   └── shared/         # Reusable components
├── layouts/            # Page layouts
│   └── Layout.astro    # Base layout with global styles
├── pages/              # File-based routing
│   ├── index.astro     # Homepage
│   ├── properties/     # Property pages
│   └── blog/           # Blog pages
├── data/               # Property data and static content
├── styles/             # Global CSS (Tailwind)
└── types/              # TypeScript definitions
```

### Key Features
- **Static Site Generation:** Pre-rendered pages for optimal performance
- **Islands Architecture:** Interactive React components where needed
- **Content Collections:** Type-safe content management for blogs/properties
- **Optimized Images:** Astro's built-in image optimization
- **SEO Ready:** Built-in meta tags and sitemap generation

## Property Data

Property data is located in `src/data/properties.ts` and includes:
- 18 properties with details (price, location, beds, garages, etc.)
- Categories: apartment, villa, office, shop, house, warehouse
- US state locations (CA, TX, FL, NY, etc.)
- Buy/Rent status and tags

## Migration from Next.js

This project is a rebuild from the Next.js version. Key differences:
- **Routing:** File-based with `.astro` pages instead of App Router
- **Data Fetching:** Static imports instead of API routes
- **Components:** Mix of Astro and React components (use React for interactivity)
- **Performance:** Faster builds and load times with partial hydration

## Next Steps

1. Create content collections for properties and blogs
2. Build page layouts and components
3. Copy over styles from Next.js version
4. Implement filtering and search functionality
5. Set up deployment (Vercel/Netlify)

## Important Notes

- Use Astro components for static content
- Use React components (with `client:*` directives) only for interactive features
- Leverage Astro's built-in optimizations (images, assets, etc.)
- Property images should be placed in `public/images/properties/`
