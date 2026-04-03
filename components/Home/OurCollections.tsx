"use client";

import productsData from "@/products_new.json";
import { useState } from "react";
import CollectionItem from "../Products/Cards/HomeProductCard";
import { useSwipeable } from "react-swipeable";
import { Product } from "@/types/product";
import Section from "@/components/layouts/Section";
import ContainerLayout from "@/components/layouts/Container";

export default function OurCollection() {
  const [desktopPage, setDesktopPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

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
  const ITEMS_PER_DESKTOP_PAGE = 4;
  const totalDesktopPages = Math.ceil(totalItems / ITEMS_PER_DESKTOP_PAGE);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setMobileIndex((i) => Math.min(i + 1, totalItems - 1));
    },
    onSwipedRight: () => {
      setMobileIndex((i) => Math.max(i - 1, 0));
    },
    trackMouse: false,
  });

  const desktopProgress = (desktopPage + 1) / totalDesktopPages;
  const mobileProgress = totalItems > 1 ? mobileIndex / (totalItems - 1) : 0;

  return (
    <Section className="bg-white" data-theme='light'>
      <ContainerLayout>

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-14 lg:mb-16">
          <h2 className="h2 text-black">
            Our Collections
          </h2>

          <p className="p text-black max-w-[600px]">
            Timeless rings for every moment, crafted to shine, made to last
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            {...handlers}
            className="flex gap-4 md:gap-6 transition-transform duration-300 ease-in-out"
            style={{
              transform:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? `translateX(calc(-${mobileIndex} * (85vw)))`
                  : `translateX(calc(-${desktopPage} * (100% + 24px)))`,
            }}
          >
            {collections.map((product, id) => (
              <CollectionItem key={product.id || id} product={product} />
            ))}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-10 md:mt-12">

          {/* Progress Bar */}
          <div className="w-full h-[2px] bg-black/20 relative">
            <div
              className="absolute top-0 left-0 h-[3px] bg-[#7C3C3C] transition-all duration-300"
              style={{
                width: `${
                  (typeof window !== "undefined" && window.innerWidth < 768
                    ? mobileProgress
                    : desktopProgress) * 100
                }%`,
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768) {
                  setMobileIndex((i) => Math.max(i - 1, 0));
                } else {
                  setDesktopPage((p) => Math.max(p - 1, 0));
                }
              }}
              className="w-10 h-10 rounded-lg bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EAEAEA] active:bg-[#7C3C3C] active:stroke-white transition"
            >
              <svg width="20" height="20" viewBox="0 0 25 25 " fill="none">
                <path
                  d="M14.0502 7.07071L9.0857 12.106L14.121 17.0705"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768) {
                  setMobileIndex((i) => Math.min(i + 1, totalItems - 1));
                } else {
                  setDesktopPage((p) =>
                    Math.min(p + 1, totalDesktopPages - 1)
                  );
                }
              }}
              className="w-10 h-10 rounded-lg bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EAEAEA] active:bg-[#7C3C3C] active:stroke-white transition"
            >
              <svg width="20" height="20" viewBox="0 0 7 11" fill="none">
                <path
                  d="M0.581227 10.4997L5.54053 5.45931L0.500164 0.500004"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

      </ContainerLayout>
    </Section>
  );
}