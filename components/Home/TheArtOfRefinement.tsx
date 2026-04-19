"use client";

import { useEffect } from "react";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PantherImage from "@/public/assets/img/TheArtOfRefinement/panther_img.png";
import SparkleAsset from "@/public/assets/sparkle.png";
import { motion, useAnimation } from "framer-motion";

const necklaceSparkles = [
  { top: "47.5%", left: "16.4%", size: 30, delay: 0.0 },
  { top: "75.5%", left: "52.1%", size: 35, delay: 0.3 },
  { top: "74.2%", left: "53.5%", size: 30, delay: 0.6 },
  { top: "74.3%", left: "55.2%", size: 35, delay: 0.9 },
  { top: "74.5%", left: "61.8%", size: 40, delay: 0.2 },
  { top: "76.5%", left: "64.9%", size: 35, delay: 0.5 },
  { top: "76.6%", left: "71.3%", size: 30, delay: 0.8 },
  { top: "72.4%", left: "70.3%", size: 35, delay: 1.1 },
  { top: "73.5%", left: "71.3%", size: 30, delay: 0.4 },
  { top: "72.8%", left: "79.4%", size: 35, delay: 0.7 },
  { top: "69.4%", left: "81.4%", size: 40, delay: 1.0 },
  { top: "68.7%", left: "82.8%", size: 30, delay: 0.1 },
  { top: "70.3%", left: "83.9%", size: 35, delay: 0.4 },
  { top: "69.1%", left: "87.0%", size: 40, delay: 0.7 },
  { top: "74.0%", left: "77.5%", size: 30, delay: 1.0 },
  { top: "63.5%", left: "88.4%", size: 35, delay: 0.3 },
  { top: "62.5%", left: "91.5%", size: 30, delay: 0.6 },
  { top: "59.7%", left: "94.5%", size: 35, delay: 0.9 },
  { top: "64.6%", left: "94.5%", size: 30, delay: 0.2 },
  { top: "66.3%", left: "91.5%", size: 35, delay: 0.5 },
  { top: "65.5%", left: "85.2%", size: 40, delay: 0.8 },
  { top: "74.5%", left: "75.5%", size: 30, delay: 1.1 },
  { top: "75.5%", left: "70.5%", size: 35, delay: 0.0 },
  { top: "76.5%", left: "65.2%", size: 40, delay: 0.3 },
  { top: "73.3%", left: "65.2%", size: 30, delay: 0.6 },
  { top: "78.3%", left: "53.2%", size: 35, delay: 0.9 },
  { top: "70.4%", left: "76.7%", size: 40, delay: 0.2 },
  { top: "71.3%", left: "73.2%", size: 30, delay: 0.5 },

];

export default function TheArtOfRefinement() {
  const router = useRouter();
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i: number) => ({
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
      rotate: [0, 45, 90],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.4,
        ease: "easeInOut",
      },
    }));
  }, [controls]);

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#050505] overflow-hidden">
      {/* 1. STABLE BACKGROUND GRADIENT */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#000000_0%,#140808_90%,#200C0C_100%)] pointer-events-none" />

      {/* 2. TEXT CONTENT CONTAINER */}
      <div className="relative z-20 flex-1 flex flex-col justify-start md:justify-center px-6 md:px-[8%] pt-20 pb-10 md:py-0">
        <div className=" space-y-6">
          <h2 className="text-[32px] text-center md:text-start md:text-[48px] font-medium text-white uppercase leading-[1.1] tracking-tight">
            The Art of Radiant <br className="hidden md:block" /> Refinement
          </h2>
          <p className="text-[14px] text-center md:text-start md:text-[18px] text-white/50 leading-relaxed max-w-[480px]">
            Trust begins with transparency. Every diamond at Dia Diamonds is independently certified by internationally recognised gemological laboratories, ensuring verified quality, authenticity, and ethical standards. We prioritise conflict-free sourcing and sustainable practices, so you can wear your diamond with pride.
          </p>
          <PrimaryBtn
            mode="dark"
            text="VIEW MORE"
            onClick={() => router.push("/collections/necklaces")}
            className="mt-4 w-fit px-10 py-4 ml-25 md:ml-0 uppercase border border-white/20 hover:bg-white hover:text-black transition-all"
          />
        </div>
      </div>

      {/* 3. PANTHER & SPARKLES CONTAINER */}
      <div className="relative z-10 w-full md:w-[45%] h-[50vh] md:h-screen flex items-end justify-end">
        <div className="relative w-full h-full">
          {/* Main Panther Image */}
          <Image
            src={PantherImage}
            alt="Panther"
            fill
            className="object-contain object-right-bottom"
            priority
          />

          {/* Sparkle PNG Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {necklaceSparkles.map((pos, i) => (
              <motion.div
                key={i}
                custom={i}
                animate={controls}
                className="absolute"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: pos.size,
                  height: pos.size,
                }}
              >
                <Image
                  src={SparkleAsset}
                  alt="sparkle"
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
