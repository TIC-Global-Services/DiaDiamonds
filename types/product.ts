import { isExternal } from 'util/types';
export interface ColorOption {
  color: string;
  image: string;
}


export interface ProductColor {
  color: string;
  image: string;
}

export interface ProductLayoutImage {
  position: string;
  image: string;
}

export interface Product {
  id: number;
  category: string;
  productName: string;
  description: string;

  newArrival: boolean;
  newCollection: boolean;
  recommended: boolean;

  sizes: string[];
  tags: string[];
  colors: ProductColor[];

  layoutImages?: ProductLayoutImage[];

  slug: string;
  diamondType?: string;
}
export interface GroupedProducts {
  [category: string]: Product[];
}

export const SORT_OPTIONS = [
  { label: "Recommended", value: "recommended" },
  { label: "New Arrival", value: "newArrival" },
  { label: "All", value: "all" },
] as const;

export const VARIETIES = [
  { label: "All", value: "all" },
  { label: "Round Brilliant", value: "round brilliant" },
  { label: "Cushion Cut", value: "cushion cut" },
  { label: "Emerald & Round Cut", value: "emerald round cut" },
  { label: "Princess Cut", value: "princess cut" },
  { label: "Marquise Cut", value: "marquise cut" },
] as const;

export const COLLECTION_CATEGORIES = [
  { label: "Rings", value: "rings" },
  { label: "Earrings", value: "earrings" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Bracelets", value: "bracelets" },
  { label: "Pendants", value: "pendants" },
] as const;

export type CollectionCategory = typeof COLLECTION_CATEGORIES[number]["value"];

export type SortType = typeof SORT_OPTIONS[number]["value"];
export type VarietyType = typeof VARIETIES[number]["value"];