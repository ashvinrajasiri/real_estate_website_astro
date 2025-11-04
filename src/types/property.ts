export interface Property {
  id: string;
  property_img: string;
  property_title: string;
  property_price: string;
  category: 'apartment' | 'villa' | 'office' | 'shop' | 'house' | 'warehouse';
  category_img: string;
  rooms: number;
  bathrooms: number;
  location: string;
  livingArea: string;
  tag: string;
  check: boolean;
  status: 'Buy' | 'Rent';
  type: 'Apartment' | 'House' | 'Commercial';
  beds: number;
  garages: number;
  region: 'north' | 'south' | 'east' | 'west' | 'central';
  name: string;
  slug: string;
}
