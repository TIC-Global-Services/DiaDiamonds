"use client";

import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";
import imageSrc from "@/public/assets/img/Craftsmanship/CraftManShipImage1.png";
import bottomImageSrc from "@/public/assets/img/Craftsmanship/CraftManShipImage2.png";
import Image from "next/image";

const cards = [
  {
    title: "Elegant & Premium",
    content:
      "Every diamond is meticulously selected and expertly set by skilled artisans. From precision cutting to flawless finishing, each piece reflects timeless beauty and uncompromising quality.",
  },
  {
    title: "Precision in Every Cut",
    content:
      "Every diamond is cut with absolute precision to unlock its maximum brilliance and fire. Our expert craftsmen carefully calculate each angle and facet to ensure perfect symmetry, allowing light to reflect beautifully through the stone.",
  },
  {
    title: "Crafted to Perfection",
    content:
      "From selection to final polish, each diamond undergoes a meticulous crafting process guided by skilled artisans. Only the finest stones are chosen and refined to meet exceptional quality standards.",
  },
];

export default function Craftsmanship() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-theme="light"
      className="relative min-h-screen w-full flex flex-wrap md:flex-nowrap overflow-hidden"
    >
      {/* Left Side Image */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="w-full md:w-1/2 md:h-full relative overflow-hidden"
      >
        <Parallax speed={-10}>
          <div className="relative w-full h-[100vh] md:h-[120dvh]">
            <Image
              src={imageSrc}
              alt="Craftsmanship"
              fill
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Parallax>
        <div
          onClick={() => router.push("/collections/bracelets")}
          className="absolute inset-0 z-20 flex justify-center items-end pb-15 md:pb-10 md:mb-8"
        >
          <PrimaryBtn
            text="VIEW BRACELET COLLECTION"
            hoverColor="rgba(32, 12, 12, 1)"
            hoverTextColor="text-white"
            textColor="text-black"
            /* FIX: Raised from 8px → 11px */
            className="text-[11px] md:text-[16px] font-normal tracking-widest bg-transparent"
          />
        </div>
      </motion.div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col h-auto md:h-[120vh] 2xl:h-[150vh]">

        {/* Top Half — Cards + Pagination */}
        <div className="relative z-10 w-full md:h-1/2 2xl:h-1/2 flex items-center justify-center pl-[13.5px] md:mt-20 lg:mt-30 py-10 md:py-0 order-2 md:order-1 overflow-hidden">
          <div className="flex flex-col gap-10 justify-center w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${index === activeIndex ? "block" : "hidden"}`}
              >
                <h3 className="font-medium md:text-[24px] leading-[120%] md:leading-[100%] tracking-[0.03em] text-[#000000] pb-4 md:pb-[20px]">
                  {card.title}
                </h3>
                <p className="text-[13px] md:text-[20px] lg:text-[20px] leading-[140%] tracking-tight text-[#000000]/60 w-full md:w-[97%]">
                  {card.content}
                </p>
              </div>
            ))}

            {/* Pagination dots */}
            <div className="flex gap-2 mx-auto pt-4 md:pt-0">
              {cards.map((_, idx) => (
                <div
                  key={idx}
                  className={`rounded-full transition-all h-2 ${
                    idx === activeIndex
                      ? "w-5 bg-[#431A1A]"
                      : "w-3 bg-[#000000]/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Half Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="relative w-full h-[60vh] md:h-[70vh] 2xl:h-[75vh] overflow-hidden order-1 md:order-2"
        >
          <Parallax speed={-10} className="h-full">
            <Image
              src={bottomImageSrc}
              alt="Craftsmanship"
              fill
              className="w-full h-[100%] object-cover -translate-y-1/6 2xl:translate-y-0 scale-110"
              quality={100}
            />
          </Parallax>
        </motion.div>
      </div>

      {/* Absolute Overlay Title */}
      <div className="absolute z-30 pointer-events-none w-full h-full flex justify-center pt-4 md:pt-6 lg:pt-8 xl:pt-10">
        <h2 className="font-medium text-2xl md:text-[40px] leading-[110%] md:leading-[100%] tracking-[0.02em] uppercase text-[#000000]">
          Craftsmanship
        </h2>
      </div>
    </section>
  );
}