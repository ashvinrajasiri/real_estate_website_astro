/**
 * Migration Script: Import Existing Properties to Sanity
 *
 * This script imports your existing properties from src/data/properties/properties.ts
 * into your Sanity dataset.
 *
 * Usage:
 * 1. Make sure you've set up your .env file with SANITY_PROJECT_ID and SANITY_DATASET
 * 2. Run: npx tsx scripts/migrate-properties.ts
 *
 * Note: This will create new property documents in Sanity. Run it only once!
 */

import { createClient } from '@sanity/client';
import { properties } from '../src/data/properties/properties.js';

// Configuration
const PROJECT_ID = process.env.PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID';
const DATASET = process.env.PUBLIC_SANITY_DATASET || 'production';
const API_TOKEN = process.env.SANITY_API_TOKEN; // You'll need to create this

if (PROJECT_ID === 'YOUR_PROJECT_ID') {
  console.error('❌ ERROR: Please set your SANITY_PROJECT_ID in .env file');
  process.exit(1);
}

if (!API_TOKEN) {
  console.error('❌ ERROR: Please set your SANITY_API_TOKEN in .env file');
  console.log('\nTo get an API token:');
  console.log('1. Go to https://www.sanity.io/manage');
  console.log('2. Select your project');
  console.log('3. Go to "API" → "Tokens"');
  console.log('4. Create a new token with "Editor" permissions');
  console.log('5. Add it to your .env file as SANITY_API_TOKEN=your_token_here');
  process.exit(1);
}

// Create Sanity client with write permissions
const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  token: API_TOKEN,
  useCdn: false, // Must be false for writes
});

async function migrateProperties() {
  console.log(`🚀 Starting property migration to Sanity...\n`);
  console.log(`Project ID: ${PROJECT_ID}`);
  console.log(`Dataset: ${DATASET}`);
  console.log(`Total properties to migrate: ${properties.length}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const property of properties) {
    try {
      console.log(`Migrating: ${property.property_title}...`);

      // Note: Images will need to be uploaded separately
      // This script creates a placeholder for the image
      const sanityDoc = {
        _type: 'property',
        property_title: property.property_title,
        slug: {
          _type: 'slug',
          current: property.slug,
        },
        // Image will need to be uploaded manually or via separate script
        // For now, we'll add a note in the migration
        property_price: property.property_price,
        category: property.category,
        status: property.status,
        beds: property.beds,
        bathrooms: property.bathrooms,
        garages: property.garages,
        livingArea: property.livingArea,
        location: property.location,
        tag: property.tag || [],
      };

      const result = await client.create(sanityDoc);
      console.log(`✅ Success: ${property.property_title} (ID: ${result._id})`);
      successCount++;

    } catch (error) {
      console.error(`❌ Error migrating ${property.property_title}:`, error);
      errorCount++;
    }
  }

  console.log(`\n🎉 Migration Complete!`);
  console.log(`✅ Successfully migrated: ${successCount} properties`);
  if (errorCount > 0) {
    console.log(`❌ Failed: ${errorCount} properties`);
  }

  console.log(`\n⚠️  IMPORTANT: Images need to be uploaded manually`);
  console.log(`Go to your Sanity Studio and upload images for each property:`);
  console.log(`https://your-project.sanity.studio`);
}

// Run the migration
migrateProperties()
  .then(() => {
    console.log('\n✨ Migration script completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration script failed:', error);
    process.exit(1);
  });
