"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import productsData from '../../../products.json';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '@/components/Reusable/Breadcrumbs';
import Image from 'next/image';
import RecommendedProductCard from '../Cards/RecommendedProductCard';
import { Product } from '@/types/product';
import { LAYOUT_IMAGES } from '@/constants/LayoutImages';
import leftOnBack from '@/public/assets/img/leftOnBack.png'



interface ProductViewProps {
  product: Product;
  onBack: () => void;
  onProductClick: (id: number) => void;
}

export default function ProductView({ product, onBack }: ProductViewProps) {
  const router = useRouter();

  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [currentSize, setCurrentSize] = useState<string>('');
  const [scrollLevel, setScrollLevel] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const scrollPercentage: Record<number, string> = {
    0: "-translate-x-[0%] duration-200 delay-[70ms] ease",
    1: "-translate-x-[33%] duration-200 delay-[70ms] ease",
    2: "-translate-x-[66%] duration-200 delay-[70ms] ease",
    3: "-translate-x-[100%] duration-200 delay-[70ms] ease",
  };

  const scrollBarPosition: Record<number, string> = {
    0: "",
    1: "justify-start",
    2: "justify-center",
    3: "justify-end",
  };

  let recommendedProducts = productsData.filter(
    (p: any) => p.recommended && p.category === product.category && p.id !== product.id
  );

  if (recommendedProducts.length < 7) {
    const extra = productsData.filter(
      (p: any) => p.recommended && p.category !== product.category && p.id !== product.id
    );
    recommendedProducts = [...recommendedProducts, ...extra];
  }

  recommendedProducts = recommendedProducts.slice(0, 7);

  // Category-level layout images from constant
  const categoryLayout = LAYOUT_IMAGES[product.category.toLowerCase()];

  const categoryMap = categoryLayout
    ? {
      top: categoryLayout.top,
      left: categoryLayout.left,
      right: categoryLayout.right,
      bottom: categoryLayout.bottom,
    }
    : {};

  // Product-level layout images from products.json (per-product override)
  // const productMap = Array.isArray(product.layoutImages) && product.layoutImages.length > 0
  //   ? product.layoutImages.reduce((acc: any, img: any) => {
  //       if (img.position && img.image) acc[img.position] = img.image;
  //       return acc;
  //     }, {})
  //   : {};   //old func

  // Product images win over category images per position
  const layoutMap = categoryLayout
    ? {
      top: categoryLayout.top,
      left: categoryLayout.left,
      right: categoryLayout.right,
      bottom: categoryLayout.bottom,
    }
    : {};

  const topImage = layoutMap.top || null;
  const leftImage = layoutMap.left || null;
  const rightImage = layoutMap.right || null;
  const bottomImage = layoutMap.bottom || null;
  const layoutDescription = categoryLayout?.description ?? product.description ?? "";

  const hasLayoutImages = !!(topImage || leftImage || rightImage || bottomImage);

  return (
    <div data-theme='light' className="w-full bg-[#FFFFFF] overflow-hidden pt-[94px]">

      {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "HOME", href: "/" },
            { label: "COLLECTION", href: `/collections/${product.category.toLowerCase()}` },
            { label: product.category.toUpperCase(), href: `/collections/${product.category.toLowerCase()}` },
            { label: product.productName.toUpperCase() },
          ]}
        />

      {/* Item Display */}
      <section data-theme='light' className="w-full md:px-[6.67%] flex justify-between flex-col md:flex-row mt-[2%]">

        {/* Left Info & Options */}
        <div className="w-full md:w-[35%] px-[4.37%] md:px-0 md:ml-[5%] md:pb-[18.96%]">
          <h3 className="md:pt-[7.47%] text-xl md:text-2xl leading-[32px] tracking-tight uppercase text-[#000000] font-normal">
            {product.productName}
          </h3>
          <p className="md:pt-[3%] md:pb-[10%] font-baskerville text-[10px] md:text-xl leading-[1.2] tracking-tight text-[#000000]">
            {product.diamondType || ""}
          </p>

          {/* Mobile Image */}
          <div className="md:hidden w-[80%] aspect-square overflow-hidden mx-auto mb-[20px]">
            <Image
              width={400}
              height={400}
              src={product.colors[currentVariantIndex]?.image}
              alt={product.productName}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Color Variants */}
          <div className="flex gap-[6%] md:pb-[6%] mt-4 md:mt-0 flex-wrap overflow-x-auto px-4 md:px-0 border-b border-[#000000]/10">
            {product.colors?.map((colorObj: { color: string; image: string }, idx: number) => (
              <div
                key={idx}
                onClick={() => setCurrentVariantIndex(idx)}
                className="w-[60px] md:w-[22%] shrink-0 cursor-pointer flex flex-col justify-end items-center pb-2"
              >
                <div className="w-full aspect-[4/3] flex items-center justify-center p-1 mb-2">
                  <Image
                    width={100}
                    height={100}
                    src={colorObj.image}
                    alt={colorObj.color}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full border-t border-transparent relative">
                  <div className={`absolute top-[-1px] left-0 w-full h-[1px] ${currentVariantIndex === idx ? 'bg-black' : 'bg-transparent'}`} />
                  <h3 className="text-xs md:text-sm tracking-wide text-center text-[#000000] pt-2 capitalize">
                    {colorObj.color}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Size Options */}
          <div className="flex w-full py-[4.37%] md:py-[6%] gap-[4%] items-center px-4 md:px-0 mt-4 md:mt-0">
            <h3 className="text-sm leading-[20px] text-[#000000]/50 mr-2 md:mr-4">Size:</h3>
            {product.sizes?.length ? (
              product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setCurrentSize(size)}
                  className={`text-xs md:text-sm ${currentSize === size
                    ? 'text-black font-bold border border-black rounded-full px-2 py-[2px]'
                    : 'text-[#000000]/70'
                    } hover:text-black transition-colors`}
                >
                  {size}
                </button>
              ))
            ) : (
              <div className="flex gap-4 items-center cursor-pointer">
                <span className="text-xs md:text-sm font-bold text-black border border-black rounded-full px-2 py-[2px]">XS</span>
                <span className="text-xs md:text-sm text-[#000000]/70">S</span>
                <span className="text-xs md:text-sm text-[#000000]/70">M</span>
              </div>
            )}
          </div>

          <button onClick={() => router.push("/contact")} className="block w-[90%] md:w-[95%] mx-auto md:mx-0 mt-[8%] md:mt-[4%] py-[4.5%] bg-white border border-[#F0F0F0] rounded-[25px] font-bold text-[9px] leading-[16px] tracking-[1px] uppercase text-[#000000] cursor-pointer hover:bg-black hover:text-white transition-colors shadow-[0_4px_14px_0_rgba(0,0,0,0.03)]">
            CONTACT STORE
          </button>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex flex-col md:w-[50%] md:mr-[2%] items-center justify-center">
          <motion.img
            src={product.colors[currentVariantIndex]?.image}
            alt={product.productName}
            className="w-[85%] h-auto object-contain cursor-pointer"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </section>

      {/* Layout Images Section */}
      {hasLayoutImages && (
        <section data-theme = 'light' className="w-full px-[3.64%] md:px-0 md:pr-[4.5%] md:pl-[6.67%]">

          {/* Description + Bullet Points */}
          <div className="md:w-[50%] md:ml-auto md:pb-[9%]">
            <p className="md:pb-[6.44%] text-[12px] md:text-xl leading-[1.4] tracking-[-0.32px] text-[#000000]">
              {layoutDescription}
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-[11.05%] md:mb-0 gap-4 md:gap-2">
              <div className="flex items-center text-[12px] md:text-base leading-[28px] tracking-[-0.32px] text-[#000000]">
                <span className="mr-2">•</span>
                {product.colors[currentVariantIndex]?.color} with diamonds
              </div>
              <div className="flex items-center text-[12px] md:text-base leading-[28px] tracking-[-0.32px] text-[#000000]">
                <span className="mr-2">•</span>
                Finger size: {currentSize || 'Small'}
              </div>
              {product.diamondType && (
                <div className="flex items-center text-[12px] md:text-base leading-[28px] tracking-[-0.32px] text-[#000000]">
                  <span className="mr-2">•</span>
                  {product.diamondType}
                </div>
              )}
            </div>
          </div>

          {/* Top Image */}
          {topImage && (
            <div className="w-full md:w-[50%] aspect-[4/3] md:aspect-[800/600] md:ml-auto overflow-hidden mb-[1%] flex items-center justify-center">
              <Image
                src={topImage}
                alt="Product top"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Left + Right Images */}
          {(leftImage || rightImage) && (
            <div className="w-full flex flex-wrap md:flex-nowrap md:gap-[3%] md:mb-[1%] md:w-[50%] md:ml-auto justify-between">
              {leftImage && (
                <div className="w-full md:w-[56%] aspect-[3/4] md:aspect-[400/500] overflow-hidden mb-[1%] md:mb-auto flex items-center justify-center">
                  <Image
                    src={leftImage}
                    alt="Product left"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {rightImage && (
                <div className="w-full md:w-[41%] aspect-[3/4] md:aspect-[288/500] overflow-hidden mb-[1%] md:mb-auto flex items-center justify-center">
                  <Image
                    src={rightImage}
                    alt="Product right"
                    width={288}
                    height={500}
                    className="w-[80%] h-auto object-contain"
                  />
                </div>
              )}
            </div>
          )}

          {/* Bottom Image */}
          {bottomImage && (
            <div className="w-full md:w-[50%] md:ml-auto aspect-[4/3] md:aspect-[800/600] overflow-hidden mb-[2.63%] md:mb-[9.72%] flex items-center justify-center">
              <Image
                src={bottomImage}
                alt="Product bottom"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </section>
      )}

      {/* You May Also Like */}
      <section data-theme="light" className="w-full md:pb-[4.51%] mt-[10%]">
        <h2 className="text-center font-baskerville text-2xl md:text-3xl mb-8 border-t border-gray-100 pt-12">
          You May Also Like
        </h2>

        <div className="w-full md:w-[94.44%] mx-auto overflow-hidden">
          <div className={`flex md:gap-[5.81%] ${scrollPercentage[scrollLevel]}`}>

            {recommendedProducts.map((item) => (
              <RecommendedProductCard
                key={item.id}
                product={item}
                onClick={(id) => {
                  const p = recommendedProducts.find(x => x.id === id);
                  if (!p) return;

                  router.push(
                    `/collections/${p.category.toLowerCase()}/${p.slug}`
                  );
                  window.scroll(0, 0);
                }}
              />
            ))}

          </div>
        </div>

        {/* Scroll Controls */}
        <div className="w-[98%] mx-auto md:justify-center items-end pt-[60px] md:pt-4 relative gap-2 flex-wrap flex-col md:flex-nowrap flex">
          <div className="w-full border-b-[3px] border-[#000000]/20 relative shrink-0">
            <div className={`absolute -translate-y-1/4 w-full top-0 left-0 flex ${scrollBarPosition[scrollLevel]}`}>
              <div className="border-t-[5px] border-[#7C3C3C] md:w-[34%]" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => { if (scrollLevel !== 0) setScrollLevel(scrollLevel - 1); }}
              className="w-10 h-10 rounded-[10px] bg-[#F9F9F9] hover:cursor-pointer stroke-black active:stroke-white active:bg-[#7C3C3C] flex justify-center items-center"
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0502 7.07071L9.0857 12.106L14.121 17.0705" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => { if (scrollLevel !== 3) setScrollLevel(scrollLevel + 1); }}
              className="w-10 h-10 bg-[#F9F9F9] hover:cursor-pointer active:bg-[#7C3C3C] stroke-black active:stroke-white rounded-[10px] flex justify-center items-center"
            >
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.581227 10.4997L5.54053 5.45931L0.500164 0.500004" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}