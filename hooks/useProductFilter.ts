import { useState, useMemo, useEffect } from "react";
import { Product, SortType, VarietyType } from "@/types/product";

const PAGE_SIZE = 6;

export function useProductFilter(products: Product[], category: string) {
  const [sortBy, setSortBy] = useState<SortType>("all");
  const [solitaireVariety, setSolitaireVariety] = useState<VarietyType>("all");

  //use visibleCount instead of page
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    // reset when filters/category change
    setVisibleCount(PAGE_SIZE);
  }, [category, sortBy, solitaireVariety]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // VARIETY FILTER
    if (category.toLowerCase() === "rings" && solitaireVariety !== "all") {
      result = result.filter(
        (p) =>
          p.diamondType?.toLowerCase().replace(/\s/g, "") ===
          solitaireVariety.toLowerCase().replace(/\s/g, ""),
      );
    }

    // SORTING (filter type)
    switch (sortBy) {
      case "newArrival":
        result = result.filter((p) => p.newArrival);
        break;
      case "recommended":
        result = result.filter((p) => p.recommended);
        break;
      default:
        break;
    }

    return result;
  }, [products, sortBy, solitaireVariety, category]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const hasMore = visibleCount < filteredProducts.length;

  return {
    sortBy,
    setSortBy,
    solitaireVariety,
    setSolitaireVariety,
    displayedProducts,
    hasMore,
    loadMore: () => setVisibleCount((prev) => prev + PAGE_SIZE),
  };
}
