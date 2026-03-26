"use client";

import { useRouter } from "next/navigation";
import { generateSlug } from '@/utils/slug';
import React from 'react';
import ProductList from '@/components/CollectionsNew/productList';
import TheArtOfCrafting from '../TheArtOfCrafting';
import Image from "next/image";
import Breadcrumbs from "@/components/Reusable/Breadcrumbs";
import ring from '@/public/assets/img/Collections/type/ring.png'
import Earrings from '@/public/assets/img/Collections/type/earring.png'
import bracelets from '@/public/assets/img/Collections/type/bracelet.png'
import necklaces from '@/public/assets/img/Collections/type/necklace.png'
import pendants from '@/public/assets/img/Collections/type/pendant.png'

import productsData from '@/products.json';

interface CollectionsClientProps {
  category: string;
}

const TheArtOfCraftingContent: Record<string, { bgImage: string; text: string }> = {
  rings: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Sparkle Tells a Story, Moments Shine Brighter Together',
  },
  earrings: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Stories That Dangle, Sparkles That Stay',
  },
  bracelets: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Sparkle Whispers a Story, Elegance Shines with Every Turn',
  },
  necklaces: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Glimmer Speaks, and Every Moment Shines Brighter',
  },
  pendants: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Drop of Light Tells Your Story',
  },
};

const categoryMenu = [
  {
    title: "Rings",
    slug: "rings",
    image: ring
  },
  {
    title: "Earrings",
    slug: "earrings",
    image: Earrings
  },
  {
    title: "Bracelets",
    slug: "bracelets",
    image: bracelets
  },
  {
    title: "Necklaces",
    slug: "necklaces",
    image: necklaces
  },
  {
    title: "Pendants",
    slug: "pendants",
    image: pendants
  },
]

export default function CollectionsClient({ category }: CollectionsClientProps) {
  const router = useRouter();

  const handleProductClick = (id: number) => {
    const product = productsData.find((p: any) => p.id === id);
    if (!product) return;

    const slug = generateSlug(product.productName);
    router.push(`/collections/${product.category.toLowerCase()}/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white pt-[8%]">

      {/* BREADCRUMBS */}
      <Breadcrumbs
        className="mt-4"
        items={[
          { label: "HOME", href: "/" },
          { label: "COLLECTION", href: "/collections" },
          { label: category.toUpperCase() },
        ]}
      />

      {/* CATEGORY MENU */}
      <section className="w-full  mx-auto pt-8">
        <div className="flex items-center justify-center gap-3 md:gap-6 px-4 md:px-8 overflow-x-auto scrollbar-hide ">
          {categoryMenu.map((cat, idx) => {
            const isActive = category === cat.slug;
            return (
              <div
                key={idx}
                onClick={() => router.push(`/collections/${cat.slug}`)}
                className={`
                  relative group cursor-pointer flex-shrink-0
                  transition-all duration-300 ease-out 
                `}
              >
                <div className={`
                  relative overflow-hidden rounded-xl md:rounded-sm
                  md:w-[18vw]  my-2
                  transition-all duration-300
                  ${isActive
                    ? 'ring-2 ring-[#431A1A4D] ring-offset-1 shadow-lg'
                    : ' hover:ring-[#431A1A4D]/30 '
                  }
                `}>
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden ">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className={`
                        object-cover transition-transform duration-500
                        ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                      `}
                    />
                    {/* Overlay gradient */}
                    {/* <div className={`
                      absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                      transition-opacity duration-300
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}
                    `} /> */}
                  </div>

                 
                </div>

                {/* Title below card - visible when not active */}
                <p className={`
                  text-center mt-2 md:mt-3 text-xs md:text-sm font-bold tracking-wider uppercase
                  transition-all duration-300
                  ${isActive
                    ? 'text-[#431A1A] underline'
                    : 'group-hover:text-[#431A1A]'
                  }
                `}>
                  {cat.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MAIN */}
      <main className="">
        <ProductList
          category={category}
          onProductClick={handleProductClick}
        />
      </main>

      {/* BOTTOM */}
      {TheArtOfCraftingContent[category] && (
        <TheArtOfCrafting
          img={TheArtOfCraftingContent[category].bgImage}
          text={TheArtOfCraftingContent[category].text}
        />
      )}
    </div>
  );
}