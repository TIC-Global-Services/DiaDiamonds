"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";

interface RecommendedProductCardProps {
  product: Product;
  onClick: (id: number) => void;
}

const RecommendedProductCard: React.FC<RecommendedProductCardProps> = ({
  product,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(product.id)}
      className="w-full md:w-[24.19%] shrink-0 group hover:border cursor-pointer"
    >
      {/* Image */}
      <div className="md:w-full aspect-square overflow-hidden md:mb-[12.77%]  flex items-center justify-center p-4">
        <Image
          width={300}
          height={300}
          src={product.colors[0]?.image}
          alt={product.productName}
          className="w-[80%] h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Name */}
      <p className="text-center font-normal font-[baskerville, sans] tracking-tight text-[14px] md:text-[18px] mt-[2%] md:mt-[4%]">
        {product.productName}
      </p>
    </div>
  );
};

export default RecommendedProductCard;