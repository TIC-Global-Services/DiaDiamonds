"use client";
import React, { Dispatch, useEffect } from 'react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import productsData from '../../products_new.json';
import Link from 'next/link';
import { Product } from '@/types/product';

type Category = "necklaces" | "bracelets" | "rings";

type SearchPanelProps = {
  isSearch: boolean,
  setIsSearch: Dispatch<React.SetStateAction<boolean>>,
};

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "Necklaces", value: "necklaces" },
  { label: "Bracelets", value: "bracelets" },
  { label: "Rings", value: "rings" },
];
const searchImage1 = '/assets/img/Search/SearchImg1.jpg';
const searchImage2 = '/assets/img/Search/SearchImg2.jpg';

export default function Search({ isSearch, setIsSearch }: SearchPanelProps) {

  const router = useRouter();
  const [category, setCategory] = useState<Category>("necklaces");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const searchableProducts = useMemo(() =>
    (productsData as Product[]).map((p) => ({
      ...p,
      searchText: [p.productName, p.description ?? "", p.category, ...(p.tags ?? [])]
        .join(" ").toLowerCase(),
    })), []);

  const filteredProducts = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const terms = debouncedQuery.toLowerCase().split(" ").filter(Boolean);
    return searchableProducts
      .filter((p) => terms.every((t) => p.searchText.includes(t)))
      .slice(0, 12);
  }, [debouncedQuery, searchableProducts]);

  const categoryProducts = useMemo(() =>
    (productsData as Product[])
      .filter((p) => p.category.toLowerCase() === category)
      .slice(0, 4),
    [category]);

  const isSearching = query !== debouncedQuery;


  return (
    <motion.section

      data-theme="light"

      initial={{ clipPath: "circle(0% at 0% 0%)" }}
      animate={{ clipPath: isSearch ? "circle(150% at 0% 0%)" : "circle(0% at 0% 0%)" }}
      transition={{ duration: 0.6 }}

      className={`absolute inset-0 w-full h-[100svh] overflow-y-scroll px-6 md:px-10 py-[26px] bg-[#ffffff] z-9999 ${isSearch ? 'fixed block' : ''}`} style={{ scrollbarWidth: 'none' }}>
      <motion.button
        className="pb-[30px] hover:cursor-pointer group"
        onClick={() => { setIsSearch(false) }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {/* Modern X Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 group-hover:rotate-90"
        >
          <motion.line
            x1="6"
            y1="6"
            x2="26"
            y2="26"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
          <motion.line
            x1="26"
            y1="6"
            x2="6"
            y2="26"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        </svg>

      </motion.button>

      <div className="md:pl-[70px]">
        <h2 className="text-xl md:text-[24px] leading-[120%] md:leading-[100%] tracking-[0%] text-[#000000] pb-3 md:pb-[11px]">
          Search
        </h2>

        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full border-b border-[#000000] border-t-0 border-x-0 px-4 py-3 outline-none focus:border-black transition-colors"
        />

        <h2 className="text-xl md:text-[24px] leading-[120%] md:leading-[100%] tracking-[0%] text-[#000000] pt-4 md:pt-6 pb-4 md:pb-5">
          Popular
        </h2>

        <div className="flex gap-[10px] w-full md:w-[40%] pb-8 md:pb-[57px] overflow-x-auto">
          {CATEGORIES.map((item) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              key={item.value}
              onClick={() => { setCategory(item.value); setIsSearch(false) }}
              className={`flex justify-center items-center ${category === item.value
                ? "bg-[#F8CC96]/24"
                : "bg-[#FBF9F7]"
                } p-3 hover:cursor-pointer transition-colors duration-200`}
            >
              <Link href={`/collections/${item.value}`}>
                <p className="m-0 text-[#000000]">{item.label}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* <div onClick={() => { setSearchState('Necklaces') }} className={`flex justify-center items-center ${searchState === 'Necklaces' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer transition-colors duration-200`}>
          <p className="m-0 text-[#000000]">
            Necklaces
          </p>
        </div> */}
        {/* 
        <div onClick={() => { setSearchState('Bracelets') }} className={`flex justify-center items-center ${searchState === 'Bracelets' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer transition-colors duration-200`}>
          <p className='m-0'>
            Bracelets
          </p>
        </div>

        <div onClick={() => { setSearchState('Rings') }} className={`flex justify-center items-center ${searchState === 'Rings' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer transition-colors duration-200`}>
          <p className="m-0 text-[#000000]">
            Rings
          </p>
        </div> */}
      </div>


      {debouncedQuery ? (
        filteredProducts.length > 0 ? (
          <div>
            <h2 className="text-xl md:text-[24px] mb-4 md:mb-6">Search Results</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-[50px]">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer group flex flex-col"
                  onClick={() => {
                    setIsSearch(false);
                    router.push(`/collections/${product.category}/${product.slug}`);
                  }}
                >
                  <div className="w-full aspect-square bg-[#F7F6F4] relative overflow-hidden mb-3">
                    <img
                      src={product.colors[0]?.image}
                      alt={product.productName}
                      className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm md:text-base text-center line-clamp-2">
                    {product.productName}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-10 text-center">
            <p className="text-gray-500 text-lg">
              No products found matching "{debouncedQuery}"
            </p>
          </div>
        )
      ) : (
        <div className='translate-x-20'>
          <h2 className="text-xl md:text-[24px] tracking-[0%] text-[#000000] mb-4 md:mb-6">
            Spotlight
          </h2>

          <div className="max-w-2xl flex gap-4 flex-wrap">
            {/* First Item */}
            <div
              className="flex-1 flex flex-col items-center cursor-pointer group"
              onClick={() => {
                setIsSearch(false);
                router.push('/collections?category=rings');
              }}
            >
              <div className="w-full aspect-[288/153] overflow-hidden">
                <img
                  src={searchImage1}
                  alt="search image 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-[16px] leading-[100%] text-[#000000] m-0 group-hover:underline">
                Brand New
              </p>
            </div>

            {/* Second Item */}
            <div
              className="flex-1 flex flex-col items-center cursor-pointer group"
              onClick={() => {
                setIsSearch(false);
                router.push('/collections');
              }}
            >
              <div className="w-full aspect-[288/153] overflow-hidden">
                <img
                  src={searchImage2}
                  alt="search image 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-[16px] leading-[100%] text-[#000000] m-0 group-hover:underline">
                View Collections
              </p>
            </div>
          </div>
        </div>
      )}

    </motion.section >
  );
}
