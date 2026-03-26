"use client";


import React, { useState } from 'react';
import { useRouter } from "next/navigation";

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
  // sortTag: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  //const [isFavorite, setIsFavorite] = useState(false);

  const displayImage = product.colors[0]?.image || '';
  const displayColor = product.colors[0]?.color || '';

 const tagLabel = product.recommended ? "recommended" : product.newArrival ? "newArrival" : null;

  return (
    <div 
      onClick={() => {router.push(`/collections/${product.category.toLowerCase()}/${product.slug}`);;}} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}  
      className={`cursor-pointer flex flex-col justify-between items-center w-full aspect-[441/603] pt-4 pb-6 md:pt-[8%] md:pb-[10%] px-[2%] md:px-[4%] hover:border-0 hover:rounded-[10px] hover:bg-[#F7F6F4] hover:shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]`}
    >
      <div className="w-full flex items-center shrink-0">
        {tagLabel && (
          <div className={`hidden md:flex md:min-w-[25.85%] px-0 md:px-[2%] aspect-69/18 md:aspect-114/30 md:ml-[6.36%] bg-[#431A1A]/25 justify-center items-center rounded-[20px]`}>
            <h3 className="uppercase text-[10px] md:text-[12px]">{tagLabel}</h3>
          </div>
        )}

        <div className={`md:hidden flex justify-center items-center bg-[#431A1A]/25 rounded-[20px] px-[5.5px] py-[3px]`}>
          <h3 className="uppercase text-[8px] md:text-[10px]">
            {tagLabel}
          </h3>
        </div>
      </div>

      <div className="w-[80%] md:w-[82.5%] relative flex-1 min-h-0 flex justify-center items-center overflow-hidden my-4">
        <img className="max-w-full max-h-full object-contain" src={displayImage} alt={product.productName} />
      </div>

      <div className="w-full flex flex-col justify-end items-center gap-[4px] md:gap-[9px] shrink-0 px-2 mt-auto">
        <p className="text-[10px] md:text-sm text-[#6E6E6E] m-0">{displayColor}</p>
        <h3 className="w-full font-baskerville text-[13px] md:text-2xl text-center line-clamp-2">{product.productName}</h3>
        {product.diamondType && (
          <p className="font-baskerville text-xs md:text-base m-0">{product.diamondType}</p> 
        )}
      </div>
    </div>
  );
};

export default ProductCard;
