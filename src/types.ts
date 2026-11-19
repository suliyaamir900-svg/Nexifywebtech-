export interface ProductItem {
  id: string;
  title: string;
  category: 'windows' | 'android' | 'web' | 'website' | 'games' | 'tools';
  platform: 'Windows Desktop' | 'Android App' | 'Web Application' | 'Website' | 'Cross-Platform' | 'Online Tool';
  status: 'Available' | 'In Development' | 'Coming Soon' | 'Custom Development';
  shortDesc: string;
  aboutSoftware: string;
  fullDesc: string;
  targetAudience: string;
  problemSolved: string;
  features: string[];
  techStack: string[];
  image: string;
  screenshots?: string[];
  liveWebsiteUrl?: string;
  downloadUrl?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'PDF' | 'Image' | 'Text' | 'Calculator' | 'Business' | 'Developer';
  description: string;
  status: 'Available' | 'Coming Soon';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  overview: string;
  deliverables: string[];
  useCases: string[];
  techUsed: string[];
  timeline: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceLabel: string;
  billingNote: string;
  highlighted?: boolean;
  badgeText?: string;
  description: string;
  features: string[];
  deliveryTimeline: string;
  ctaLabel: string;
  projectQueryValue: string;
}

export interface TechStackCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  technologies: {
    name: string;
    role: string;
  }[];
}

