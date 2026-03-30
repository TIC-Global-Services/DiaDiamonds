"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function Shop() {
  const router = useRouter()

  const [activeDiv, setActiveDiv] = useState(0);
  const [isDropDownClicked, setIsDropDownClicked] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [productChanged, setProductChanged] = useState<boolean>(false);
  

  const categories = ["Rings", "Bracelets", "Necklaces", "Pendants", "Earrings"];

  const shopItems = [
    [
      { name: "Engagement Ring", image: "/assets/img/Shop/ShopItem1.png", color: "ROSE GOLD" },
      { name: "Engagement Ring", image: "/assets/img/Shop/ShopItem2.png", color: "YELLOW GOLD" },
      { name: "Engagement Ring", image: "/assets/img/Shop/ShopItem3.jpg", color: "PLATINUM / SILVER TONE" },
    ],
    [
      { name: "Charm Diamond Bracelet", image: "/assets/img/Shop/ShopItem4.jpg", color: "ROSE GOLD" },
      { name: "Charm Diamond Bracelet", image: "/assets/img/Shop/ShopItem5.jpg", color: "YELLOW GOLD" },
      { name: "Charm Diamond Bracelet", image: "/assets/img/Shop/ShopItem6.jpg", color: "PLATINUM / SILVER TONE" },
    ],
    [
      { name: "Aurora Layered Necklace", image: "/assets/img/Shop/ShopItem7.png", color: "ROSE GOLD" },
      { name: "Aurora Layered Necklace", image: "/assets/img/Shop/ShopItem8.png", color: "YELLOW GOLD" },
      { name: "Aurora Layered Necklace", image: "/assets/img/Shop/ShopItem9.png", color: "PLATINUM / SILVER TONE" },
    ],
    [
      { name: "Pure Brilliance Pendant", image: "/assets/img/Shop/ShopItem10.png", color: "ROSE GOLD" },
      { name: "Pure Brilliance Pendant", image: "/assets/img/Shop/ShopItem11.png", color: "YELLOW GOLD" },
      { name: "Pure Brilliance Pendant", image: "/assets/img/Shop/ShopItem12.png", color: "PLATINUM / SILVER TONE" },
    ],
    [
      { name: "Imperial Clover Studs", image: "/assets/img/Shop/ShopItem13.png", color: "ROSE GOLD" },
      { name: "Imperial Clover Studs", image: "/assets/img/Shop/ShopItem14.png", color: "YELLOW GOLD" },
      { name: "Imperial Clover Studs", image: "/assets/img/Shop/ShopItem15.png", color: "PLATINUM / SILVER TONE" },
    ],
  ];

  return (
    <section data-theme="light" className="w-full h-[100svh] md:min-h-screen overflow-hidden md:px-[110px] flex justify-end items-center relative bg-[#FFFFFF]">
      
      {/* First decorative absolute background div */}
      <div className="w-full h-[100%] bg-[#431a1a] absolute top-0 left-0 -translate-y-[75%] md:-translate-x-[70%] md:-translate-y-0 rounded-full z-50 flex flex-col md:flex-row justify-end items-center px-10">
        <div className="mb-14">
          <h3 className="text-2xl md:text-[40px] font-medium leading-[110%] md:leading-[92%] uppercase text-[#ffffff] pb-3 md:pb-5 text-center md:text-left">
            Shop By Colors
          </h3>
          <p className="text-center md:text-left text-sm md:text-[20px] leading-[120%] text-[#ffffff]/50 md:text-[#ffffff]/90 pb-3 md:pb-5">
            Choose Category
          </p>

          {/* Dropdown */}
          <div className="relative w-[45%] md:w-[70%] mx-auto md:mx-0">
            <button
              onClick={() => setIsDropDownClicked(!isDropDownClicked)}
              className={`absolute top-0 bg-[#431A1A] rounded-full border shadow-[inset_0px_4px_4px_0_rgba(0,0,0,0.25)] py-[10px] px-[24px] flex justify-between items-center gap-[10px] w-full cursor-pointer ${isDropDownClicked ? 'z-30 relative' : 'z-20 relative'}`}
            >
              <h3 className="text-sm md:text-[16px] leading-[142%] text-[#FFFFFF]/50 bg-transparent w-full">
                {categories[currentCategory]}
              </h3>
              <svg className={`${isDropDownClicked ? 'rotate-180 delay-100 duration-300' : ''}`} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.327681 1.71L3.19027 4.3C3.62132 4.69 4.31763 4.69 4.74867 4.3L7.61127 1.71C8.30757 1.08 7.81021 0 6.82654 0H1.10135C0.117684 0 -0.368625 1.08 0.327681 1.71Z" fill="white" fillOpacity="0.5"/>
              </svg>
            </button>

            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: isDropDownClicked ? "inset(0 0 0 0)" : "inset(0 0 100% 0)" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 translate-y-[15%] mx-auto w-[90%] flex flex-col bg-white py-[15px] border-b border-t-0 rounded-[10px] z-10"
            >
              {/* proper arrow fn bodies */}
              <button onClick={() => { setCurrentCategory(0); setIsDropDownClicked(false); }} className={`text-sm px-[27px] py-[9px] text-left hover:cursor-pointer border-0 ${currentCategory === 0 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]'}`}>Rings</button>
              <button onClick={() => { setCurrentCategory(1); setIsDropDownClicked(false); }} className={`text-sm px-[27px] py-[9px] text-left hover:cursor-pointer border-0 ${currentCategory === 1 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]'}`}>Bracelets</button>
              <button onClick={() => { setCurrentCategory(2); setIsDropDownClicked(false); }} className={`text-sm px-[27px] py-[9px] text-left hover:cursor-pointer border-0 ${currentCategory === 2 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]'}`}>Necklaces</button>
              <button onClick={() => { setCurrentCategory(3); setIsDropDownClicked(false); }} className={`text-sm px-[27px] py-[9px] text-left hover:cursor-pointer border-0 ${currentCategory === 3 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]'}`}>Pendants</button>
              <button onClick={() => { setCurrentCategory(4); setIsDropDownClicked(false); }} className={`text-sm px-[27px] py-[9px] text-left hover:cursor-pointer border-0 ${currentCategory === 4 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]'}`}>Earrings</button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second decorative background — color strips */}
      <div className="w-[120%] md:w-full h-full md:h-[120%] overflow-hidden bg-[#f7f6f4] absolute top-0 left-0 -translate-y-[60%] -translate-x-[10%] md:-translate-x-[50%] md:-translate-y-[10%] rounded-full z-20 flex md:flex-col">
        {/* 0-indexed activeDiv */}
        <button
          onMouseEnter={() => { setActiveDiv(0); setIsHovered(true); setProductChanged(true); }}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full grow hover:cursor-pointer overflow-hidden bg-[#FAC8AD]/30 ${activeDiv === 0 ? 'opacity-100' : 'opacity-20'}`}
        />
        <button
          onMouseEnter={() => { setActiveDiv(1); setIsHovered(true); setProductChanged(true); }}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full grow hover:cursor-pointer overflow-hidden bg-[#F8CC96] ${activeDiv === 1 ? 'opacity-100' : 'opacity-20'}`}
        />
        <button
          onMouseEnter={() => { setActiveDiv(2); setIsHovered(true); setProductChanged(true); }}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full grow hover:cursor-pointer overflow-hidden bg-[#D9D9D9] ${activeDiv === 2 ? 'opacity-100' : 'opacity-20'}`}
        />
      </div>

      {/* Product display */}
      <div className="w-full mt-auto pb-20 md:pb-0 md:w-[50%] flex flex-col justify-end md:justify-center items-center relative z-30 md:my-auto">
        {/* Bug 4 fix: no more ternary fallbacks */}
        <h2
          className="font-medium text-xl md:text-[35px] leading-[110%] md:leading-[100%] tracking-[5%] md:tracking-[10%] uppercase pb-4 md:pb-[5.28%]"
          style={{
            background: "linear-gradient(to top, #000000 0%, #B58561 49%, #000000 88%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {shopItems[currentCategory][activeDiv].color}
        </h2>

        <div className="w-[50%] md:w-[66.67%] aspect-[480/177]">
          <motion.img
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: productChanged ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
            onAnimationComplete={() => setProductChanged(false)}
            src={shopItems[currentCategory][activeDiv].image}
            alt={shopItems[currentCategory][activeDiv].name}
            className="w-full object-cover md:object-contain"
          />
        </div>

        <p className="pt-5 md:pt-[30px] text-base md:text-[24px] leading-[140%] md:leading-[19.5px] text-[#000000] pb-6 md:pb-[38px] font-baskerville m-0">
          {shopItems[currentCategory][activeDiv].name}
        </p>

        <button onClick={() => {const selectedCategory = categories[currentCategory].toLowerCase();
                router.push(`/collections/${selectedCategory}`);
                }}
          className="BtnAnimation bg-[#87888A]/20 md:bg-white/40 text-[#431a1a] text-xs md:text-[10px] px-4 py-2 md:px-[18px] md:py-[7.6px] border-[#FFFFFF]/1 tracking-[0.1rem] md:tracking-[0.166rem] border-4 md:border-[5.3px] rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.5)] md:px-[4.72%] md:py-[1.666%] uppercase">
          VIEW MORE
        </button>
      </div>
    </section>
  );
}