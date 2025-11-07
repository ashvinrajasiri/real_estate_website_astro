# Property Management User Guide

## Quick Start

Your property listings are managed through **Sanity Studio** - a user-friendly admin interface where you can add, edit, and remove properties without touching any code.

## Accessing Sanity Studio

After setup, you'll access Sanity Studio at:
- **Online**: `https://your-project-name.sanity.studio`
- **Locally** (if running): `http://localhost:3333`

## Adding a New Property

1. **Click the "+ Create" button** in the top left
2. **Select "Property"** from the dropdown
3. **Fill in the property information**:

   ### Required Fields (marked with *)
   - **Property Title**: The name/address of the property
     - Example: "Modern Downtown Condo"

   - **Slug**: A URL-friendly version of the title
     - Click "Generate" button to create automatically
     - Example: "modern-downtown-condo"

   - **Property Image**: The main photo
     - Click "Select" to upload from your computer
     - Supported formats: JPG, PNG
     - Recommended size: 1200×800 pixels or larger

   - **Property Price**: The listing price
     - Format: "$XXX,XXX"
     - Example: "$750,000" or "$2,500/month"

   - **Category**: Type of property
     - Choose from: Apartment, Villa, Office, Shop, House, Warehouse

   - **Status**: For Sale or For Rent
     - "For Sale" = Buy
     - "For Rent" = Rent

   - **Bedrooms**: Number of bedrooms
     - Example: 3

   - **Bathrooms**: Number of bathrooms
     - Example: 2

   - **Garages**: Number of garage spaces
     - Example: 1

   - **Living Area**: Total square footage
     - Example: "2,500 sq ft" or "232 m²"

   - **Location**: City and province
     - Example: "Toronto, ON"

   - **Region**: Geographic area
     - Choose from: North, South, East, West, Central

   ### Optional Fields
   - **Tags**: Special labels for the property
     - Choose from: Featured, New, Hot, Reduced
     - Can select multiple tags

4. **Preview your property** (optional)
   - The preview panel shows how it will look

5. **Click "Publish"** when ready
   - Your property will appear on the website within a few minutes
   - If you save as draft, it won't be visible on the website yet

## Editing an Existing Property

1. **Find the property** in the list on the left
   - Use the search box to find it quickly
   - Or scroll through the list

2. **Click on the property** to open it

3. **Make your changes**
   - Edit any field
   - Upload new images
   - Change prices, descriptions, etc.

4. **Click "Publish"** to save changes
   - Changes will appear on the website within a few minutes

## Deleting a Property

1. **Open the property** you want to delete

2. **Click the three dots menu (⋯)** in the top right corner

3. **Select "Delete"**

4. **Confirm** the deletion
   - The property will be removed from the website within a few minutes

## Tips for Great Listings

### Images
- Use high-quality, well-lit photos
- Show different angles of the property
- Include exterior and interior shots
- Avoid blurry or dark images

### Pricing
- Always use the dollar sign: "$750,000"
- For rentals, include "/month": "$2,500/month"
- Use commas for readability: "$1,250,000" not "$1250000"

### Descriptions
- Be specific and accurate
- Highlight unique features
- Mention recent renovations
- Include neighborhood information

### Tags
- **Featured**: Premium listings to highlight
- **New**: Recently listed properties
- **Hot**: High-demand properties
- **Reduced**: Price reductions

## Understanding the Interface

### Left Sidebar
- Lists all your properties
- Search to find specific properties
- Click "+ Create" to add new properties

### Main Panel
- Shows the property details you're editing
- All fields are labeled clearly
- Required fields have an asterisk (*)

### Right Panel (Preview)
- Shows how the property will look
- Updates as you type

### Top Bar
- Save button (saves as draft)
- Publish button (makes it live)
- Menu (⋯) for more options

## Common Tasks

### Changing a Property Price
1. Open the property
2. Find the "Property Price" field
3. Update the price
4. Click "Publish"

### Marking a Property as Sold/Rented
Option 1: Delete the property
Option 2: Add a "Sold" or "Rented" tag (you may want to ask developer to add this tag option)

### Uploading Multiple Images
Currently, one main image per property. If you need a gallery feature, ask the developer to enhance the schema.

### Featuring a Property
1. Open the property
2. Find the "Tags" field
3. Select "Featured"
4. Click "Publish"

## Troubleshooting

**Changes not appearing on the website?**
- Make sure you clicked "Publish" (not just "Save")
- Wait 2-5 minutes for the site to rebuild
- Clear your browser cache and refresh

**Can't upload an image?**
- Check file size (should be under 10MB)
- Use JPG or PNG format
- Try a different image

**Made a mistake?**
- Open the property again
- Fix the mistake
- Click "Publish" to save

**Accidentally deleted a property?**
- Contact your developer - they may be able to restore it from version history

## Getting Help

If you run into issues or need help:
1. Check this guide first
2. Try the Sanity help documentation at sanity.io/docs
3. Contact your website developer

## Quick Reference

| Action | Steps |
|--------|-------|
| Add Property | Click "+ Create" → Property → Fill fields → Publish |
| Edit Property | Click property → Make changes → Publish |
| Delete Property | Click property → ⋯ menu → Delete → Confirm |
| Upload Image | Click "Select" in image field → Choose file → Upload |
| Feature Property | Edit property → Add "Featured" tag → Publish |
| Change Price | Edit property → Update price field → Publish |
