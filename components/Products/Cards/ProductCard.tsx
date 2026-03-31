"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: number;
    productName: string;
    category: string;
    diamondType?: string;
    newArrival: boolean;
    newCollection: boolean;
    recommended: boolean;
    colors: { color: string; image: string }[];
    slug: string;
    tags: string[];
  };
  onClick: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const displayImage = product.colors[0]?.image || '';
  const displayColor = product.colors[0]?.color || '';

  const tagLabel = product.recommended
    ? "Recommended"
    : product.newArrival
      ? "New Arrival"
      : null;

  return (
    <div
      onClick={() => {
        router.push(`/collections/${product.category.toLowerCase()}/${product.slug}`);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      className={`cursor-pointer flex flex-col justify-between items-center 
        hover:bg-[rgba(247, 246, 244, 1)] w-full aspect-[441/603] 
        pt-8 pb-6 md:pt-[8%] md:pb-[10%] md:px-[4%] 
        rounded-[10px] transition-all duration-200
        ${isHovered || isActive
          ? 'border-0 bg-[#F7F6F4] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]'
          : ''
        }`}
    >
      {/* Tag */}
      <div className="w-[100%] flex items-center shrink-0">
        {tagLabel && (
          <div className="flex w-[70%] md:w-[50%] px-[3%] py-[2%] md:px-[2%] md:py-2 bg-[#431A1A]/25 justify-center items-center rounded-[20px]">
            <span className="text-xs md:text-xl text-black">{tagLabel}</span>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="w-[100%] md:w-[80%] relative flex justify-center gap-2 items-center overflow-hidden my-4 flex-grow">
        <Image
          width={200}
          height={200}
          className="w-full h-full object-contain"
          src={displayImage}
          alt={product.productName}
        />
      </div>

      {/* Content */}
      <div className="w-full flex flex-col justify-end items-center gap-1 md:gap-2 shrink-0 px-2 mt-auto">
        <p className="text-base text-[13px] font-light text-[#6E6E6E] m-0">
          {displayColor}
        </p>
        <h4 className="w-full font-baskerville text-center line-clamp-2">
          {product.productName}
        </h4>
        {product.diamondType && (
          <p className="font-baskerville text-small m-0">
            {product.diamondType}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;