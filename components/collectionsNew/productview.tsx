"use client";

import { generateSlug } from '@/utils/slug';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import productsData from '../../products.json';
import { Parallax } from "react-scroll-parallax";
import SimpleParallax from 'simple-parallax-js';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '@/components/Reusable/Breadcrumbs';

interface ProductViewProps {
  productId: number;
  onBack: () => void;
  onProductClick: (id: number) => void;
}

export default function ProductView({ productId, onBack }: ProductViewProps) {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [currentSize, setCurrentSize] = useState<string>('');
  const [scrollLevel, setScrollLevel] = useState<number>(0);

useEffect(() => {
  window.scrollTo(0, 0);  // Window Scroll from 0,0
}, []);

 useEffect(() => {
  const found = productsData.find(p => p.id === productId);
    if (found) {
      setProduct(found);
      setCurrentSize(found.sizes?.[0] || '');
    }
  }, [productId]);

  if (!product) {
    return <div className="p-8 text-center text-gray-500">Loading product details...</div>;
  }

  const textStyle = "text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#000000]";

  const scrollPercentage:Record<number, string> = {
    0:"-translate-x-[0%] duration-200 delay-[70ms] ease",
    1:"-translate-x-[33%] duration-200 delay-[70ms] ease",
    2:"-translate-x-[66%] duration-200 delay-[70ms] ease",
    3:"-translate-x-[100%] duration-200 delay-[70ms] ease"
  }

  const scrollBarPosition:Record<number, string> = {
    0:"",
    1:"justify-start",
    2:"justify-center",
    3:"justify-end"
  }

    let recommendedProducts = productsData.filter(
    (p: any) =>
      p.recommended &&
      p.category === product.category &&
      p.id !== productId
  );

  // if less than 7 fill from other categories
  if (recommendedProducts.length < 7) {
    const extra = productsData.filter(
      (p: any) =>
        p.recommended &&
        p.category !== product.category &&
        p.id !== productId
    );

    recommendedProducts = [...recommendedProducts, ...extra];
  }

recommendedProducts = recommendedProducts.slice(0, 7);

  const hasLayoutImages = Array.isArray(product.layoutImages) && product.layoutImages.length > 0;
  const topImage = hasLayoutImages ? product.layoutImages.find((img: any) => img.position === "top")?.image : null;
  const leftImage = hasLayoutImages ? product.layoutImages.find((img: any) => img.position === "left")?.image : null;
  const rightImage = hasLayoutImages ? product.layoutImages.find((img: any) => img.position === "right")?.image : null;
  const bottomImage = hasLayoutImages ? product.layoutImages.find((img: any) => img.position === "bottom")?.image : null;

  return (
    <div className="w-full bg-[#FFFFFF] overflow-hidden pt-[94px]">

      {/* Breadcrumbs Section */}
      <Breadcrumbs
        className="mt-4"
        items={[
          { label: "HOME", href: "/" },
          { label: "COLLECTION", href: `/collections/${product.category.toLowerCase()}` },
          { label: product.category.toUpperCase(), href: `/collections/${product.category.toLowerCase()}` },
          { label: product.productName.toUpperCase() },
        ]}
      />

      {/* ItemDisplay Section */}
      <section className="w-full md:px-[6.67%] flex justify-between flex-col md:flex-row mt-[2%]">
        {/* Left Info & Options */}
        <div className="w-full md:w-[35%] px-[4.37%] md:px-0 md:ml-[5%] md:pb-[18.96%]">
            <h3 className="md:pt-[7.47%] text-xl md:text-2xl leading-[32px] tracking-tight uppercase text-[#000000] font-normal">{product.productName}</h3>

            <p className="md:pt-[3%] md:pb-[10%] font-baskerville text-[10px] md:text-xl leading-[1.2] tracking-tight text-[#000000]">{product.diamondType || ""}</p>

            {/* Mobile Image */}
            <div className="md:hidden w-[80%] aspect-square overflow-hidden mx-auto mb-[20px]">
                <img src={product.colors[currentVariantIndex]?.image} alt={product.productName} className="w-full h-full object-contain" />
            </div>

            <div className="flex gap-[6%] md:pb-[6%] mt-4 md:mt-0 flex-wrap overflow-x-auto px-4 md:px-0 border-b border-[#000000]/10">
                {product.colors?.map((colorObj: { color: string, image: string }, idx: number) => (
                  <div key={idx} onClick={() => setCurrentVariantIndex(idx)} className="w-[60px] md:w-[22%] shrink-0 cursor-pointer flex flex-col justify-end items-center pb-2">
                      <div className="w-full aspect-[4/3] flex items-center justify-center p-1 mb-2">
                          <img src={colorObj.image} alt={colorObj.color} className="w-full h-full object-contain" />
                      </div>
                      <div className="w-full border-t border-transparent relative">
                         <div className={`absolute top-[-1px] left-0 w-full h-[1px] ${currentVariantIndex === idx ? 'bg-black' : 'bg-transparent'}`}></div>
                         <h3 className="text-xs md:text-sm tracking-wide text-center text-[#000000] pt-2 capitalize">{colorObj.color}</h3>
                      </div>
                  </div>
                ))}
            </div>

            {/* Size Options */}
            <div className="flex w-full py-[4.37%] md:py-[6%] gap-[4%] items-center px-4 md:px-0 mt-4 md:mt-0">
                <h3 className="text-sm leading-[20px] text-[#000000]/50 mr-2 md:mr-4">Size:</h3>
                {product.sizes?.length ? product.sizes.map((size: string) => (
                  <button key={size} onClick={() => setCurrentSize(size)} className={`text-xs md:text-sm ${currentSize === size ? 'text-black font-bold border border-black rounded-full px-2 py-[2px]' : 'text-[#000000]/70'} hover:text-black transition-colors`}>
                    {size}
                  </button>
                )) : (
                  <div className="flex gap-4 items-center cursor-pointer">
                     <span className="text-xs md:text-sm font-bold text-black border border-black rounded-full px-2 py-[2px]">XS</span>
                     <span className="text-xs md:text-sm text-[#000000]/70">S</span>
                     <span className="text-xs md:text-sm text-[#000000]/70">M</span>
                  </div>
                )}
            </div>

            <button className="block w-[90%] md:w-[95%] mx-auto md:mx-0 mt-[8%] md:mt-[4%] py-[4.5%] bg-white border border-[#F0F0F0] rounded-[25px] font-bold text-[9px] leading-[16px] tracking-[1px] uppercase text-[#000000] cursor-pointer hover:bg-black hover:text-white transition-colors shadow-[0_4px_14px_0_rgba(0,0,0,0.03)]">
              CONTACT STORE
            </button>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex flex-col md:w-[50%] md:mr-[2%] items-center justify-center">
            <motion.img src={product.colors[currentVariantIndex]?.image} alt={product.productName} className="w-[85%] h-auto object-contai cursor-pointer"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            />
            {/* <p className="md:pt-[2%] tFext-sm md:text-base leading-[1.4] tracking-tight text-[#000000] capitalize">{product.description || `${product.category.endsWith('s') ? product.category.slice(0, -1) : product.category} in ${product.colors[currentVariantIndex]?.color} with Diamonds`}</p> */}
        </div>
        
      </section>

      {/* ItemContent Section (Layout Images) */}
      {hasLayoutImages && (
        <section className="w-full px-[3.64%] md:px-0 md:pr-[4.5%] md:pl-[6.67%]">
            <div className="md:w-[50%] md:ml-auto md:pb-[9%]">
                <p className="md:pb-[6.44%] text-[12px] md:text-xl leading-[1.4] tracking-[-0.32px] text-[#000000]">
                 {product.description}
                </p>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-[11.05%] md:mb-0 gap-4 md:gap-2">
                    <div className="flex items-center text-[12px] md:text-base leading-[28px] tracking-[-0.32px] text-[#000000]">
                      <span className="mr-2 text-black">•</span> {product.colors[currentVariantIndex]?.color} with diamonds
                    </div>
                    <div className="flex items-center text-[12px] md:text-base leading-[28px] tracking-[-0.32px] text-[#000000]">
                      <span className="mr-2 text-black">•</span> Finger size: {currentSize || 'Small'}
                    </div>
                    {product.diamondType && (
                      <div className="flex items-center text-[12px] md:text-base leading-[28px] tracking-[-0.32px] text-[#000000]">
                        <span className="mr-2 text-black">•</span> {product.diamondType}
                      </div>
                    )}
                </div>
            </div>

            {topImage && (
              <div className="w-full md:w-[50%] aspect-4/3 md:aspect-800/600 md:ml-auto overflow-hidden mb-[1%] md:mb-[1%] flex items-center justify-center">
                  <SimpleParallax>
                    <img src={topImage} alt="Banner" className="w-full h-full md:h-auto object-cover" />
                  </SimpleParallax>
              </div>
            )}

            <div className="w-full flex flex-wrap md:flex-nowrap md:gap-[3%] md:mb-[1%] md:w-[50%] md:ml-auto justify-between">
                {leftImage && (
                  <div className="w-full md:w-[56%] aspect-3/4 md:aspect-400/500 overflow-hidden mb-[1%] md:mb-auto flex items-center justify-center">
                      <img src={leftImage} alt="Detail 1" className="w-full h-full object-cover" />
                  </div>
                )}
                {rightImage && (
                  <div className="w-full md:w-[41%] aspect-3/4 md:aspect-288/500 overflow-hidden mb-[1%] md:mb-auto flex items-center justify-center">
                      <img src={rightImage} alt="Detail 2" className="w-[80%] h-auto object-contain" />
                  </div>
                )}
            </div>

            {bottomImage && (
              <div className="w-full md:w-[50%] md:ml-auto aspect-4/3 md:aspect-800/600 overflow-hidden mb-[2.63%] md:mb-[9.72%] flex items-center justify-center">
                  <SimpleParallax>
                    <img src={bottomImage} alt="Footer" className="w-full h-full object-cover" />
                  </SimpleParallax>
              </div>
            )}
        </section>
      )}

      {/* YouMayLike Section */}
      <section data-theme="dark" className="w-full md:pb-[4.51%] mt-[10%]">
        <h2 className="text-center font-baskerville text-2xl md:text-3xl mb-8 border-t border-gray-100 pt-12">You May Also Like</h2>

        <div className="w-full md:w-[94.44%] mx-auto overflow-hidden">
            <div className={`flex md:gap-[5.81%] ${scrollPercentage[scrollLevel]}`}>
                {recommendedProducts.map((data: { id: number, productName: string, colors: { image: string }[] }) => (
                    <div key={data.id} onClick={() => {
                      router.push(`/collections/${product.category}/${generateSlug(data.productName)}`); window.scroll(0,0)}}
                        className="w-full md:w-[24.19%] shrink-0 group">
                        <div className="md:w-full aspect-square overflow-hidden md:mb-[12.77%] bg-[#F7F6F4] flex items-center justify-center p-4">
                            <img src={data.colors[0]?.image} alt={data.productName} className="w-[80%] h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"/>
                        </div>
                        <p className="text-center font-baskerville text-[14px] md:text-[18px] mt-4">{data.productName}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-[98%] mx-auto md:justify-center items-end pt-[60px] md:pt-4 relative gap-2 flex-wrap flex-col md:flex-nowrap flex">
            <div className="w-full border-b-[3px] border-[#000000]/20 relative shrink-0">
                <div className={`absolute -translate-y-1/4 w-full top-0 left-0 flex ${scrollBarPosition[scrollLevel]}`}>
                    <div className="border-t-[5px] border-[#7C3C3C] md:w-[34%]"></div>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
                <button 
                  onClick={()=>{ if(scrollLevel !== 0) setScrollLevel(scrollLevel-1); }} 
                  className="w-10 h-10 rounded-[10px] bg-[#F9F9F9] hover:cursor-pointer stroke-black active:stroke-white active:bg-[#7C3C3C] flex justify-center items-center"
                >
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0502 7.07071L9.0857 12.106L14.121 17.0705" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>

                <button 
                  onClick={()=>{ if(scrollLevel !== 3) setScrollLevel(scrollLevel+1); }} 
                  className="w-10 h-10 bg-[#F9F9F9] hover:cursor-pointer active:bg-[#7C3C3C] stroke-black active:stroke-white rounded-[10px] flex justify-center items-center"
                >
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.581227 10.4997L5.54053 5.45931L0.500164 0.500004" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            </div>
        </div>
      </section>

    </div>
  );
}