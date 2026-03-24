"use client";
import React, { Dispatch } from 'react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import productsData from '../../products.json';

type SearchPanelProps = {
  isSearch: boolean,
  setIsSearch: Dispatch<React.SetStateAction<boolean>>,
};


export default function Search({ isSearch, setIsSearch }: SearchPanelProps) {

  const router = useRouter();
  const [searchState, setSearchState] = useState('Necklaces');
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
    
    return productsData.filter((product) => {
      const searchString = `${product.productName} ${product.category} ${product.description} ${product.diamondType || ''} ${product.tags?.join(' ') || ''}`.toLowerCase();
      
      return searchTerms.every(term => searchString.includes(term));
    }).slice(0, 12);
  }, [query]);

  const categoryProducts = useMemo(() => {
    return productsData.filter(
      (product) => product.category.toLowerCase() === searchState.toLowerCase()
    ).slice(0, 12);
  }, [searchState]);

  const searchImage1 = '/assets/img/Search/SearchImg1.jpg';
  const searchImage2 = '/assets/img/Search/SearchImg2.jpg';



  return (
    <motion.section

      data-theme="dark"

      initial={{ clipPath: "circle(0% at 0% 0%)" }}
      animate={{ clipPath: isSearch ? "circle(150% at 0% 0%)" : "circle(0% at 0% 0%)" }}
      transition={{ duration: 0.6 }}

      className={`absolute inset-0 w-full h-[100dvh] overflow-y-scroll px-6 md:px-10 py-[26px] bg-[#ffffff] z-50 ${isSearch ? 'fixed block' : ''}`} style={{ scrollbarWidth: 'none' }}>
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
        <h2 className="text-[24px] leading-[100%] tracking-[0%] text-[#000000] pb-[11px]">
          Search
        </h2>

        <input 
          autoFocus 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search products..." 
          className="w-full border-b border-[#000000] border-t-0 border-x-0 px-4 py-3 outline-none focus:border-black transition-colors" 
        />

        <h2 className="text-[24px] leading-[100%] tracking-[0%] text-[#000000] pt-6 pb-5">
          Popular
        </h2>

        <div className="flex gap-[10px] w-[40%] pb-[57px]">
          <div onClick={() => { setSearchState('Necklaces') }} className={`flex justify-center items-center ${searchState === 'Necklaces' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer transition-colors duration-200`}>
            <p className="m-0 text-[#000000]">
              Necklaces
            </p>
          </div>

          <div onClick={() => { setSearchState('Bracelets') }} className={`flex justify-center items-center ${searchState === 'Bracelets' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer transition-colors duration-200`}>
            <p className='m-0'>
              Bracelets
            </p>
          </div>

          <div onClick={() => { setSearchState('Rings') }} className={`flex justify-center items-center ${searchState === 'Rings' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer transition-colors duration-200`}>
            <p className="m-0 text-[#000000]">
              Rings
            </p>
          </div>
        </div>

        {/* Category Products Grid */}
        {!query.trim() && categoryProducts.length > 0 && (
          <div className="mb-[50px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categoryProducts.slice(0, 4).map((product) => (
                <div 
                  key={product.id} 
                  className="cursor-pointer group flex flex-col"
                  onClick={() => {
                    setIsSearch(false);
                    router.push(`/collections?category=${product.category}&product=${product.id}`);
                  }}
                >
                  <div className="w-full aspect-square bg-[#F7F6F4] relative overflow-hidden mb-3">
                    <img 
                      src={product.colors[0]?.image} 
                      alt={product.productName} 
                      className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="font-baskerville text-sm md:text-base text-center line-clamp-2">
                    {product.productName}
                  </h3>
                </div>
              ))}
            </div>

            {categoryProducts.length > 4 && (
              <div className="flex justify-center mt-6">
                <button 
                  onClick={() => {
                    setIsSearch(false);
                    router.push(`/collections?category=${searchState.toLowerCase()}`);
                  }}
                  className="px-8 py-3 border border-[#000000] text-[#000000] text-sm tracking-[1px] uppercase hover:bg-[#000000] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div>
            <h2 className="text-[24px] leading-[100%] tracking-[0%] text-[#000000] mb-6">
              Search Results
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-[50px]">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="cursor-pointer group flex flex-col"
                  onClick={() => {
                    setIsSearch(false);
                    router.push(`/collections?category=${product.category}&product=${product.id}`);
                  }}
                >
                  <div className="w-full aspect-square bg-[#F7F6F4] relative overflow-hidden mb-3">
                    <img 
                      src={product.colors[0]?.image} 
                      alt={product.productName} 
                      className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="font-baskerville text-sm md:text-base text-center line-clamp-2">
                    {product.productName}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ) : query.length > 0 ? (
          <div className="py-10 text-center">
            <p className="text-gray-500 text-lg">No products found matching "{query}"</p>
          </div>
        ) : (
          <>
            <h2 className="text-[24px] leading-[100%] tracking-[0%] text-[#000000] mb-6">
              Spotlight
            </h2>

            <div className="max-w-[600px] flex gap-4 flex-wrap">
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
          </>
        )}

      </div>
    </motion.section>
  );
}
