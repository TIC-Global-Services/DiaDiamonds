"use client";

import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";
import imageSrc from '@/public/assets/img/Craftsmanship/CraftManShipImage1.png'
import bottomImageSrc from '@/public/assets/img/Craftsmanship/CraftManShipImage2.png'
import Image from "next/image";

const cards = [
  {
    title: "Elegant and Premium",
    content:
      "Every diamond is meticulously selected and expertly set by skilled artisans. From precision cutting to flawless finishing, each piece reflects timeless beauty and uncompromising quality.",
  },
  {
    title: "Precision in Every Cut",
    content:
      "Every diamond is cut with absolute precision to unlock its maximum brilliance and fire. Our expert craftsmen carefully calculate each angle and facet to ensure perfect symmetry, allowing light to reflect beautifully through the stone.",
  },
  {
    title: "Consectetur Crafted to Perfection",
    content:
      "From selection to final polish, each diamond undergoes a meticulous crafting process guided by skilled artisans. Only the finest stones are chosen and refined to meet exceptional quality standards",
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
  }, [cards.length]);

  return (
    <section data-theme="light" className="relative h-[100dvh] md:h-[150dvh] w-full flex flex-wrap md:flex-nowrap overflow-hidden ">
      {/* Left Side Image */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="w-full md:w-1/2 md:h-full relative overflow-hidden">
        <Parallax speed={-10}>
          <div className="relative w-full md:h-[150vh]">
            <Image
              src={imageSrc}
              alt="Craftsmanship"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Parallax>
        <div onClick={() => router.push("/collections/bracelets")} className="absolute inset-0 z-20 flex justify-center items-end pb-10 md:mb-28">
          {/* <button className="glass-btn BtnAnimation text-[10px] md:text-[12px] tracking-[0.166rem] border-[5.3px] rounded-full px-[16px] py-[3px] md:px-[18px] md:py-[7.6px]  uppercase ">
            VIEW BRACELET COLLECTION
          </button> */}
          <PrimaryBtn text="VIEW BRACELET COLLECTION" textColor="text-black" animated={false} />
        </div>
      </motion.div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col h-auto md:h-full 2xl:h-[150vh]">
        {/* Top Half Cards + Pagination */}
        <div className="w-full md:h-1/2 2xl:h-1/2 flex items-center justify-center pl-[13.5px] md:mt-20 lg:mt-40 py-10 md:py-0 order-2 md:order-1 overflow-hidden">
          <div className="flex flex-col gap-10 justify-center w-full">
            {/* Cards */}
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${index === activeIndex ? "block" : "hidden"}`}
              >
                <h3 className="font-medium text-xl lg:text-[24px] leading-[100%] tracking-[0.03em] text-[#000000] pb-[23px]">
                  {card.title}
                </h3>
                <p className="md:text-base lg:text-[20px] leading-[140%] text-[#000000]/60 w-[97%] ">
                  {card.content}
                </p>
              </div>
            ))}

            {/* Pagination dots */}
            <div className="flex gap-2 mx-auto pt-4 md:pt-0">
              {cards.map((_, idx) => (
                <div
                  key={idx}
                  className={`rounded-full transition-all w-3 h-2 ${idx === activeIndex ? "w-5 bg-[#431A1A]" : "bg-[#000000]/10"
                    }`}
                ></div>
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
          className="relative w-full h-[40vh] md:h-1/2 2xl:h-[75vh] overflow-hidden order-1 md:order-2"
        >
          <Parallax speed={-10} className="h-full">
            <Image
              src={bottomImageSrc}
              alt="Craftsmanship"
              fill
              className="object-cover -translate-y-1/6 2xl:translate-y-0 scale-110"
              quality={100}
            />
          </Parallax>
        </motion.div>
      </div>

      {/* Absolute Overlay Title */}
      <div className="absolute w-full h-full flex justify-center pt-[60px] lg:pt-[100px] xl:pt-[133px]">
        <h2 className="font-medium text-[40px] leading-[100%] tracking-[0.02em] uppercase text-[#000000]">
          Craftsmanship
        </h2>
      </div>
    </section>
  );
}