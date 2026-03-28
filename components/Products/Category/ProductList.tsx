"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import DropdownButton from '../../Reusable/DropdownButton';
import ProductCard from '../Cards/ProductCard';
import { Product, SORT_OPTIONS, SortType, VARIETIES, VarietyType } from '@/types/product';

interface ProductListProps {
  products: Product[];
  category: string;
  onProductClick: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  category,
  onProductClick
}) => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const [sortBy, setSortBy] = useState<SortType>("default");
  const [solitaireVariety, setSolitaireVariety] = useState<VarietyType>("default");

  const [visibleCount, setVisibleCount] = useState(6);

  const leftDropdownRef = useRef<HTMLDivElement>(null);
  const rightDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (leftDropdownRef.current && !leftDropdownRef.current.contains(target)) {
        setIsLeftOpen(false);
      }
      if (rightDropdownRef.current && !rightDropdownRef.current.contains(target)) {
        setIsRightOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset when category changes
  useEffect(() => {
    setIsLeftOpen(false);
    setIsRightOpen(false);
    setVisibleCount(6);
  }, [category]);

  // FILTER + SORT LOGIC
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by variety (only for rings)
    if (category.toLowerCase() === "rings" && solitaireVariety !== "default") {
      result = result.filter((p) =>
        p.diamondType?.toLowerCase() === solitaireVariety.toLowerCase()
      );
    }

    // Sorting
    switch (sortBy) {
      case "newArrival":
        result = result.filter(p => p.newArrival);
        break;
      case "recommended":
        result = result.filter(p => p.recommended);
        break;
      default:
        break;
    }

    return result;
  }, [products, sortBy, solitaireVariety, category]);
  console.log("category:", category);
  console.log("solitaireVariety:", solitaireVariety);
  console.log("sample tags:", products[0]?.tags);

  // Pagination
  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = () => setVisibleCount(prev => prev + 6);

  return (
    <section data-theme='light' className="w-full">

      {/* FILTER BAR */}
      <div className="hidden md:flex relative w-full py-[5%] px-[3%] justify-between items-start z-10">

        {/* SORT */}
        <div ref={leftDropdownRef}>
          <DropdownButton
            label="Sort By"
            options={SORT_OPTIONS}
            selected={sortBy}
            isOpen={isLeftOpen}
            showSelectedLabel={sortBy !== "default"}   //only show selected when not default
            onToggle={() => {
              setIsLeftOpen(p => !p);
              setIsRightOpen(false);
            }}
            onSelect={(v) => {
              setSortBy(v as SortType);
              setIsLeftOpen(false);
            }}
          />
        </div>

        {/* HEADING */}
        <CategoryHeading category={category} />

        {/* VARIETY */}
        <div
          ref={rightDropdownRef}
          className={category !== "rings" ? "opacity-0 pointer-events-none" : ""}
        >
          <DropdownButton
            label="Solitaire Variety"
            width="w-[226px]"
            options={VARIETIES}
            selected={solitaireVariety}
            isOpen={isRightOpen}
            showSelectedLabel={solitaireVariety !== "default"}  //only show selected when chosen
            onToggle={() => {
              setIsRightOpen(p => !p);
              setIsLeftOpen(false);
            }}
            onSelect={(v) => {
              setSolitaireVariety(v as VarietyType);
              setIsRightOpen(false);
            }}
          />
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 pb-10 px-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </div>

      {/* LOAD MORE */}
      {hasMore && (
        <div className="w-full flex justify-center pb-20">
          <button
            onClick={loadMore}
            className="py-[14px] px-[8%] md:px-[3%] md:py-[1%] border rounded-full text-[10px] md:text-[13px] uppercase hover:bg-[#F7F6F4] transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

const CategoryHeading: React.FC<{ category: string }> = ({ category }) => (
  <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
    <h3 className="text-[36px] uppercase">{category}</h3>
    <p className="text-[13px]">Scroll to discover</p>
  </div>
);

export default ProductList;