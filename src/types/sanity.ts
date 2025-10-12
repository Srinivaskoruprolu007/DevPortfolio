// Sanity CMS Types for Portfolio

export interface SanityImage {
  _id: string;
  url: string;
}

export interface SanityImageObject {
  asset: SanityImage;
  alt?: string;
}

export interface SanityFile {
  asset: {
    _id: string;
    url: string;
  };
}

export interface Technology {
  _id: string;
  name: string;
  slug: string;
  icon?: SanityImageObject;
  color?: string;
  category?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: SanityImageObject;
  gallery?: SanityImageObject[];
  technologies: Technology[];
  achievements: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  order?: number;
  _createdAt: string;
  _updatedAt: string;
}

export interface SanitySkill {
  _id: string;
  name: string;
  category: "frontend" | "backend" | "dataAnalysis" | "tools";
  level: number;
  order?: number;
}

export interface SanityAbout {
  _id: string;
  title: string;
  subtitle: string;
  bio: string;
  image: SanityImageObject;
  resume?: SanityFile;
  socialLinks: SocialLink[];
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  company?: string;
  image?: SanityImageObject;
  content: string;
  rating?: number;
  featured: boolean;
  date?: string;
  order?: number;
  _createdAt: string;
  _updatedAt: string;
}

// Transformed types for the app (matching existing LocalProject structure)
export interface ProjectFromSanity {
  title: string;
  description: string;
  achievements: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  github: string;
  demo: string;
}

export interface TestimonialFromSanity {
  name: string;
  role: string;
  company?: string;
  image: string;
  imageAlt: string;
  content: string;
  rating: number;
  featured: boolean;
  date?: string;
}
