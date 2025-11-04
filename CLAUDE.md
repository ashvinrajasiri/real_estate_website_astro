# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **real estate property listing website** built with **AstroWind** template (Astro 5 + Tailwind CSS). The project combines the power of AstroWind's production-ready features with custom real estate property listings.

**Based on:** [AstroWind](https://github.com/arthelokyo/astrowind) - A free, open-source Astro 5.0 + Tailwind CSS template

## Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:4321

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Other
npm run astro        # Run Astro CLI commands
npm run format       # Format code with Prettier
```

## Architecture

### Tech Stack
- **Framework:** Astro 5.x
- **Template:** AstroWind
- **TypeScript:** v5 (strict mode)
- **Styling:** Tailwind CSS v3 with customization
- **Content:** Content Collections (for blogs and properties)
- **Icons:** tabler-icons

### Project Structure (AstroWind-based)

```
src/
├── assets/             # Images, styles, and static assets
├── components/         # Astro components
│   ├── blog/          # Blog-specific components
│   ├── common/        # Reusable UI components
│   └── widgets/       # Feature widgets (Hero, Features, etc.)
├── content/           # Content collections
│   └── post/          # Blog posts (MDX)
├── data/              # Data files
│   └── properties/    # Property data (properties.ts)
├── layouts/           # Page layouts
│   ├── Layout.astro   # Base layout
│   ├── PageLayout.astro
│   └── BlogLayout.astro
├── pages/             # File-based routing
│   ├── index.astro    # Homepage
│   ├── [...blog]/     # Blog pages
│   └── [properties]/  # Property pages (to be created)
├── types/             # TypeScript definitions
│   └── property.ts    # Property type definitions
├── utils/             # Utility functions
├── config.yaml        # Site configuration
└── navigation.ts      # Navigation configuration
```

### AstroWind Features
- **Production-Ready Performance:** High PageSpeed Insights scores out of the box
- **Dark Mode:** Built-in dark mode support via Tailwind CSS
- **Blog System:** Complete blogging with RSS feeds, MDX support, categories, tags
- **SEO Optimized:** Automatic sitemap generation, Open Graph tags
- **Image Optimization:** Astro Assets + Unpic for universal CDN support
- **Analytics Ready:** Google Analytics and Splitbee integration
- **Responsive Design:** Mobile-first, fully responsive components
- **Content Collections:** Type-safe content management

## Property Data

Property data is located in `src/data/properties/properties.ts` and includes:
- **18 properties** with complete details
- **Categories:** apartment, villa, office, shop, house, warehouse
- **Locations:** US states (California, Texas, Florida, New York, Illinois)
- **Details:** Price, beds, bathrooms, garages, living area, region
- **Status:** Buy/Rent with tags
- **Type definition:** See `src/types/property.ts` for the Property interface

Example usage:
```typescript
import { properties } from '@/data/properties/properties';
```

## Configuration

### Site Config
Edit `src/config.yaml` for:
- Site metadata (name, description)
- Default language and date formatting
- Analytics integration
- Social media links

### Navigation
Edit `src/navigation.ts` to customize:
- Header navigation links
- Footer links and columns
- Social media icons

## Customization for Real Estate

### Next Steps
1. Customize homepage (src/pages/index.astro) for real estate branding
2. Create property listing pages using widgets
3. Add property detail pages with dynamic routes
4. Implement property search and filtering
5. Replace demo blog content with real estate articles
6. Add property images to `public/images/properties/`
7. Customize Tailwind colors for real estate brand

### Important Notes

- **AstroWind uses Astro components** (not React) - they're static by default
- Use `client:*` directives only when you need interactivity
- Property images should be in `public/images/properties/`
- Category icons should be in `public/images/property_option/`
- Leverage the existing widget components for building pages quickly
- The template uses content collections - consider converting properties to a collection
