"use client";

import React, { useState } from 'react';
import DropdownButton from '../Reusable/DropdownButton';
import { SORT_OPTIONS, VARIETIES } from "../collectionsNew/product";
import ProductCard from '../collectionsNew/ProductCard';
import { useProductFilter } from '../collectionsNew/hooks/useProductFilter';

interface Product {
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

interface ProductListProps {
  category?: string;
  onProductClick: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ category = "rings", onProductClick }) => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const {
    sortBy, setSortBy,
    solitaireVariety, setSolitaireVariety,
    displayedProducts,
    hasMore, loadMore,
  } = useProductFilter(category);

  return (
    <section className="w-full">
      {/* Desktop Controls */}
      <div className="hidden md:flex relative w-full py-[5%] px-[3%] justify-between items-start z-10">
        <DropdownButton
          label="Sort By"
          options={SORT_OPTIONS}
          selected={sortBy}
          isOpen={isLeftOpen}
          onToggle={() => setIsLeftOpen((p) => !p)}
          onSelect={(v:any) => { setSortBy(v as typeof sortBy); setIsLeftOpen(false); }}
        />

        <CategoryHeading category={category} />

        <div className={category !== "rings" ? "opacity-0 pointer-events-none" : ""}>
          <DropdownButton
            label="Solitaire Variety"
            options={VARIETIES}
            selected={solitaireVariety}
            isOpen={isRightOpen}
            onToggle={() => setIsRightOpen((p) => !p)}
            onSelect={(v:any) => { setSolitaireVariety(v as typeof solitaireVariety); setIsRightOpen(false); }}
            animationDelay={0.2}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 pb-10">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="w-full flex justify-center pb-20">
          <button
            onClick={loadMore}
            className="py-[14px] px-[8%] md:px-[3%] md:py-[1%] border-[0.5px] border-[#E5E5E5] rounded-full text-[10px] md:text-[13px] leading-[16px] tracking-[0.88px] uppercase text-black hover:bg-[#F7F6F4] transition-colors duration-300"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

// Isolated so it can be reused on mobile too
const CategoryHeading: React.FC<{ category: string }> = ({ category }) => (
  <div className="flex flex-col justify-center items-center gap-[14px] absolute left-1/2 -translate-x-1/2">
    <h3 className="font-medium text-[36px] leading-[16px] tracking-[0.88px] uppercase text-black pb-[1.03%]">
      {category}
    </h3>
    <p className="font-normal text-[13px] leading-[16px] tracking-[-0.24px] text-black">
      Scroll to discover
    </p>
  </div>
);

export default ProductList;