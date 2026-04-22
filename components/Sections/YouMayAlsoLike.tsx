"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import RecommendedProductCard from "@/components/Products/Cards/RecommendedProductCard";
import productsData from "@/products_new.json";
import { Product } from "@/types/product";

interface YouMayAlsoLikeProps {
  product: Product;
}

export default function YouMayAlsoLike({ product }: YouMayAlsoLikeProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter products
  let recommendedProducts = productsData.filter(
    (p: any) =>
      p.recommended &&
      p.category === product.category &&
      p.id !== product.id
  );

  if (recommendedProducts.length < 8) {
    const extra = productsData.filter(
      (p: any) =>
        p.recommended &&
        p.category !== product.category &&
        p.id !== product.id
    );
    recommendedProducts = [...recommendedProducts, ...extra];
  }

  recommendedProducts = recommendedProducts.slice(0, 8);

  // Responsive helpers
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const getStep = () => {
    if (typeof window === "undefined") return 1;
    return window.innerWidth >= 768 ? 2 : 1;
  };

  // Scroll logic
  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const item = container.children[0] as HTMLElement;
    if (!item) return;

    const gap = 16;
    const itemWidth = item.offsetWidth + gap;

    const itemsPerView = getItemsPerView();
    const step = getStep();

    let newIndex =
      dir === "left"
        ? currentIndex - step
        : currentIndex + step;

    newIndex = Math.max(0, newIndex);

    const maxIndex = recommendedProducts.length - itemsPerView;

    // last scroll
    if (newIndex >= maxIndex) {
      container.scrollTo({
        left: container.scrollWidth - container.clientWidth,
        behavior: "smooth",
      });

      setCurrentIndex(maxIndex);
      return;
    }

    container.scrollTo({
      left: newIndex * itemWidth,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  // Indicator
  const itemsPerView = getItemsPerView();

  const progress =
    recommendedProducts.length <= itemsPerView
      ? 0
      : Math.min(
          currentIndex / (recommendedProducts.length - itemsPerView),
          1
        );

  return (
    <section data-theme='light' className="w-full mt-4 px-4 md:mt-10">
      {/* Title */}
      <h2 className="text-center font-[baskerville SC] text-2xl md:text-3xl border-t border-gray-200 pt-6 mb-6">
        You May Also Like
      </h2>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        onWheel={(e) => e.preventDefault()}
        style={{ touchAction: "none" }}
        className="flex gap-4 px-1 pr-4 overflow-x-hidden scroll-smooth"
      >
        {recommendedProducts.map((item) => (
          <div
            key={item.id}
            className="
              flex-shrink-0
              w-[80%] 
              sm:w-[50%] 
              md:w-[33.33%] 
              lg:w-[25%]
            "
          >
            <RecommendedProductCard
              product={item}
              onClick={(id) => {
                const p = recommendedProducts.find((x) => x.id === id);
                if (!p) return;

                router.push(
                  `/collections/${p.category.toLowerCase()}/${p.slug}`
                );

                requestAnimationFrame(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                });
              }}
            />
          </div>
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-8 pb-10">

        {/* Indicator */}
        <div className="w-full h-[3px] bg-black/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#7C3C3C] transition-all duration-300"
            style={{
              width: `${Math.max(progress * 100, 20)}%`,
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-lg bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EAEAEA] active:bg-[#7C3C3C] active:text-white transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-lg bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EAEAEA] active:bg-[#7C3C3C] active:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}