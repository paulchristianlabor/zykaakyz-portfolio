import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}

export interface Highlight {
  label: string;
  value: string;
}

export interface InterestCard {
  id: string;
  icon: IconDefinition;
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  /** CSS gradient string e.g. 'linear-gradient(135deg, #818cf8, #a78bfa)' */
  gradient: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  /** CSS gradient string */
  gradient: string;
}

export interface WritingEntry {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
  socials: SocialLink[];
}

export interface SiteContent {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  bio: string[];
  highlights: Highlight[];
  navLinks: NavLink[];
  interests: InterestCard[];
  projects: Project[];
  gallery: GalleryItem[];
  writing: WritingEntry[];
  contact: ContactInfo;
  footerTagline: string;
}
