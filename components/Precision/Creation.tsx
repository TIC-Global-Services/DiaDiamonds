"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ContentPart = {
  text: string;
  bold?: boolean;
};

type ContentParagraph = {
  para: number;
  parts: ContentPart[];
};

type ContentItem = {
  imageLeft: string;
  overlayText: string;
  contentText: ContentParagraph[];
};

const contentJSON: ContentItem[] = [
  {
    imageLeft: "/assets/img/Precision/Creation/bgImage4.jpg",
    overlayText: "Diamond Seed",
    contentText: [
      {
        para: 1,
        parts: [
          { text: "Every natural diamond is formed deep within the Earth under extreme heat and pressure, where pure carbon crystallises over millions of years." },
        ],
      },
      {
        para: 2,
        parts: [
          { text: "Shaped by nature and carried to the surface through powerful geological processes, each diamond is a unique result of time, rarity, and natural transformation." },
        ],
      },
    ],
  },
  {
    imageLeft: "/assets/img/Precision/Creation/bgImage5.jpg",
    overlayText: "Real Diamond",
    contentText: [
      {
        para: 1,
        parts: [
          { text: "Natural diamonds are born deep within the Earth, where extreme heat and pressure shape pure carbon into brilliant crystalline forms over millions of years." },
        ],
      },
      {
        para: 2,
        parts: [
          { text: "Guided by nature and revealed through ancient volcanic forces, each diamond carries a story of rarity, time, and enduring beauty—crafted not by machines, but by the Earth itself." },
        ],
      },
    ],
  },
];

const Creation: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % contentJSON.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!contentJSON[currentCard]) return null;

  return (
    <section className="relative w-full h-auto bg-white overflow-hidden">

      {/* Background Shapes */}
      <div className="absolute top-[59%] left-[67.17%] md:left-[61%] md:top-0 w-[52.62%] aspect-square md:aspect-none md:w-[70%] md:h-full bg-[#f2f2f2] rounded-full z-0" />
      <div className="absolute top-[60%] left-[80.93%] md:left-[77.14%] md:top-0 w-[46.62%] aspect-square md:aspect-none md:w-[70%] md:h-full bg-[#7c3c3c]/13 rounded-full z-10" />

      <div className="relative z-20 w-full h-full flex flex-col py-[25%] md:py-[5.83%]">

        {/* Title */}
        <h2 className="text-center font-medium tracking-tight text-[24px] md:text-[44px] w-full max-w-[600px] mx-auto pb-[5.49%]">
          designed for you. cherished forever.
        </h2>

        {/* Content */}
        <div className="w-full flex justify-between flex-wrap md:flex-nowrap md:gap-[8.54%] items-center px-[5.21%]">

          {/* IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
              className="relative w-full md:w-[41.67%] aspect-[600/450] rounded-[20px] overflow-hidden mt-[4%] mb-[18.20%] bg-black md:mb-0"
            >
              <Image
                src={contentJSON[currentCard].imageLeft}
                alt={contentJSON[currentCard].overlayText}
                fill
                className="object-cover"
              />
              <p className="absolute bottom-0 left-0 mb-[7.83%] ml-[9.5%] text-black text-sm md:text-[16px]">
                {contentJSON[currentCard].overlayText}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard + "-text"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
              className="w-full md:w-[41.67%] border-l-[3px] border-l-[#5A5A5A] px-[8.77%] mt-[2%] md:px-0 md:pl-[2.22%] tracking-normal"
            >
              <div className="flex flex-col gap-0 md:gap-0">
                {contentJSON[currentCard].contentText.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-[#383838] text-[14px] md:text-[20px] font-light md:font-normal leading-[120%] tracking-normal"
                  >
                    {paragraph.parts.map((part, i) => (
                      part.bold
                        ? <strong key={i} className="font-semibold">{part.text}</strong>
                        : <span key={i}>{part.text}</span>
                    ))}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* DOTS */}
        <div className="w-[14.08%] md:w-[6%] mx-auto flex justify-around items-center gap-[3%] md:gap-[2%] pt-[12.86%] md:pt-[2.36%]">
          {contentJSON.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`${currentCard === index
                  ? "w-[37.93%] aspect-[22/6] bg-[#431A1A]"
                  : "w-[20.69%] aspect-[12/6] bg-[#000000]/10"
                } rounded-[10px] cursor-pointer`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Creation;