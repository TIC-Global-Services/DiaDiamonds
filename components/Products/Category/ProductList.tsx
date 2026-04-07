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
  defaultSort?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  category,
  defaultSort,
  onProductClick
}) => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const {
    sortBy,
    setSortBy,
    solitaireVariety,
    setSolitaireVariety,
    displayedProducts,
    hasMore,
    loadMore,
  } = useProductFilter(products, category, defaultSort);


  const leftDropdownRef = useRef<HTMLDivElement>(null);
  const rightDropdownRef = useRef<HTMLDivElement>(null);

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (drawerRef.current && drawerRef.current.contains(target)) return;

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
  }, []);


  console.log(sortBy, solitaireVariety);


  return (
    <section data-theme='light' className="w-full">

      {/* FILTER BAR */}
      <div className="hidden md:flex relative w-full py-[4%] px-[2%] justify-between items-start z-10">

        {/* SORT */}
        <div ref={leftDropdownRef}>
          <DropdownButton
            label="Sort By"
            options={SORT_OPTIONS}
            selected={sortBy}
            isOpen={isLeftOpen}
            showSelectedLabel={sortBy !== "all"}   //only show selected when not default
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
            showSelectedLabel={solitaireVariety !== "all"}  //only show selected when chosen
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




      {/* MOBILE FILTER */}
      <div className="md:hidden w-full px-[3%] mt-10">

        {/* Heading FIRST */}
        <CategoryHeading category={category} />

        {/* Pill BELOW */}
        <div className="flex items-center border border-[#E5E5E5] rounded-full overflow-hidden bg-[#F8F6F3] mt-4">
          <button
            onClick={() => setIsLeftOpen(true)}
            className={`py-3 text-[12px] tracking-wide ${category === "rings" ? "w-1/2" : "w-full"}`}
          >
            SORT BY
          </button>

          {category === "rings" && (
            <>
              <div className="w-[1px] h-6 bg-[#E5E5E5]" />
              <button
                onClick={() => setIsRightOpen(true)}
                className="w-1/2 py-3 text-[12px] tracking-wide"
              >
                SOLITAIRE VARIETY
              </button>
            </>
          )}
        </div>

        {/* DRAWER OVERLAY */}
        {(isLeftOpen || isRightOpen) && (
          <div
            onClick={() => {
              setIsLeftOpen(false);
              setIsRightOpen(false);
            }}
            className="fixed inset-0 bg-black/30 z-[9998]"
          />
        )}

        {/* DRAWER */}
        <div
          ref={drawerRef}
          className={`fixed inset-0 w-full h-full bg-white z-[9999]
    transform transition-transform duration-300 ease-in-out
    ${isLeftOpen || isRightOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E5E5]">
            <h2 className="text-[13px] tracking-wide">
              {isLeftOpen ? "SORT BY" : "SOLITAIRE VARIETY"}
            </h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLeftOpen(false);
                setIsRightOpen(false);
              }}
              className="text-lg"
            >
              X
            </button>
          </div>

          {/* OPTIONS */}
          <div className="p-5 space-y-5">

            {/* SORT */}
            {isLeftOpen &&
              SORT_OPTIONS.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => {
                    setSortBy(opt.value as SortType);
                    setIsLeftOpen(false);
                  }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center
              ${sortBy === opt.value ? "border-[#431A1A]" : "border-gray-400"}`}
                  >
                    {sortBy === opt.value && (
                      <div className="w-2 h-2 bg-[#431A1A] rounded-full" />
                    )}
                  </div>
                  <span className="text-[12px] tracking-wide uppercase">
                    {opt.label}
                  </span>
                </div>
              ))}

            {/* VARIETY */}
            {isRightOpen &&
              category === "rings" &&
              VARIETIES.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => {
                    setSolitaireVariety(opt.value as VarietyType);
                    setIsRightOpen(false);
                  }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center
              ${solitaireVariety === opt.value ? "border-[#431A1A]" : "border-gray-400"}`}
                  >
                    {solitaireVariety === opt.value && (
                      <div className="w-2 h-2 bg-[#431A1A] rounded-full" />
                    )}
                  </div>
                  <span className="text-[12px] tracking-wide uppercase">
                    {opt.label}
                  </span>
                </div>
              ))}
          </div>
        </div>

      </div>

      {/* PRODUCT GRID */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-2 md:gap-y-12 mt-7 pb-10 px-3">
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
          <div className="w-full flex justify-center pb-5 items-center md:items-center">
            <button
              onClick={loadMore}
              className="py-[12px] px-[8%] md:px-[3%] tracking-widest md:py-[1%] border rounded-2xl text-[10px] md:text-[13px] uppercase transition
               border-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"
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
  <div className="flex flex-col items-center mt-5 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2">
    <h3 className="text-[16px] md:text-[38px] uppercase">{category}</h3>
    <p className="hidden md:block text-xs md:text-[13px]">Scroll to discover</p>
    <ArrowDown className='w-3 md:w-5' />
  </div>
);

export default ProductList;