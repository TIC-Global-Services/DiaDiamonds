"use client";

import productsData from '@/products.json'
import { useState } from "react";
import CollectionItem from "./Reusable/CollectionItem";
import { useSwipeable } from "react-swipeable";
import { Product } from '@/types/product';


export default function OurCollection() {

  const [scrollState, setScrollState] = useState<number>(1);
  const [mobileScrollState, setMobileScrollState] = useState<number>(0);

  const groupedProducts = (productsData as Product[]).reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  const collections = Object.values(groupedProducts)
    .flatMap(categoryProducts => categoryProducts.slice(0, 2))
    .slice(0, 12);


  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (mobileScrollState != 1100) {
        setMobileScrollState(mobileScrollState + 100);
      }
    },
    onSwipedRight: () => {
      if (mobileScrollState != 0) {
        setMobileScrollState(mobileScrollState - 100);
      }
    },
  });

  const mobileScrollMap = {
    0: 'translate-x-0',
    100: 'translate-x-[-110%]',
    200: 'translate-x-[-220%]',
    300: 'translate-x-[-330%]',
    400: 'translate-x-[-440%]',
    500: 'translate-x-[-550%]',
    600: 'translate-x-[-660%]',
    700: 'translate-x-[-770%]',
    800: 'translate-x-[-880%]',
    900: 'translate-x-[-990%]',
    1000: 'translate-x-[-1100%]',
    1100: 'translate-x-[-1210%]',
  } as const;

  const mobileWidthMap = {
    0: 'w-0',
    100: 'w-[10%]',
    200: 'w-[20%]',
    300: 'w-[30%]',
    400: 'w-[40%]',
    500: 'w-[50%]',
    600: 'w-[60%]',
    700: 'w-[70%]',
    800: 'w-[80%]',
    900: 'w-[90%]',
    1000: 'w-[95%]',
    1100: 'w-[100%]',
  }

  const mobileTranslateClass = mobileScrollMap[mobileScrollState as keyof typeof mobileScrollMap] || 'translate-x-0';
  const mobileWidthClass = mobileWidthMap[mobileScrollState as keyof typeof mobileWidthMap] || 'w-0';


  return (

    <section className="w-full py-21 px-5 overflow-hidden z-30 relative" data-theme='dark'>

      {/* Inner flex container */}
      <div className="w-full flex flex-col justify-center items-center pb-9 md:pb-20">
        {/* Section heading */}
        <h2 className=" md:text-[40px] font-medium md:leading-[91%] tracking-[-3%] uppercase text-[#000000]">
          Our Collections
        </h2>

        {/* Section paragraph */}
        <p className="pt-[30px] text-base md:text-[14px] leading-[142%] text-[#000000] text-center">
          Timeless rings for every moment, crafted to shine, made to last
        </p>
      </div>

      {/* Collection items grid */}
      <div {...handlers} className={`w-full flex flex-nowrap gap-[10%] md:gap-4 delay-100 duration-300 ease-in-out ${scrollState == 1 ? 'md:translate-x-0' : ''} ${scrollState == 2 ? 'md:-translate-x-[100%]' : ''} ${scrollState == 3 ? 'md:-translate-x-[200%]' : ''} ${mobileTranslateClass}`}>
        {collections.map((product, id) => (
          <CollectionItem
            key={product.id || id}
            product={product}
          />
        ))}
      </div>

      {/* Large sibling div */}
      <div className="w-[98%] mx-auto md:justify-center items-center pt-[60px] md:pt-4 relative gap-2 flex-wrap md:flex-nowrap flex">
        {/* First inner div with top border */}
        <div className="w-full border-b-3 border-[#000000]/20 relative shrink">
          {/* Absolute border div inside first inner div */}
          <div className={`absolute -translate-y-1/4  w-full top-0 left-0 flex ${scrollState == 1 ? 'justify-start' : ''} ${scrollState == 2 ? 'justify-center' : ''} ${scrollState == 3 ? 'justify-end' : ''}`}>
            <div className={` border-t-5 border-[#7C3C3C] ${mobileWidthClass}  md:w-[34%]`}></div>
          </div>
        </div>

        {/* Second inner div with buttons */}
        <div className=" hidden md:flex items-center gap-2 ">
          {/* First button */}
          <button onClick={() => {
            if (scrollState != 1) {
              setScrollState(scrollState - 1);
            }
          }} className="w-10 h-10 rounded-[10px] bg-[#F9F9F9] hover:cursor-pointer stroke-black active:stroke-white active:bg-[#7C3C3C] flex justify-center items-center">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0502 7.07071L9.0857 12.106L14.121 17.0705" strokeLinecap="round" strokeLinejoin="round" /></svg>

          </button>

          {/* Second button */}
          <button onClick={() => {
            if (scrollState != 3) {
              setScrollState(scrollState + 1);
            }
          }} className="w-10 h-10 bg-[#F9F9F9] hover:cursor-pointer active:bg-[#7C3C3C] stroke-black active:stroke-white rounded-[10px] flex justify-center items-center">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.581227 10.4997L5.54053 5.45931L0.500164 0.500004" strokeLinecap="round" strokeLinejoin="round" /></svg>

          </button>
        </div>
      </div>

    </section>

  );
}
