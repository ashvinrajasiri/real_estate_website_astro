import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

// Initialize Sanity client
const client = createClient({
  projectId: 'wsetn0s8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skwsFOG38SpE2wl1l8Dz7DoYQJYPaBiQo3Jq9fOrMtrI6Q60hSmV5bXWiPMczyZz2GhpeQ8naVUBYds4OvfKgwCbjNPRz99HExDVYghiPGtPvnS1T9PlF3hhk4VdtER8LDjKsWsP2sEwSe1ARElS3ogu8GEunI4Wf53iiS9uPE6FR4sNC4ZH',
  useCdn: false,
});

const IMAGES_FOLDER = '/Users/ashvinrajasiri/Documents/Real Estate Images/18 Wetherby';
const PROPERTY_TITLE_SEARCH = '18 Wetherby';

async function uploadImages() {
  console.log('🏠 Starting bulk image upload for 233 Monarch property...\n');

  // Step 1: Find the property document
  console.log('📋 Finding property document...');

  // First, let's see all properties
  const allProperties = await client.fetch(`*[_type == "property"]{ _id, property_title }`);
  console.log(`Found ${allProperties.length} total properties in Sanity:`);
  allProperties.forEach(p => console.log(`  - ${p.property_title} (${p._id})`));
  console.log('');

  const properties = await client.fetch(
    `*[_type == "property" && property_title match $search]`,
    { search: `*${PROPERTY_TITLE_SEARCH}*` }
  );

  if (!properties || properties.length === 0) {
    console.error('❌ Property matching "233 Monarch" not found!');
    console.log('\n💡 Please create the property in Sanity Studio first, or update PROPERTY_TITLE_SEARCH in the script.');
    return;
  }

  const property = properties[0];
  console.log(`✅ Found property: ${property.property_title} (ID: ${property._id})\n`);

  // Step 2: Read all images from folder
  console.log('📂 Reading images from folder...');
  const files = fs.readdirSync(IMAGES_FOLDER)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort();

  console.log(`✅ Found ${files.length} images\n`);

  // Step 3: Upload each image to Sanity
  console.log('📤 Uploading images to Sanity...');
  const uploadedImages = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(IMAGES_FOLDER, file);

    try {
      console.log(`   [${i + 1}/${files.length}] Uploading ${file}...`);

      const fileBuffer = fs.readFileSync(filePath);
      const asset = await client.assets.upload('image', fileBuffer, {
        filename: file,
      });

      uploadedImages.push({
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      });

      console.log(`   ✓ Uploaded successfully (${asset._id})`);
    } catch (error) {
      console.error(`   ✗ Failed to upload ${file}:`, error);
    }
  }

  console.log(`\n✅ Successfully uploaded ${uploadedImages.length} images\n`);

  // Step 4: Update property with uploaded images
  console.log('🔗 Adding images to property gallery...');

  try {
    await client
      .patch(property._id)
      .set({ gallery_images: uploadedImages })
      .commit();

    console.log(`✅ Successfully added ${uploadedImages.length} images to gallery_images field\n`);
    console.log('🎉 Done! Refresh your Sanity Studio to see the images.');
  } catch (error) {
    console.error('❌ Failed to update property:', error);
  }
}

// Run the script
uploadImages().catch(console.error);
