import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'property_title',
      title: 'Property Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'property_title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'property_img',
      title: 'Property Image',
      type: 'image',
      description: 'Main property image (used for listings)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery_images',
      title: 'Gallery Images',
      type: 'array',
      description: 'Additional images for the property gallery (optional)',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'property_price',
      title: 'Property Price',
      type: 'string',
      description: 'Format: $XXX,XXX',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Apartment', value: 'apartment' },
          { title: 'Villa', value: 'villa' },
          { title: 'Office', value: 'office' },
          { title: 'Shop', value: 'shop' },
          { title: 'House', value: 'house' },
          { title: 'Warehouse', value: 'warehouse' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'Buy' },
          { title: 'For Rent', value: 'Rent' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'beds',
      title: 'Bedrooms',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'garages',
      title: 'Garages',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'livingArea',
      title: 'Living Area',
      type: 'string',
      description: 'e.g., "2,500 sq ft" or "232 m²"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, Province',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'North', value: 'north' },
          { title: 'South', value: 'south' },
          { title: 'East', value: 'east' },
          { title: 'West', value: 'west' },
          { title: 'Central', value: 'central' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Featured', value: 'featured' },
          { title: 'New', value: 'new' },
          { title: 'Hot', value: 'hot' },
          { title: 'Reduced', value: 'reduced' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'property_title',
      subtitle: 'location',
      media: 'property_img',
      price: 'property_price',
    },
    prepare(selection) {
      const { title, subtitle, media, price } = selection;
      return {
        title: title,
        subtitle: `${subtitle} - ${price}`,
        media: media,
      };
    },
  },
});
