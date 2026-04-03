"use client";

import productsData from "@/products_new.json";
import { useState, useEffect } from "react";
import CollectionItem from "../Products/Cards/HomeProductCard";
import { useSwipeable } from "react-swipeable";
import { Product } from "@/types/product";
import Section from "@/components/layouts/Section";
import ContainerLayout from "@/components/layouts/Container";

export default function OurCollection() {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  // Responsive detection
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleItems(2);
      else if (window.innerWidth < 1024) setVisibleItems(3);
      else setVisibleItems(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  //  Group products
  const groupedProducts = (productsData as Product[]).reduce(
    (acc, product) => {
      if (!acc[product.category]) acc[product.category] = [];
      acc[product.category].push(product);
      return acc;
    },
    {} as Record<string, Product[]>
  );

  const collections = Object.values(groupedProducts)
    .flatMap((cat) => cat.slice(0, 2))
    .slice(0, 12);

  const totalItems = collections.length;

  // MAX INDEX (CRITICAL)
  const maxIndex = Math.max(totalItems - visibleItems, 0);

  // Swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setIndex((i) => Math.min(i + visibleItems, maxIndex));
    },
    onSwipedRight: () => {
      setIndex((i) => Math.max(i - visibleItems, 0));
    },
    trackMouse: false,
  });

  // Progress (fixed)
  const progress =
    maxIndex === 0 ? 1 : (index + visibleItems) / totalItems;

  return (
    <Section theme="light" className="bg-white">
      <ContainerLayout>
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-14 lg:mb-16">
          <h2 className="h2 text-black">Our Collections</h2>

          <p className="p text-black max-w-[600px]">
            Timeless rings for every moment, crafted to shine, made to last
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden -mx-1.5 md:-mx-3">
          <div
            {...handlers}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              width: `${(totalItems / visibleItems) * 100}%`,
              transform: `translateX(-${(index / totalItems) * 100}%)`,
            }}
          >
            {collections.map((product, id) => (
              <div
                key={product.id || id}
                className="px-1.5 md:px-3"
                style={{ width: `${100 / totalItems}%` }}
              >
                <CollectionItem product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-10 md:mt-12">
          
          {/* ✅ Progress Line */}
          <div className="w-full h-[2px] bg-black/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-[3px] bg-[#7C3C3C] transition-all duration-300"
              style={{
                width: `${progress * 100}%`,
              }}
            />
          </div>

          {/* ✅ Arrow Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Prev */}
            <button
              onClick={() =>
                setIndex((i) => Math.max(i - visibleItems, 0))
              }
              disabled={index === 0}
              className="
                w-10 h-10 rounded-lg 
                bg-[#F5F5F5] 
                flex items-center justify-center 
                hover:bg-[#EAEAEA] 
                active:bg-[#7C3C3C] active:text-white 
                disabled:opacity-40 disabled:cursor-not-allowed
                transition
              "
            >
              ←
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setIndex((i) => Math.min(i + visibleItems, maxIndex))
              }
              disabled={index >= maxIndex}
              className="
                w-10 h-10 rounded-lg 
                bg-[#F5F5F5] 
                flex items-center justify-center 
                hover:bg-[#EAEAEA] 
                active:bg-[#7C3C3C] active:text-white 
                disabled:opacity-40 disabled:cursor-not-allowed
                transition
              "
            >
              →
            </button>
          </div>
        </div>
      </ContainerLayout>
    </Section>
  );
}