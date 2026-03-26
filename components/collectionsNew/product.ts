// types/product.ts
export interface Product {
  id: number;
  productName: string;
  category: string;
  diamondType?: string;
  newArrival: boolean;
  newCollection: boolean;
  recommended: boolean;
  sizes: string[];
  tags: string[];
  colors: { color: string; image: string }[];
  slug: string;
}

export const SORT_OPTIONS = [
  { label: "Recommended", value: "recommended" },
  { label: "New Arrival", value: "newArrival" },
  { label: "All", value: "default" },
] as const;

export const VARIETIES = [
  { label: "Round Brilliant", value: "roundBrilliant" },
  { label: "Cushion Cut", value: "cushionCut" },
  { label: "Emerald & Round Cut", value: "emeraldRoundCut" },
  { label: "Princess Cut", value: "princessCut" },
  { label: "Marquise Cut", value: "marquiseCut" },
  { label: "All", value: "all" },
] as const;

export type SortType = typeof SORT_OPTIONS[number]["value"];
export type VarietyType = typeof VARIETIES[number]["value"];