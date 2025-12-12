export enum Tab {
  STRATEGY = 'STRATEGY',
  STORE_PREVIEW = 'STORE_PREVIEW',
  AI_MARKETING = 'AI_MARKETING',
  AI_STUDIO = 'AI_STUDIO',
  AI_VIDEO = 'AI_VIDEO'
}

export interface BrandSection {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const BRAND_COLORS = {
  primary: '#1A2E35', // Deep Teal/Charcoal
  secondary: '#D4AF37', // Gold
  accent: '#F4EBE8', // Soft Rose/Beige
  bg: '#FDFBF7' // Cream White
};