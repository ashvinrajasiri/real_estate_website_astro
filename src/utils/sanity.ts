import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create the Sanity client
export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'wsetn0s8',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you need fresh data
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Property type matching our Sanity schema
export interface SanityProperty {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  property_title: string;
  slug: {
    current: string;
  };
  property_img: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  gallery_images?: Array<{
    asset: {
      _ref: string;
      _type: string;
    };
  }>;
  property_price: string;
  description?: string;
  category: string;
  status: string;
  beds: number;
  bathrooms: number;
  garages: number;
  livingArea: string;
  location: string;
  region: string;
  tag?: string[];
}

// Transform Sanity property to match our existing Property type
export function transformSanityProperty(sanityProperty: SanityProperty) {
  // Build gallery images array: main image + any additional gallery images
  const galleryImages = [sanityProperty.property_img];
  if (sanityProperty.gallery_images && sanityProperty.gallery_images.length > 0) {
    galleryImages.push(...sanityProperty.gallery_images);
  }

  return {
    id: sanityProperty._id,
    property_title: sanityProperty.property_title,
    slug: sanityProperty.slug.current,
    property_img: urlFor(sanityProperty.property_img).url(),
    gallery_images: galleryImages.map((img) => urlFor(img).url()),
    property_price: sanityProperty.property_price,
    description: sanityProperty.description,
    category: sanityProperty.category,
    status: sanityProperty.status,
    beds: sanityProperty.beds,
    bathrooms: sanityProperty.bathrooms,
    garages: sanityProperty.garages,
    livingArea: sanityProperty.livingArea,
    location: sanityProperty.location,
    region: sanityProperty.region,
    tag: sanityProperty.tag || [],
  };
}

// Fetch all properties
export async function getAllProperties() {
  const query = `*[_type == "property"] | order(_createdAt desc)`;
  const properties = await sanityClient.fetch<SanityProperty[]>(query);
  return properties.map(transformSanityProperty);
}

// Fetch a single property by slug
export async function getPropertyBySlug(slug: string) {
  const query = `*[_type == "property" && slug.current == $slug][0]`;
  const property = await sanityClient.fetch<SanityProperty>(query, { slug });
  return property ? transformSanityProperty(property) : null;
}

// Fetch properties by status (Buy/Rent)
export async function getPropertiesByStatus(status: string) {
  const query = `*[_type == "property" && status == $status] | order(_createdAt desc)`;
  const properties = await sanityClient.fetch<SanityProperty[]>(query, { status });
  return properties.map(transformSanityProperty);
}

// Fetch properties by category
export async function getPropertiesByCategory(category: string) {
  const query = `*[_type == "property" && category == $category] | order(_createdAt desc)`;
  const properties = await sanityClient.fetch<SanityProperty[]>(query, { category });
  return properties.map(transformSanityProperty);
}
