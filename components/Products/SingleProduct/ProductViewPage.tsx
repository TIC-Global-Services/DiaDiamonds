"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import productsData from '@/products_new.json';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '@/components/Reusable/Breadcrumbs';
import Image from 'next/image';
import RecommendedProductCard from '../Cards/RecommendedProductCard';
import { Product, ProductLayoutImage } from '@/types/product';
import { FALLBACK_LAYOUT } from '@/constants/LayoutImages';

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
  const [isMobile, setIsMobile] = useState(false);
  const [mobileScrollLevel, setMobileScrollLevel] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const recommendedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

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
  if (recommendedProducts.length < 6) {
    const extra = productsData.filter(
      (p: any) => p.recommended && p.category !== product.category && p.id !== product.id
    );
    recommendedProducts = [...recommendedProducts, ...extra];
  }
  recommendedProducts = recommendedProducts.slice(0, 6);

  const category = product.category.toLowerCase();
  const fallback = FALLBACK_LAYOUT[category] ?? {
    top: "/assets/img/Layout/bgImage1.png",
    left: "/assets/img/Layout/bgImage2.png",
    right: "/assets/img/Layout/bgImage3.png",
    bottom: "/assets/img/Layout/bgImage4.jpg",
  };

  const productLayoutMap = (product.layoutImages ?? []).reduce<Record<string, string>>(
    (acc, img: ProductLayoutImage) => {
      if (img.position && img.image) acc[img.position] = img.image;
      return acc;
    },
    {}
  );

  const topImage = productLayoutMap["top"] ?? fallback.top;
  const leftImage = productLayoutMap["left"] ?? fallback.left;
  const bottomImage = productLayoutMap["bottom"] ?? fallback.bottom;
  const rightImage =
    productLayoutMap["right"] ??
    product.colors[currentVariantIndex]?.image ??
    fallback.right;

  const layoutDescription = product.description ?? "";
  const hasSizes = ["rings", "bracelets", "pendants"].includes(category);

  const handleMobileScroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const gap = 12;
    const cardWidth = window.innerWidth * 0.60 + gap;
    const newLevel = dir === 'right'
      ? Math.min(mobileScrollLevel + 1, recommendedProducts.length - 1)
      : Math.max(mobileScrollLevel - 1, 0);
    scrollRef.current.scrollTo({ left: newLevel * cardWidth, behavior: 'smooth' });
    setMobileScrollLevel(newLevel);
  };

  return (
    <>
      <section data-theme='light' className="w-full bg-white pt-[60px] md:pt-[90px]">

        <Breadcrumbs
          items={[
            { label: "HOME", href: "/" },
            { label: "COLLECTION", href: `/collections/${category}` },
            { label: product.category.toUpperCase(), href: `/collections/${category}` },
          ]}
        />

        <div className="w-full md:px-[6.67%] gap-5 grid md:grid-cols-[35%_65%] items-stretch pt-[2%]">

          {/* LEFT COL */}
          <div className="relative px-[4.37%] md:px-0 h-full">

            {/* STICKY BLOCK — sticks while scrolling through right col content */}
            <div className="md:sticky md:top-[100px] z-40 bg-white">
              <h3 className="md:pt-[5.47%] text-base whitespace-nowrap md:text-2xl leading-[32px] tracking-tight uppercase text-[#000000] font-normal">
                {product.productName}
              </h3>
              <p className="md:pt-[2%] text-[#000000] text-[12px] md:text-lg md:leading-[20px] md:tracking-[-0.26px] font-normal align-middle">
                {product.colors[currentVariantIndex]?.color} with diamonds
              </p>
              <p className="md:pt-[2%] md:pb-[10%] font-baskerville text-base md:text-xl leading-[1.2] tracking-tight text-[#000000]">
                {product.diamondType || ""}
              </p>
            </div>

            {/* MOBILE IMAGE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVariantIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="md:hidden w-[80%] aspect-square overflow-hidden mx-auto mb-[18px]"
              >
                <Image
                  width={400}
                  height={400}
                  src={product.colors[currentVariantIndex]?.image}
                  alt={product.productName}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* VARIANTS */}
            <div className="flex gap-12 mt-4 flex-wrap">
              {product.colors?.map((colorObj: { color: string; image: string }, idx: number) => (
                <motion.div
                  key={idx}
                  onClick={() => setCurrentVariantIndex(idx)}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-[60px] md:w-[20%] shrink-0 cursor-pointer flex flex-col justify-end items-center"
                >
                  <motion.div
                    animate={{
                      scale: currentVariantIndex === idx ? 1.1 : 1,
                      borderColor: currentVariantIndex === idx ? "#000" : "transparent",
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-full aspect-[4/3] flex items-center justify-center p-1 mb-2 border rounded-md mt-2 pb-2"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={colorObj.image}
                      alt={colorObj.color}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <h3 className={`text-[10px] md:text-sm tracking-wide text-center pt-2 capitalize ${
                    currentVariantIndex === idx ? "text-black font-semibold" : "text-[#000000]/50"
                  }`}>
                    {colorObj.color}
                  </h3>
                  {currentVariantIndex === idx && (
                    <motion.div layoutId="activeVariantLine" className="w-full h-[2px] bg-black mt-2 mb-2" />
                  )}
                </motion.div>
              ))}
            </div>

            <hr className='w-full border-t border-gray-300' />

            {hasSizes && (
              <div className="flex w-full py-[6.37%] md:py-[6%] gap-[4%] items-center px-4 md:px-0 mt-2 md:mt-0">
                <h3 className="text-sm leading-[20px] text-[#000000]/50 mr-2 md:mr-4">Size:</h3>
                {product.sizes?.length ? (
                  product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setCurrentSize(size)}
                      className={`text-xs md:text-sm ${
                        currentSize === size
                          ? 'text-black font-bold border border-black rounded-full px-2 py-[4px]'
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
            )}

            <button
              onClick={() => router.push("/contact")}
              className="block w-[100%] md:w-[95%] mx-auto md:mx-0 mt-4 md:mt-6 py-4 bg-white border-0 border-[#F0F0F0] rounded-[25px] text-[#000000] tracking-widest cursor-pointer font-semibold text-[12px] hover:bg-black hover:text-white transition-colors shadow-[inset_-1px_-1px_4px_0px_rgba(0,0,0,0.25)]"
            >
              CONTACT STORE
            </button>

          </div>

          {/* RIGHT COL */}
          <div className="pb-10">
            <div className="hidden md:flex md:mr-[2%] items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentVariantIndex}
                  src={product.colors[currentVariantIndex]?.image}
                  alt={product.productName}
                  className="w-[85%] h-auto object-contain cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:w-full md:ml-auto md:pb-[8%] gap-2 p-2 justify-start text-start pt-0"
            >
              <p className="mt-[6%] md:pb-[6.44%] font-light text-[10px] md:text-[16px] leading-[1.8] text-start tracking-[-0.32px] text-[#000000]">
                {layoutDescription}
              </p>
              <div className="flex flex-col items-start justify-between mb-[11.05%] md:mb-0 gap-4 md:gap-2 md:flex-row md:items-center">
                <div className="flex items-center font-light text-[10px] md:text-base leading-[20px] tracking-[-0.32px] text-[#000000]">
                  <span className="mr-2">•</span>
                  {product.colors[currentVariantIndex]?.color} with diamonds
                </div>
                <div className="flex items-center font-light text-[10px] md:text-base leading-[20px] tracking-[-0.32px] text-[#000000]">
                  <span className="mr-2">•</span>
                  Finger size: {currentSize || 'Small'}
                </div>
                {product.diamondType && (
                  <div className="flex items-center font-light text-[10px] md:text-base leading-[20px] tracking-[-0.32px] text-[#000000]">
                    <span className="mr-2">•</span>
                    {product.diamondType}
                  </div>
                )}
              </div>
            </motion.div>

            <div className="mt-10 space-y-4">
              {topImage && (
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-[100%] ml-auto aspect-[800/600] overflow-hidden mb-[1%] flex items-center justify-center"
                >
                  <Image src={topImage} alt="Product top" width={800} height={600} unoptimized loading="lazy" className="w-full h-full object-cover" />
                </motion.div>
              )}
              {leftImage && (
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-[100%] ml-auto flex gap-[3%] mb-[1%] justify-between"
                >
                  <div className="w-[56%] aspect-[400/500] overflow-hidden flex items-center justify-center">
                    <Image src={leftImage} alt="Product left" width={400} height={500} unoptimized loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  {rightImage && (
                    <div className="w-[41%] aspect-[288/500] overflow-hidden flex items-center justify-center">
                      <Image src={rightImage} alt="Product right" width={288} height={500} className="w-[80%] h-auto object-contain" />
                    </div>
                  )}
                </motion.div>
              )}
              {bottomImage && (
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-[100%] ml-auto aspect-[800/600] overflow-hidden mb-[6.72%] flex items-center justify-center"
                >
                  <Image src={bottomImage} alt="Product bottom" width={800} height={600} unoptimized loading="lazy" className="w-full h-full object-cover" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* YOU MAY ALSO LIKE */}
      <section
        ref={recommendedRef}
        data-theme="light"
        className="w-full md:pb-[0.51%] mt-2 p-4 md:mt-[10%]"
      >
        <h2 className="text-center font-[baskerville SC] font-normal md:font-medium tracking-tight text-2xl md:text-3xl border-t md:mb-4 border-gray-100 pt-6 md:pt-12">
          You May Also Like
        </h2>

        <div ref={scrollRef} className="md:hidden w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 px-2 w-max">
            {recommendedProducts.map((item) => (
              <div key={item.id} className="w-[60vw] shrink-0">
                <RecommendedProductCard
                  product={item}
                  onClick={(id) => {
                    const p = recommendedProducts.find(x => x.id === id);
                    if (!p) return;
                    router.push(`/collections/${p.category.toLowerCase()}/${p.slug}`);
                    window.scroll(0, 0);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-[94.44%] mx-auto">
          <div className={`flex md:gap-[2.81%] ${scrollPercentage[scrollLevel]}`}>
            {recommendedProducts.map((item) => (
              <RecommendedProductCard
                key={item.id}
                product={item}
                onClick={(id) => {
                  const p = recommendedProducts.find(x => x.id === id);
                  if (!p) return;
                  router.push(`/collections/${p.category.toLowerCase()}/${p.slug}`);
                  window.scroll(0, 0);
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-[90%] md:w-[100%] pb-[8%] mx-auto pt-[20px] md:pt-4 relative flex flex-col md:flex-row md:items-center md:justify-end gap-3">
          <div className="w-full md:w-[1100px] border-b-[3px] border-[#000000]/20 relative shrink-0">
            {isMobile ? (
              <div
                className="absolute -translate-y-1/4 top-0 h-0 border-t-[5px] border-[#7C3C3C] transition-all duration-200"
                style={{
                  width: `${100 / recommendedProducts.length}%`,
                  left: `${(mobileScrollLevel / (recommendedProducts.length - 1)) * (100 - 100 / recommendedProducts.length)}%`,
                }}
              />
            ) : (
              <div className={`absolute -translate-y-1/4 top-0 left-0 w-full flex ${scrollBarPosition[scrollLevel]}`}>
                <div className="border-t-[5px] border-[#7C3C3C] w-[34%]" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center md:justify-end gap-2">
            <button
              onClick={() => isMobile ? handleMobileScroll('left') : setScrollLevel(l => Math.max(l - 1, 0))}
              className="w-10 h-10 rounded-[10px] bg-gray-300 hover:bg-[#7C3C3C] stroke-black active:stroke-white active:bg-[#7C3C3C] flex justify-center items-center"
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M14.0502 7.07071L9.0857 12.106L14.121 17.0705" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => isMobile ? handleMobileScroll('right') : setScrollLevel(l => Math.min(l + 1, 3))}
              className="w-10 h-10 bg-gray-300 hover:bg-[#7C3C3C] active:bg-[#7C3C3C] stroke-black active:stroke-white rounded-[10px] flex justify-center items-center"
            >
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
                <path d="M0.581227 10.4997L5.54053 5.45931L0.500164 0.500004" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}