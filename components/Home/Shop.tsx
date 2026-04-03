"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import PrimaryBtn from "../Reusable/PrimaryBtn";

export default function Shop() {
  const router = useRouter();

  const [activeDiv, setActiveDiv] = useState(0);
  const [isDropDownClicked, setIsDropDownClicked] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

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

  const currentItem = shopItems[currentCategory][activeDiv];
  const imageKey = `${currentCategory}-${activeDiv}`;

  const colorSwatches = [
    { color: "bg-[#FAC8AD]/30", idx: 0 },
    { color: "bg-[#F8CC96]", idx: 1 },
    { color: "bg-[#D9D9D9]", idx: 2 },
  ];

  return (
    <section
      data-theme="light"
      className="w-full h-auto md:h-[100dvh] overflow-hidden md:px-[100px] flex justify-center relative bg-[#FFFFFF]"
    >
      {/* Dark circle — left/top — category selector */}
      <div className="w-full h-[100%] bg-[#431a1a] absolute top-0 left-0 md:left-4 -translate-y-[60%] md:-translate-x-[70%] md:-translate-y-0 rounded-full z-30 flex flex-col md:flex-row justify-end items-center px-10">
        <div className="mb-10">
          <h3 className="h3 leading-none uppercase text-white pb-2 md:pb-3 text-center md:text-left">
            Shop By Colors
          </h3>
          <p className="p text-center md:text-start text-white/60 pb-3 md:pb-5">
            Choose Category
          </p>

          {/* Dropdown */}
          <div className="relative w-[100%] md:w-[70%] mx-auto md:mx-0">
            <button
              onClick={() => setIsDropDownClicked(!isDropDownClicked)}
              className={`bg-[#431A1A] rounded-full border border-white/30 shadow-[inset_0px_4px_4px_0_rgba(0,0,0,0.25)] py-[10px] px-[25px] flex justify-between items-center gap-[10px] w-full cursor-pointer relative transition-colors duration-200 hover:border-white/50 ${
                isDropDownClicked ? "z-30" : "z-20"
              }`}
            >
              <span className="text-[12px] md:text-[15px] text-start text-white/60 bg-transparent w-full normal-case tracking-wide leading-normal">
                {categories[currentCategory]}
              </span>
              <svg
                className={`flex-shrink-0 transition-transform duration-300 ${isDropDownClicked ? "rotate-180" : ""}`}
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
              >
                <path
                  d="M0.327681 1.71L3.19027 4.3C3.62132 4.69 4.31763 4.69 4.74867 4.3L7.61127 1.71C8.30757 1.08 7.81021 0 6.82654 0H1.10135C0.117684 0 -0.368625 1.08 0.327681 1.71Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
            </button>

            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
              animate={{
                clipPath: isDropDownClicked ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                opacity: isDropDownClicked ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 left-0 right-0 translate-y-[15%] mx-auto w-[90%] flex flex-col bg-white py-[15px] border-b border-t-0 rounded-[10px] shadow-lg z-[100]"
            >
              {[
                { label: "Bracelets", idx: 1 },
                { label: "Necklaces", idx: 2 },
                { label: "Pendants", idx: 3 },
                { label: "Rings", idx: 0 },
                { label: "Earrings", idx: 4 },
              ].map(({ label, idx }) => (
                <button
                  key={label}
                  onClick={() => {
                    setCurrentCategory(idx);
                    setActiveDiv(0);
                    setIsDropDownClicked(false);
                  }}
                  className={`text-sm px-[27px] py-[9px] text-left cursor-pointer border-0 transition-colors duration-150 ${
                    currentCategory === idx
                      ? "text-black/80 bg-[#dddcdb]"
                      : "text-black/40 bg-white hover:bg-[#f0efee]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Light circle — right/bottom — color swatches */}
      <div className="w-[120%] md:w-full h-full md:h-[120%] overflow-hidden bg-[#f7f6f4] absolute top-0 left-0 -translate-y-[50%] -translate-x-[10%] md:-translate-x-[50%] md:-translate-y-[10%] rounded-full z-20 flex md:flex-col">
        {colorSwatches.map(({ color, idx }) => (
          <button
            key={idx}
            onMouseEnter={() => { setActiveDiv(idx); setIsHovered(true); }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setActiveDiv(idx)}
            className={`w-full grow cursor-pointer overflow-hidden transition-opacity duration-300 ease-in-out ${color} ${
              activeDiv === idx ? "opacity-100" : "opacity-25 hover:opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Product display */}
      <div className="w-full md:w-[70%] mt-44 sm:mt-52 md:mt-0 md:ml-150 flex flex-col justify-center gap-6 items-center relative z-20">

        {/* Color label */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={`color-${imageKey}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h2 uppercase pb-4 mt-10 md:mt-0 md:pb-[3.28%]"
            style={{
              background: "linear-gradient(to top, #000000 0%, #B58561 49%, #000000 88%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {currentItem.color}
          </motion.h2>
        </AnimatePresence>

        {/* Product image */}
        <div className="w-[55%] sm:w-[48%] md:w-[65%] aspect-[450/157]">
          <AnimatePresence mode="wait">
            <motion.img
              key={imageKey}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              src={currentItem.image}
              alt={currentItem.name}
              className="w-full h-full object-contain md:object-center"
            />
          </AnimatePresence>
        </div>

        {/* Product name */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`name-${imageKey}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
            className="pt-5 md:pt-7 text-base md:text-2xl leading-snug text-black pb-5 md:pb-9 font-baskerville"
          >
            {currentItem.name}
          </motion.p>
        </AnimatePresence>

        <PrimaryBtn
          onClick={() => {
            const selectedCategory = categories[currentCategory].toLowerCase();
            router.push(`/collections/${selectedCategory}`);
          }}
          mode="light"
        >
          VIEW MORE
        </PrimaryBtn>
      </div>
    </section>
  );
}
