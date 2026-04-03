"use client";

import React, { useState, useEffect } from "react";
import ContainerLayout from "@/layout/ContainerLayout";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ContentItem = {
  imageLeft: string;
  overlayText: string;
  contentText: {
    text: string;
    bold?: boolean;
    newline?: boolean;
  }[];
};

const Creation: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const contentJSON: ContentItem[] = [
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage1.jpg",
      overlayText: "The Diamond Seed",
      contentText: [
        { text: "Every lab grown diamond used at" },
        { text: " Dia Diamonds ", bold: true },
        {
          text: " begins with a microscopic slice of real diamond called a seed.This seed acts as the foundation where pure carbon atoms attach and grow.It is carefully placed inside a controlled growth chamber designed to replicate natural diamond-forming conditions.",
        },
      ],
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage2.jpg",
      overlayText: "Growth Process",
      contentText: [
        { text: "Lab Grown Diamonds ", bold: true },
        { text: "are grown using advanced scientific methods that recreate nature with precision.Through either High Pressure High Temperature (HPHT) or Chemical Vapor Deposition (CVD).carbon atoms crystallize around the seed under extreme heat and controlled energy." },
      ],
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage3.jpg",
      overlayText: "Crystal Creation",
      contentText: [
        { text: "Rough crystal", bold: true },
        {
          text: "Over several weeks, the diamond grows steadily into a rough crystal. Every stage is monitored to ensure clarity, color balance, and structural perfection.At this stage, the diamond is complete in composition and real gemstone in its raw form, ready for refinement.",
        },
      ],
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage.jpg",
      overlayText: "Final Creation",
      contentText: [
        { text: "Final brilliance", bold: true },
        {
          text: "Expert cutters shape and polish the rough crystal to unlock its brilliance. Advanced mapping technology ensures maximum light reflection, sparkle, and symmetry.The finished diamond is graded, certified, and laser-inscribed which is transforming a scientific creation into a timeless piece of fine jewelry.",
        },
      ],
    },
  ];

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % contentJSON.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [contentJSON.length]);

  if (!contentJSON[currentCard]) return null;

  return (
    <section data-theme="light" className="relative w-full h-auto bg-white overflow-hidden">

      {/* Background Shapes */}
      <div className="absolute top-[58%] left-[65.17%] md:left-[61%] md:top-0 w-[62.62%] aspect-square md:aspect-none md:w-[70%] md:h-full bg-[#f2f2f2] rounded-full z-0" />
      <div className="absolute top-[58%] left-[78.93%] md:left-[77.14%] md:top-0 w-[62.62%] aspect-square md:aspect-none md:w-[70%] md:h-full bg-[#7c3c3c]/13 rounded-full z-10" />

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
              className="relative w-full md:w-[41.67%] grow aspect-[600/450] rounded-[20px] overflow-hidden mt-[4%] mb-[18.20%] bg-black md:mb-0"
            >
              <Image
                src={contentJSON[currentCard].imageLeft}
                alt={contentJSON[currentCard].overlayText}
                fill
                className="object-cover"
              />

              <p className="absolute bottom-0 left-0 mb-[7.83%] ml-[9.5%] text-white text-sm md:text-[16px]">
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
              className="w-full md:w-[41.67%] border-l-[3px] border-l-[#5A5A5A] px-[8.77%] mt-[2%] md:px-0 md:pl-[2.22%] leading-none tracking-normal md:block"
            >
              {contentJSON[currentCard].contentText.map((data, id) => {
                if (data.bold) {
                  return (
                    <p key={id} className="font-semibold text-[#383838] text-[13px] md:text-[24px]">
                      {data.text}
                    </p>
                  );
                } else {
                  return (
                    <>
                      <span key={id} className=" md:block text-[#383838] text-xs md:text-[24px]">
                        {data.text}
                      </span>
                    </>
                  );
                }
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DYNAMIC DOTS (FIXED) */}
        <div className="w-[14.08%] md:w-[6.03%] mx-auto flex justify-around items-center gap-[3%] md:gap-[5%] pt-[12.86%] md:pt-[2.36%]">
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