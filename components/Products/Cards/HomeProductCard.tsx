"use client";

import { JSX } from "react";
import { useRouter } from "next/navigation";

interface ColorOption {
  color: string;
  image: string;
}

interface Product {
  id: number;
  category: string;
  productName: string;
  colors: ColorOption[];
  slug: string;
}

interface HomeProductCardProp {
  product: Product;
}

export default function HomeProductCard({ product }: HomeProductCardProp): JSX.Element {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/collections/${product.category.toLowerCase()}/${product.slug}`)
      }
      className="w-full shrink-0 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full aspect-square bg-[#f9f9f9] rounded-[16px] overflow-hidden">
        <img
          src={product.colors?.[0]?.image || "/fallback.png"}
          alt={product.productName}
          className="
            w-full h-full object-contain
            transition-transform duration-300 ease-out
            hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="px-2 md:px-3 py-2 md:py-3">
        <p className="text-[10px] md:text-xs text-[#606060]">
          {product.colors?.[0]?.color || "Default"}
        </p>

        <h3 className="text-sm md:text-lg lg:text-xl font-baskerville line-clamp-1">
          {product.productName}
        </h3>
      </div>
    </div>
  );
}