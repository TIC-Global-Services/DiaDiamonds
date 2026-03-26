// hooks/useProductFilter.ts
import { useState, useMemo } from "react";
import { Product, SortType, VarietyType } from "../product";
import productsData from "../../../products.json";

const PAGE_SIZE = 10;

export function useProductFilter(category: string) {
  console.log("category",category)
  const [sortBy, setSortBy] = useState<SortType>("default");
  const [solitaireVariety, setSolitaireVariety] = useState<VarietyType>("all");
  const [page, setPage] = useState(1);

const filteredProducts = useMemo(() => {
  const normalizedVariety = solitaireVariety.toLowerCase();

  const sorted = (productsData as Product[])
    .filter((p) => p.category === category)
    .filter((p) => {
      if (category !== "rings" || normalizedVariety === "all") return true;
      return p.diamondType?.toLowerCase() === normalizedVariety;
    })
    .sort((a, b) => {
      if (sortBy === "recommended") {
        return Number(b.recommended) - Number(a.recommended);
      }
      if (sortBy === "newArrival") {
        return Number(b.newArrival) - Number(a.newArrival);
      }
      return 0; // "default" — no reorder
    });

  return sorted;
}, [category, solitaireVariety, sortBy]);
  console.log("filteredProducts",filteredProducts)

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, page * PAGE_SIZE);
  }, [filteredProducts, page]);

  const hasMore = filteredProducts.length > page * PAGE_SIZE;

  return {
    sortBy, setSortBy,
    solitaireVariety, setSolitaireVariety,
    displayedProducts,
    hasMore,
    loadMore: () => setPage((p) => p + 1),
  };
}