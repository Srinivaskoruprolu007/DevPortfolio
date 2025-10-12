import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Replace these with your actual Sanity project details
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "your-project-id";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN to avoid CORS issues during development
});

// Helper for generating image URLs
const builder = imageUrlBuilder(client);

export const urlFor = (source: Parameters<typeof builder.image>[0]) =>
  builder.image(source);

// GROQ queries for fetching data
export const projectsQuery = `
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    description,
    "slug": slug.current,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    gallery[] {
      asset-> {
        _id,
        url
      },
      alt
    },
    technologies[]->{
      _id,
      name,
      "slug": slug.current
    },
    achievements[],
    githubUrl,
    liveUrl,
    featured,
    order,
    _createdAt,
    _updatedAt
  }
`;

export const skillsQuery = `
  *[_type == "skill"] | order(category asc, order asc) {
    _id,
    name,
    category,
    level,
    order
  }
`;

export const aboutQuery = `
  *[_type == "about"][0] {
    _id,
    title,
    subtitle,
    bio,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    resume {
      asset-> {
        _id,
        url
      }
    },
    socialLinks[] {
      platform,
      url,
      icon
    }
  }
`;

export const testimonialsQuery = `
  *[_type == "testimonial"] | order(featured desc, order asc, _createdAt desc) {
    _id,
    name,
    role,
    company,
    image {
      asset-> {
        _id,
        url
      },
      alt
    },
    content,
    rating,
    featured,
    date,
    order,
    _createdAt,
    _updatedAt
  }
`;
