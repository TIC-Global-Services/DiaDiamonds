// Full corrected hook
import { useState, useMemo, useEffect } from "react";
import productsData from "../products.json";
import { Product, SortType, VarietyType } from "@/types/product";

const PAGE_SIZE = 12;

export function useProductFilter(category: string) {
  const [sortBy, setSortBy] = useState<SortType>("all");
  const [solitaireVariety, setSolitaireVariety] = useState<VarietyType>("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [category, sortBy, solitaireVariety]);

  const filteredProducts = useMemo(() => {
    let data = (productsData as Product[]).filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );

    // VARIETY FILTER
    if (category === "rings" && solitaireVariety !== "all") {
      const normalized = solitaireVariety.toLowerCase().replace(/\s/g, "");
      data = data.filter(
        (p) => p.diamondType?.toLowerCase().replace(/\s/g, "") === normalized,
      );
    }

    // SORTING
    if (sortBy === "recommended") {
      data = data.sort((a, b) => Number(b.recommended) - Number(a.recommended));
    } else if (sortBy === "newArrival") {
      data = data.sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
    } else {
      data = data.sort((a, b) => a.id - b.id);
    }

    return data;
  }, [category, solitaireVariety, sortBy]);


  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, page * PAGE_SIZE);
  }, [filteredProducts, page]);

  const hasMore = filteredProducts.length > page * PAGE_SIZE;

  return {
    sortBy,
    setSortBy,
    solitaireVariety,
    setSolitaireVariety,
    displayedProducts,
    hasMore,
    loadMore: () => setPage((p) => p + 1),
  };
}
