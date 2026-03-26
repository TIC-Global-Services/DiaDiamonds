export interface ColorOption {
  color: string;
  image: string;
}

export interface LayoutImage {
  position: string;
  image: string;
}

export interface Product {
  id: number;
  category: string;
  productName: string;
  diamondType?: string;
  description: string;
  newArrival: boolean;
  newCollection: boolean;
  recommended: boolean;
  sizes: string[];
  tags: string[];
  colors: ColorOption[];
  layoutImages: LayoutImage[];
  slug: string;
}

export interface GroupedProducts {
  [category: string]: Product[];
}