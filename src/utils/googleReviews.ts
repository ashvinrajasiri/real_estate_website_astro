import type { GoogleReview, GoogleReviewsResponse, Testimonial } from '@/types/review';

// Mock reviews for development/fallback
const mockReviews: GoogleReview[] = [
  {
    author_name: 'John Smith',
    rating: 5,
    text: 'Excellent service! Made the home buying process smooth and stress-free. Highly recommended!',
    time: Date.now() / 1000,
    relative_time_description: '2 months ago',
    profile_photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    author_name: 'Sarah Johnson',
    rating: 5,
    text: 'Professional, knowledgeable, and always available to answer questions. Found us our dream home!',
    time: Date.now() / 1000,
    relative_time_description: '3 months ago',
    profile_photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    author_name: 'Michael Chen',
    rating: 5,
    text: 'Great experience from start to finish. Expertise in the local market really showed. Would definitely work with again!',
    time: Date.now() / 1000,
    relative_time_description: '4 months ago',
    profile_photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

/**
 * Fetches Google reviews from Google Places API
 * Falls back to mock data if credentials are not configured
 */
export async function fetchGoogleReviews(): Promise<GoogleReviewsResponse> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  // If credentials not configured, return mock data
  if (!apiKey || !placeId) {
    console.log('Google Places API credentials not configured. Using mock reviews.');
    return {
      reviews: mockReviews,
      rating: 5.0,
      user_ratings_total: mockReviews.length,
      lastUpdated: new Date().toISOString(),
    };
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    // Filter for high-rated reviews (4-5 stars) and limit to 10
    const filteredReviews = (data.result?.reviews || [])
      .filter((review: GoogleReview) => review.rating >= 4)
      .slice(0, 10);

    return {
      reviews: filteredReviews.length > 0 ? filteredReviews : mockReviews,
      rating: data.result?.rating || 5.0,
      user_ratings_total: data.result?.user_ratings_total || 0,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Failed to fetch Google reviews:', error);
    console.log('Falling back to mock reviews.');

    // Fallback to mock data on error
    return {
      reviews: mockReviews,
      rating: 5.0,
      user_ratings_total: mockReviews.length,
      lastUpdated: new Date().toISOString(),
    };
  }
}

/**
 * Converts Google reviews to testimonial format for the homepage
 */
export function convertReviewsToTestimonials(reviews: GoogleReview[]): Testimonial[] {
  return reviews.map((review) => ({
    testimonial: review.text,
    name: review.author_name,
    job: 'Google Review',
    image: review.profile_photo_url
      ? {
          src: review.profile_photo_url,
          alt: review.author_name,
        }
      : undefined,
    rating: review.rating,
  }));
}

/**
 * Gets testimonials ready to display on the homepage
 * Fetches Google reviews and converts them to testimonial format
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  const reviewsData = await fetchGoogleReviews();
  return convertReviewsToTestimonials(reviewsData.reviews);
}
