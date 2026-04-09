"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import RecommendedProductCard from '@/components/Products/Cards/RecommendedProductCard';
import productsData from '@/products_new.json';
import { Product } from '@/types/product';

interface YouMayAlsoLikeProps {
  product: Product;
}

export default function YouMayAlsoLike({ product }: YouMayAlsoLikeProps) {
  const router = useRouter();
  const recommendedRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productLimit, setProductLimit] = useState(12);

  useEffect(() => {
    const updateLimit = () => {
      setProductLimit(window.innerWidth < 640 ? 4 : 12);
    };
    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  useEffect(() => {
    const updateVisible = () => {
      setVisibleCount(window.innerWidth < 640 ? 2 : 4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [productLimit]);

  let recommendedProducts = productsData.filter(
    (p: any) => p.recommended && p.category === product.category && p.id !== product.id
  );
  if (recommendedProducts.length < 6) {
    const extra = productsData.filter(
      (p: any) => p.recommended && p.category !== product.category && p.id !== product.id
    );
    recommendedProducts = [...recommendedProducts, ...extra];
  }
  recommendedProducts = recommendedProducts.slice(0, productLimit);

  const maxIndex = Math.max(0, recommendedProducts.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + visibleCount, maxIndex));
  };

  const totalSteps = Math.ceil(recommendedProducts.length / visibleCount);
  const currentStep = Math.floor(currentIndex / visibleCount);
  const progressWidth = totalSteps <= 1 ? 100 : (currentStep / (totalSteps - 1)) * 100;

  return (
    <section
      ref={recommendedRef}
      data-theme="light"
      className="w-full md:pb-[0.51%] mt-2 p-4 md:mt-[2%]"
    >
      <h2 className="text-center font-[baskerville SC] font-normal md:font-medium tracking-tight text-2xl md:text-3xl border-t md:mb-4 border-gray-100 pt-6">
        You May Also Like
      </h2>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out md:gap-[2.81%]"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {recommendedProducts.map((item) => (
            <RecommendedProductCard
              key={item.id}
              product={item}
              onClick={(id) => {
                const p = recommendedProducts.find(x => x.id === id);
                if (!p) return;
                router.push(`/collections/${p.category.toLowerCase()}/${p.slug}`);
                window.scroll(0, 0);
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-10 md:mt-12 pb-10 md:pb-12">

        {/* Progress Line */}
        <div className="w-full h-[2px] bg-black/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-[3px] bg-[#7C3C3C] transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-lg bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EAEAEA] active:bg-[#7C3C3C] active:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="w-10 h-10 rounded-lg bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EAEAEA] active:bg-[#7C3C3C] active:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}