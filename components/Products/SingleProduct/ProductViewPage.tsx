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
import YouMayAlsoLike from '@/components/Sections/YouMayAlsoLike';

interface ProductViewProps {
  product: Product;
  onBack: () => void;
  onProductClick: (id: number) => void;
}

export default function ProductView({ product, onBack }: ProductViewProps) {
  const router = useRouter();

  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [currentSize, setCurrentSize] = useState<string>('');


  const recommendedRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productLimit, setProductLimit] = useState(12);


  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth < 640) {
        setProductLimit(4); // mobile
      } else {
        setProductLimit(12); // desktop
      }
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);


  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2); // mobile
      } else {
        setVisibleCount(4); // desktop
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, []);


  useEffect(() => {
    setCurrentIndex(0);
  }, [productLimit]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  let recommendedProducts = productsData.filter(
    (p: any) => p.recommended && p.category === product.category && p.id !== product.id
  );
  if (recommendedProducts.length < 6) {
    const extra = productsData.filter(
      (p: any) => p.recommended && p.category !== product.category && p.id !== product.id
    );
    recommendedProducts = [...recommendedProducts, ...extra];
  }
  recommendedProducts = recommendedProducts.slice(0, productLimit);

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


  const maxIndex = Math.max(0, recommendedProducts.length - visibleCount);


  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + visibleCount, maxIndex)
    );
  };

  const totalSteps = Math.ceil(
    recommendedProducts.length / visibleCount
  );
  const currentStep = Math.floor(currentIndex / visibleCount);
  const progressWidth =
    totalSteps <= 1
      ? 100
      : (currentStep / (totalSteps - 1)) * 100;


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

        <div className="flex flex-col md:flex-row gap-12 w-full md:px-[7.67%]">

          {/* LEFT - PRODUCT INFO */}
          <div className="w-full md:w-[35%] px-[3.37%] md:px-0">
            {/* your product info (unchanged) */}
            <div>
              <h3 className="pt-4 md:pt-[4%] text-base whitespace-nowrap md:text-2xl leading-[32px] tracking-tight uppercase text-[#000000] font-normal">
                {product.productName}
              </h3>
              <p className="md:pt-[2%] text-[#000000] text-[14px] md:text-lg md:leading-[20px] md:tracking-[-0.26px] font-normal align-middle">
                {product.colors[currentVariantIndex]?.color} with diamonds
              </p>
              <p className="md:pb-[14%] font-baskerville text-base md:text-xl leading-[1.2] tracking-tight text-[#000000]">
                {product.diamondType || ""}
              </p>

              {/* MOBILE IMAGE */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentVariantIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
              <div className="flex gap-12 md:gap-4 flex-wrap">
                {product.colors?.map((colorObj: { color: string; image: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    onClick={() => setCurrentVariantIndex(idx)}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-[25%] md:w-[30%] shrink-0 cursor-pointer flex flex-col justify-end  p-2 transition-all duration-300`}
                  >
                    <motion.div
                      animate={{
                        scale: currentVariantIndex === idx ? 1.05 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`w-full aspect-[4/3] flex items-center justify-center rounded-2xl ${currentVariantIndex === idx
                        ? "border"
                        : ""
                        }`}
                    >
                      <Image
                        width={100}
                        height={100}
                        src={colorObj.image}
                        alt={colorObj.color}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <h3 className={`text-[10px] md:text-sm tracking-wide text-center capitalize mt-2 transition-all duration-300 ${currentVariantIndex === idx ? "text-black font-semibold" : "text-[#000000]/50"
                      }`}>
                      {colorObj.color}
                    </h3>
                    <div className="h-[3px] mt-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={false}
                        animate={{
                          width: currentVariantIndex === idx ? "100%" : "0%",
                          opacity: currentVariantIndex === idx ? 1 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="h-full bg-black rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <hr className='w-full border-t pt-2 mt-4 md:mt-6 border-gray-300' />

              {hasSizes && (
                <div className="flex items-center gap-3 py-4 px-4 md:px-0 mt-2 flex-wrap">
                  <span className="text-[13px] text-black/40 mr-1">Size</span>
                  {(product.sizes?.length ? product.sizes : ["XS", "S", "M"]).map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setCurrentSize(size)}
                      className={`w-9 h-9 rounded-full text-[12px] transition-all duration-150 flex items-center justify-center border
                      ${currentSize === size
                          ? "bg-black text-white border-black"
                          : "bg-transparent text-black/50 border-black/15 hover:border-black/40 hover:text-black"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}

              <button
                onClick={() => router.push("/contact")}
                className="block w-[100%] md:w-[95%] mx-auto md:mx-0 mt-6 md:mt-6 py-4 bg-white border-0 border-[#F0F0F0] rounded-[25px] text-[#000000] tracking-widest cursor-pointer font-semibold text-[12px] hover:bg-black hover:text-white transition-colors shadow-[inset_-1px_-1px_4px_0px_rgba(0,0,0,0.25)]"
              >
                CONTACT STORE
              </button>
            </div>
          </div>

          {/* RIGHT - MAIN IMAGE */}
          <div className="hidden w-full md:w-[65%] md:flex items-center justify-center relative">
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentVariantIndex}
                src={product.colors[currentVariantIndex]?.image}
                alt={product.productName}
                className="w-[70%] h-auto object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="md:w-[65%] md:ml-auto flex flex-col md:px-[7.67%]">

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gap-2 p-2 text-start"
          >
            <p className="pt-[5%] md:mt-[2%] md:pb-[2.44%] font-light text-[14px] md:text-[16px] leading-[140%] text-start tracking-[-0.32px] text-[#000000]">
              {layoutDescription}
            </p>
            <div className="flex flex-col items-start justify-between mb-[11.05%] md:mb-0 gap-4 md:gap-2 md:flex-row md:items-center">
              <div className="flex items-center font-light text-[14px] md:text-base leading-[20px] tracking-[-0.32px] text-[#000000]">
                <span className="mr-2">•</span>
                {product.colors[currentVariantIndex]?.color} with diamonds
              </div>
              <div className="flex items-center font-light text-[14px] md:text-base leading-[20px] tracking-[-0.32px] text-[#000000]">
                <span className="mr-2">•</span>
                Finger size: {currentSize || 'Small'}
              </div>
              {product.diamondType && (
                <div className="flex items-center font-light text-[14px] md:text-base leading-[20px] tracking-[-0.32px] text-[#000000]">
                  <span className="mr-2">•</span>
                  {product.diamondType}
                </div>
              )}
            </div>
          </motion.div>

          {/* LAYOUT IMAGES */}
          <div className="mt-10 space-y-4">
            {topImage && (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-[100%] ml-auto aspect-[800/600] overflow-hidden flex items-center justify-center"
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
                className="w-[100%] ml-auto aspect-[800/600] mt-[5%] overflow-hidden mb-[6.72%] flex items-center justify-center"
              >
                <Image src={bottomImage} alt="Product bottom" width={800} height={600} unoptimized loading="lazy" className="w-full h-full object-cover" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* YOU MAY ALSO LIKE */}
      <YouMayAlsoLike product={product} />
    </>
  );
}