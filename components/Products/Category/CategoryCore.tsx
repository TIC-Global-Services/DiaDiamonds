"use client";

import { useRouter } from "next/navigation";
import TheArtOfCrafting from './TheArtOfCrafting';
import Image from "next/image";
import Breadcrumbs from "@/components/Reusable/Breadcrumbs";

import ring from '@/public/assets/img/Collections/type/ring.png';
import Earrings from '@/public/assets/img/Collections/type/earring.png';
import bracelets from '@/public/assets/img/Collections/type/bracelet.png';
import necklaces from '@/public/assets/img/Collections/type/necklace.png';
import pendants from '@/public/assets/img/Collections/type/pendant.png';
import ProductList from "./ProductList";
import { Product } from "@/types/product";

interface CategoryCoreProps {
  category: string;
  productLists: Product[];
}

const TheArtOfCraftingContent: Record<string, { bgImage: string; text: string; }> = {
  rings: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage1.png',
    text: 'Where Every Sparkle Tells a Story, Moments Shine Brighter Together',
  },
  earrings: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage2.png',
    text: 'Stories That Dangle, Sparkles That Stay',
  },
  bracelets: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage3.png',
    text: 'Where Every Sparkle Whispers a Story, Elegance Shines with Every Turn',
  },
  necklaces: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage4.png',
    text: 'Where Every Glimmer Speaks, and Every Moment Shines Brighter',
  },
  pendants: {
    bgImage: '/assets/img/Collections/TheArtOfCrafting/bgImage5.png',
    text: 'Where Every Drop of Light Tells Your Story',
  },
};

const categoryMenu = [
  { title: "Rings", slug: "rings", image: ring },
  { title: "Earrings", slug: "earrings", image: Earrings },
  { title: "Bracelets", slug: "bracelets", image: bracelets },
  { title: "Necklaces", slug: "necklaces", image: necklaces },
  { title: "Pendants", slug: "pendants", image: pendants },
];

export default function CategoryCore({ category, productLists }: CategoryCoreProps) {
  const router = useRouter();

  const handleProductClick = (id: number) => {
    const product = productLists.find((p) => p.id === id);
    if (!product) return;

    router.push(
      `/collections/${product.category.toLowerCase()}/${product.slug}`
    );
  };

  return (
    <div data-theme='light' className="min-h-screen bg-white pt-[8%]">

      {/* BREADCRUMBS */}
        <Breadcrumbs
          className="mt-14 md:mt-0"
          items={[
            { label: "HOME", href: "/" },
            { label: "COLLECTION", href: "/collections" },
            { label: category.toUpperCase() },
          ]}
        />

      {/* CATEGORY MENU */}
      <section className="w-full mx-auto pt-8">
        <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-4 md:gap-4 px-2 md:px-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-2">
          {categoryMenu.map((cat, idx) => {
            const isActive = category === cat.slug;

            return (
              <div
                key={idx}
                onClick={() => router.push(`/collections/${cat.slug}`)}
                className="relative group cursor-pointer flex-shrink-0 snap-start w-[32vw] sm:w-[22vw] md:w-[18vw]"
              >
                <div className={`relative overflow-hidden my-2
                  ${isActive ? 'ring-1 ring-[#431A1A4D] shadow-lg' : ''}
                `}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className={`${isActive ? 'scale-110' : 'group-hover:scale-105'} transition-transform`}
                    />
                  </div>
                </div>

                <p className={`text-center mt-2 text-caption font-semibold uppercase
                  ${isActive ? 'text-[#431A1A] underline' : ''}
                `}>
                  {cat.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCT LIST */}
      <main>
        <ProductList
          products={productLists}
          category={category}
          onProductClick={handleProductClick}
        />
      </main>

      {/* BOTTOM SECTION */}
      {TheArtOfCraftingContent[category] && (
        <TheArtOfCrafting
          img={TheArtOfCraftingContent[category].bgImage}
          text={TheArtOfCraftingContent[category].text}
        />
      )}
    </div>
  );
}