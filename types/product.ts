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
  { label: "Round Brilliant", value: "round brilliant" },
  { label: "Cushion Cut", value: "cushion cut" },
  { label: "Emerald & Round Cut", value: "emerald round cut" },
  { label: "Princess Cut", value: "princess cut" },
  { label: "Marquise Cut", value: "marquise cut" },
] as const;

export type SortType = typeof SORT_OPTIONS[number]["value"] | "default";
export type VarietyType = typeof VARIETIES[number]["value"] | "default";