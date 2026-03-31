"use client";

import React, { useState, useRef, useEffect } from 'react';
import DropdownButton from '../../Reusable/DropdownButton';
import ProductCard from '../Cards/ProductCard';
import { Product, SORT_OPTIONS, SortType, VARIETIES, VarietyType } from '@/types/product';
import { ArrowDown } from 'lucide-react';
import { useProductFilter } from "@/hooks/useProductFilter";
import { motion } from 'framer-motion';

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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const {
    sortBy,
    setSortBy,
    solitaireVariety,
    setSolitaireVariety,
    displayedProducts,
    hasMore,
    loadMore,
  } = useProductFilter(products, category);

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
  }, [category]);


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
            showSelectedLabel={true}  //only show selected when not default
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
            showSelectedLabel={true}  //only show selected when chosen
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


      {/* MOBILE FILTER BUTTON */}
      <div className="flex md:hidden w-full py-[4%] px-[3%] m-3 justify-between items-center z-10">
        <button
          onClick={() => setIsMobileFilterOpen((p) => !p)}
          className="flex flex-col gap-[4px]"
        >
          <div className="w-6 h-[8px] bg-[#431A1A] rounded-xs"></div>
          <div className="w-6 h-[8px]  border border-black rounded-xs"></div>
        </button>


        {/* DROPDOWN */}
        {isMobileFilterOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[82%] left-5 w-[40%] bg-[#431A1A] rounded-b-[14px] overflow-hidden z-[999]"
          >

            {/* SORT BY */}
            <div className="px-4 pt-3 pb-2">
              <h3 className="text-[12px] uppercase text-white/50 tracking-[0.88px]">
                Sort By
              </h3>
            </div>

            {SORT_OPTIONS.map((opt, index) => (
              <div
                key={opt.value}
                onClick={() => setSortBy(opt.value as SortType)}
                className={`w-full py-[12px] text-center text-[16px] cursor-pointer
          ${sortBy === opt.value
                    ? "text-black bg-[#F7F6F4]"
                    : "text-black/40 bg-white border-t border-[#F5F5F5]"
                  }
        `}
              >
                {opt.label}
              </div>
            ))}

            {/* VARIETY */}
            {category === "rings" && (
              <>
                <div className="px-4 pt-4 pb-2">
                  <h3 className="text-[12px] uppercase text-white/50 tracking-[0.88px]">
                    Solitaire Variety
                  </h3>
                </div>

                {VARIETIES.map((opt, index) => (
                  <div
                    key={opt.value}
                    onClick={() => setSolitaireVariety(opt.value as VarietyType)}
                    className={`w-full py-[12px] text-center text-[16px] cursor-pointer
              ${solitaireVariety === opt.value
                        ? "text-black bg-[#F7F6F4]"
                        : "text-black/40 bg-white border-t border-[#F5F5F5]"
                      }
              ${index === VARIETIES.length - 1 ? "rounded-b-[14px]" : ""}
            `}
                  >
                    {opt.label}
                  </div>
                ))}
              </>
            )}
          </motion.div>
        )}
        {/* HEADING - Mobile */}
        <CategoryHeading category={category} />

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
      {
        hasMore && (
          <div className="w-full flex justify-center pb-20">
            <button
              onClick={loadMore}
              className="py-[14px] px-[8%] md:px-[3%] tracking-widest md:py-[1%] border rounded-full text-[10px] md:text-[13px] uppercase hover:bg-[#F7F6F4] transition
               border-white shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.4)]"
            >
              View More
            </button>
          </div>
        )
      }
    </section >
  );
};

const CategoryHeading: React.FC<{ category: string }> = ({ category }) => (
  <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
    <h3 className="text-sm md:text-[36px] uppercase">{category}</h3>
    <p className="hidden md:block text-xs md:text-[13px]">Scroll to discover</p>
    <ArrowDown className='w-4 md:w-5' />
  </div>
);

export default ProductList;