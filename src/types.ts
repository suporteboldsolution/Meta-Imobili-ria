export interface InstagramPost {
  id: string;
  type: 'image' | 'video' | 'carousel';
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  category: 'Investimento' | 'Litoral' | 'Arquitetura' | 'Lançamento' | 'Atendimento' | 'Feira de Santana';
  permalink?: string;
}

export interface NeighborhoodInfo {
  id: string;
  name: string;
  city: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  avgAppreciation: string;
  vibe: string;
  priceRange?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  highlights?: string[];
  ctaText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  location: string;
  avatar: string;
}

export interface ValuationData {
  ownerName: string;
  phone: string;
  email: string;
  propertyType: string;
  cityNeighborhood: string;
  estimatedBedrooms: string;
  hasOceanView: boolean;
  notes: string;
}

export interface InvestmentSimulation {
  initialInvestment: number;
  years: number;
  estimatedAnnualAppreciation: number;
  rentalMonthlyReturnRate: number;
  includeShortTermRental: boolean;
}
