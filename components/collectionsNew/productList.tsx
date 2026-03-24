"use client";

import React, { useState, useMemo } from 'react';
import { motion } from "framer-motion";
import ProductCard from './ProductCard';
import productsData from '../../products.json';

interface Product {
  id: number;
  productName: string;
  category: string;
  diamondType?: string;
  newArrival: boolean;
  newCollection: boolean;
  recommended: boolean;
  sizes: string[];
  tags: string[];
  colors: { color: string; image: string }[];
  slug: string;
}

interface ProductListProps {
  category?: string;
  onProductClick: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ category = "rings", onProductClick }) => {
  const [sortBy, setSortBy] = useState<string>('default');
  const [solitaireVariety, setSolitaireVariety] = useState<string>('all');
  const [isLeftDropDownClicked, setIsLeftDropDownClicked] = useState<boolean>(false);
  const [isRightDropDownClicked, setIsRightDropDownClicked] = useState<boolean>(false);


  const [displayCount, setDisplayCount] = useState<number>(10);

  const filteredProducts = useMemo(() => {
    let result = productsData.filter((p: any) => p.category === category) as Product[];

    if (category === 'rings' && solitaireVariety !== 'all') {
      result = result.filter(p => p.diamondType?.toLowerCase() === solitaireVariety.toLowerCase());
    }

    return result;
  }, [category, solitaireVariety]);

  React.useEffect(() => {
    setDisplayCount(10);
  }, [category, solitaireVariety, sortBy]);

  const displayedProducts = filteredProducts.slice(0, displayCount);

  return (
    <section className="w-full">

      <div className="w-full md:hidden flex items-center justify-between px-[4.32%]  ">
          <div  className="relative w-[10.49%] aspect-square">
              <div onClick={()=>setIsLeftDropDownClicked(!isLeftDropDownClicked)}>
                  <div className="w-[66.669%] aspect-16/5 bg-[#431A1A] border-[#431A1A] mb-[16.67%]"></div>
                  <div className="w-[66.669%] aspect-16/5 border border-[#431A1A]"></div>
              </div>

              <div className={`${isLeftDropDownClicked ? 'absolute' : 'hidden'} top-full w-[300%] h-20 bg-black z-50`}>
                  <div className="w-full bg-[#F7F6F4] py-[11.21%] px-[12.07%] pointer-events-none">
                      <h3 className="text-[12px] uppercase text-[#000000]">SORT BY</h3>
                  </div>
                  <div onClick={()=>setSortBy("recommended")} className={`${sortBy == "recommended" ? 'border ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                      <h3 className={`text-sm ${sortBy == "recommended" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `} >Recommended</h3>
                  </div>
                  <div onClick={()=>setSortBy("new arrival")} className={`${sortBy == "new arrival" ? 'border ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                      <h3 className={`text-sm ${sortBy == "new arrival" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>New arrival</h3>
                  </div>
                  <div onClick={()=>setSortBy("new collection")} className={`${sortBy == "new collection" ? 'border ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                      <h3 className={`text-sm ${sortBy == "new collection" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>New collection</h3>
                  </div>
                  <div onClick={()=>setSortBy("default")} className={`${sortBy == "default" ? 'border ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                      <h3 className={`text-sm ${sortBy == "default" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>All Products</h3>
                  </div>
                  <div className="w-full bg-[#F7F6F4] py-[11.21%] px-[12.07%] pointer-events-none">
                      <h3 className="text-xs uppercase text-[#000000]" >SOLITAIRE VARIETY</h3>
                  </div>
                  {["round brilliant", "cushion cut", "emerald & round cut", "princess cut", "marquise cut", "all"].map((type) => (
                    <div key={type} onClick={() => setSolitaireVariety(type)} className={`${solitaireVariety == type ? 'border ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                        <h3 className={`text-sm ${solitaireVariety == type ? 'text-[#000000]/80' : 'text-[#000000]/40'} `} >{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                    </div>
                  ))}
              </div>
          </div>

          <div className="flex flex-col justify-center items-center md:gap-[14px] ">
              <h3 className="font-medium md:text-[36px] md:leading-[16px] md:tracking-[0.88px] uppercase text-[#000000] pb-[3.64%] md:pb-[1.03%] text-center">{category}</h3>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.0113 1.875C10.1771 1.875 10.336 1.94085 10.4532 2.05806C10.5704 2.17527 10.6363 2.33424 10.6363 2.5L10.6263 15.9917L15.393 11.235C15.4502 11.1737 15.5193 11.1245 15.596 11.0904C15.6727 11.0563 15.7555 11.038 15.8394 11.0366C15.9233 11.0352 16.0066 11.0507 16.0844 11.0822C16.1622 11.1137 16.2329 11.1606 16.2922 11.22C16.3515 11.2794 16.3982 11.3501 16.4295 11.428C16.4609 11.5058 16.4763 11.5892 16.4747 11.6731C16.4731 11.757 16.4547 11.8398 16.4205 11.9164C16.3862 11.9931 16.3369 12.062 16.2755 12.1192L10.4421 17.9425C10.3249 18.0595 10.1661 18.1253 10.0005 18.1253C9.83483 18.1253 9.67598 18.0595 9.55879 17.9425L3.72546 12.1192C3.61155 12.0013 3.54848 11.8435 3.54983 11.6796C3.55117 11.5157 3.61683 11.359 3.73265 11.243C3.84848 11.1271 4.00521 11.0613 4.16908 11.0598C4.33295 11.0583 4.49086 11.1212 4.60879 11.235L9.37629 15.9933L9.38546 2.5C9.38546 2.41785 9.40165 2.33651 9.43311 2.26063C9.46457 2.18475 9.51068 2.11581 9.56881 2.05776C9.62694 1.99972 9.69593 1.9537 9.77186 1.92234C9.84778 1.89098 9.92914 1.87489 10.0113 1.875Z" fill="black" fillOpacity="0.5"/></svg>
          </div>

          <div className="w-[10.49%] aspect-square opacity-0 pointer-events-none">
              <div className="w-[66.669%] aspect-16/5 bg-[#431A1A] border-[#431A1A] mb-[16.67%]"></div>
              <div className="w-[66.669%] aspect-16/5 border border-[#431A1A]"></div>
          </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden relative md:flex w-full py-[5%] px-[3.88%] md:px-[3.19%] justify-between items-start z-10">

          {/* Left Button */}
          <button onClick={()=>setIsLeftDropDownClicked(!isLeftDropDownClicked)} className="relative md:px-[2.57%] md:py-[1.67%] flex items-center bg-[#431A1A] border-0 rounded-[14px] shrink-0 md:gap-[20px] cursor-pointer">
              <h3 className="font-semibold md:text-[13px] md:leading-[16px] md:tracking-[0.88px] uppercase text-[#FFFFFF] shrink-0">SORT BY</h3>
              <svg className={`${isLeftDropDownClicked ? 'rotate-180': 'rotate-0'}`} width="9" height="24" viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="6" transform="translate(0 9)" fill="#431A1A"/><g clipPath="url(#clip0_276_1730)"><path d="M4.31563 9.99997L7.80664 14.0078L0.806658 13.9921L4.31563 9.99997Z" fill="white"/></g><defs><clipPath id="clip0_276_1730"><rect width="8" height="24" fill="white" transform="translate(0.310547)"/></clipPath></defs></svg>

              <motion.div
              initial={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
              animate={{clipPath: isLeftDropDownClicked ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
              transition={{duration:0.5, delay:0.1, ease:"easeInOut"}}
              className="w-full absolute top-[95%] left-0 flex flex-col justify-center items-center shadow-md">
                  <div onClick={()=>setSortBy("recommended")} className={`w-full md:py-[6.37%] text-center md:text-[16px] md:leading-[100%] ${sortBy == "recommended" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'} cursor-pointer`}>Recommended</div>
                  <div onClick={()=>setSortBy("new arrival")} className={`w-full md:py-[6.37%] text-center md:text-[16px] md:leading-[100%] ${sortBy == "new arrival" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'} cursor-pointer`}>New Arrival</div>
                  <div onClick={()=>setSortBy("new collection")} className={`w-full md:py-[6.37%] text-center md:text-[16px] md:leading-[100%] ${sortBy == "new collection" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'} cursor-pointer`}>New Collections</div>
                  <div onClick={()=>setSortBy("default")} className={`w-full md:py-[6.37%] text-center md:text-[16px] md:leading-[100%] ${sortBy == "default" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'} cursor-pointer rounded-b-[14px]`}>All</div>
              </motion.div>
          </button>

          {/* Main Title & Search */}
          <div className="flex flex-col justify-center items-center md:gap-[14px] absolute left-1/2 -translate-x-1/2">
              <h3 className="font-medium md:text-[36px] md:leading-[16px] md:tracking-[0.88px] uppercase text-[#000000] md:pb-[1.03%]">{category}</h3>
              <p className="font-normal m-0 md:text-[13px] md:leading-[16px] md:tracking-[-0.24px] text-[#000000]">Scroll to discover</p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.0113 1.875C10.1771 1.875 10.336 1.94085 10.4532 2.05806C10.5704 2.17527 10.6363 2.33424 10.6363 2.5L10.6263 15.9917L15.393 11.235C15.4502 11.1737 15.5193 11.1245 15.596 11.0904C15.6727 11.0563 15.7555 11.038 15.8394 11.0366C15.9233 11.0366 16.0352 11.0507 16.0844 11.0822C16.1622 11.1137 16.2329 11.1606 16.2922 11.22C16.3515 11.2794 16.3982 11.3501 16.4295 11.428C16.4609 11.5058 16.4763 11.5892 16.4747 11.6731C16.4731 11.757 16.4547 11.8398 16.4205 11.9164C16.3862 11.9931 16.3369 12.062 16.2755 12.1192L10.4421 17.9425C10.3249 18.0595 10.1661 18.1253 10.0005 18.1253C9.83483 18.1253 9.67598 18.0595 9.55879 17.9425L3.72546 12.1192C3.61155 12.0013 3.54848 11.8435 3.54983 11.6796C3.55117 11.5157 3.61683 11.359 3.73265 11.243C3.84848 11.1271 4.00521 11.0613 4.16908 11.0598C4.33295 11.0583 4.49086 11.1212 4.60879 11.235L9.37629 15.9933L9.38546 2.5C9.38546 2.41785 9.40165 2.33651 9.43311 2.26063C9.46457 2.18475 9.51068 2.11581 9.56881 2.05776C9.62694 1.99972 9.69593 1.9537 9.77186 1.92234C9.84778 1.89098 9.92914 1.87489 10.0113 1.875Z" fill="black" fillOpacity="0.5"/></svg>
          </div>

          {/* Right Button */}
          <button onClick={()=>{setIsRightDropDownClicked(!isRightDropDownClicked)}} className={`${category != 'rings' ? 'opacity-0 pointer-events-none' : 'opacity-100'} relative md:px-[2.57%] md:py-[1.67%] flex md:gap-[20px] items-center bg-[#431A1A] border-0 rounded-[14px] shrink-0 cursor-pointer`}>
              <h3 className="font-semibold md:text-[13px] md:leading-[16px] md:tracking-[0.88px] uppercase text-[#FFFFFF] shrink-0">SOLITAIRE VARIETY</h3>
              <svg className={`${isRightDropDownClicked ? 'rotate-180' : 'rotate-0'}`} width="9" height="24" viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="6" transform="translate(0 9)" fill="#431A1A"/><g clipPath="url(#clip0_276_1730)"><path d="M4.31563 9.99997L7.80664 14.0078L0.806658 13.9921L4.31563 9.99997Z" fill="white"/></g><defs><clipPath id="clip0_276_1730"><rect width="8" height="24" fill="white" transform="translate(0.310547)"/></clipPath></defs></svg>

              <motion.div
              initial={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
              animate={{clipPath: isRightDropDownClicked ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
              transition={{duration:0.5, delay:0.2, ease:"easeInOut"}}
              className="w-full absolute top-[95%] left-0 flex flex-col justify-center items-center shadow-md">
                   {["round brilliant", "cushion cut", "emerald & round cut", "princess cut", "marquise cut", "all"].map((type, index, array) => (
                    <div key={type} onClick={() => setSolitaireVariety(type)} className={`w-full md:py-[6.37%] text-center md:text-[16px] md:leading-[100%] ${solitaireVariety == type ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'} cursor-pointer ${index === array.length - 1 ? 'rounded-b-[14px]' : ''}`} >{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                  ))}
              </motion.div>
          </button>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 pb-10">
        {displayedProducts.map((product) => (
          <ProductCard  key={product.id} product={product} onClick={onProductClick} sortTag={sortBy}/>
        ))}
      </div>

      {filteredProducts.length > displayCount && (
        <div className="w-full flex justify-center pb-20">
          <button
            onClick={() => setDisplayCount(prev => prev + 10)}
            className="md:px-[3%] md:py-[1%] py-[14px] px-[8%] border-[0.5px] border-[#E5E5E5] rounded-full text-[10px] md:text-[13px] leading-[16px] tracking-[0.88px] uppercase text-[#000000] hover:bg-[#F7F6F4] transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductList;