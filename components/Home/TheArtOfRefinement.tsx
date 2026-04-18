"use client";

import { useEffect } from "react";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PantherImage from "@/public/assets/img/TheArtOfRefinement/panther_img.png";
import SparkleAsset from "@/public/assets/sparkle.png";
import { motion, useAnimation } from "framer-motion";

const necklaceSparkles = [
  { top: "68.3%", left: "49.4%", size: 30, delay: 0.0 },
  { top: "68.5%", left: "52.1%", size: 35, delay: 0.3 },
  { top: "69.2%", left: "53.5%", size: 30, delay: 0.6 },
  { top: "69.3%", left: "55.2%", size: 35, delay: 0.9 },
  { top: "70.5%", left: "61.8%", size: 40, delay: 0.2 },
  { top: "70.5%", left: "64.9%", size: 35, delay: 0.5 },
  { top: "69.6%", left: "68.3%", size: 30, delay: 0.8 },
  { top: "69.4%", left: "70.3%", size: 35, delay: 1.1 },
  { top: "68.5%", left: "71.3%", size: 30, delay: 0.4 },
  { top: "65.8%", left: "79.4%", size: 35, delay: 0.7 },
  { top: "63.4%", left: "81.4%", size: 40, delay: 1.0 },
  { top: "62.7%", left: "82.8%", size: 30, delay: 0.1 },
  { top: "62.3%", left: "83.9%", size: 35, delay: 0.4 },
  { top: "61.1%", left: "87.0%", size: 40, delay: 0.7 },
  { top: "58.0%", left: "90.5%", size: 30, delay: 1.0 },
  { top: "56.1%", left: "92.4%", size: 35, delay: 0.3 },
  { top: "51.3%", left: "96.9%", size: 30, delay: 0.6 },
  { top: "49.7%", left: "98.4%", size: 35, delay: 0.9 },
  { top: "53.6%", left: "97.7%", size: 30, delay: 0.2 },
  { top: "56.3%", left: "97.3%", size: 35, delay: 0.5 },
  { top: "59.5%", left: "95.2%", size: 40, delay: 0.8 },
  { top: "62.2%", left: "91.3%", size: 30, delay: 1.1 },
  { top: "62.5%", left: "89.1%", size: 35, delay: 0.0 },
  { top: "64.2%", left: "87.2%", size: 40, delay: 0.3 },
  { top: "66.3%", left: "84.2%", size: 30, delay: 0.6 },
  { top: "69.3%", left: "80.2%", size: 35, delay: 0.9 },
  { top: "70.4%", left: "76.7%", size: 40, delay: 0.2 },
  { top: "71.3%", left: "73.2%", size: 30, delay: 0.5 },
  { top: "72.4%", left: "68.6%", size: 35, delay: 0.8 },
  { top: "73.0%", left: "65.4%", size: 40, delay: 1.1 },
  { top: "73.0%", left: "62.1%", size: 30, delay: 0.4 },
  { top: "74.7%", left: "53.5%", size: 35, delay: 0.7 },
  { top: "72.5%", left: "47.4%", size: 30, delay: 1.0 },
  { top: "74.5%", left: "49.9%", size: 35, delay: 0.1 },
  { top: "75.6%", left: "52.1%", size: 40, delay: 0.4 },
  { top: "76.8%", left: "54.0%", size: 30, delay: 0.7 },
  { top: "77.0%", left: "56.3%", size: 35, delay: 1.0 },
  { top: "77.3%", left: "57.4%", size: 40, delay: 0.3 },
  { top: "78.1%", left: "61.3%", size: 30, delay: 0.6 },
  { top: "77.3%", left: "63.3%", size: 35, delay: 0.9 },
  { top: "75.6%", left: "60.8%", size: 30, delay: 0.2 },
  { top: "73.5%", left: "61.6%", size: 35, delay: 0.5 },
  { top: "74.7%", left: "64.6%", size: 40, delay: 0.8 },
  { top: "76.3%", left: "65.5%", size: 30, delay: 1.1 },
  { top: "77.4%", left: "69.1%", size: 35, delay: 0.0 },
  { top: "74.3%", left: "69.3%", size: 30, delay: 0.3 },
  { top: "73.6%", left: "71.8%", size: 35, delay: 0.6 },
  { top: "73.6%", left: "74.6%", size: 40, delay: 0.9 },
  { top: "71.8%", left: "78.6%", size: 30, delay: 0.2 },
  { top: "70.8%", left: "81.4%", size: 35, delay: 0.5 },
  { top: "73.0%", left: "76.1%", size: 30, delay: 0.8 },
  { top: "71.0%", left: "82.8%", size: 35, delay: 1.1 },
  { top: "70.0%", left: "84.2%", size: 40, delay: 0.4 },
  { top: "68.0%", left: "85.6%", size: 30, delay: 0.7 },
  { top: "65.1%", left: "90.3%", size: 35, delay: 1.0 },
  { top: "65.9%", left: "84.1%", size: 30, delay: 0.1 },
  { top: "66.6%", left: "79.1%", size: 35, delay: 0.4 },
  { top: "70.0%", left: "76.3%", size: 40, delay: 0.7 },
  { top: "70.2%", left: "74.3%", size: 30, delay: 1.0 },
  { top: "74.0%", left: "69.6%", size: 35, delay: 0.3 },
  { top: "64.8%", left: "92.2%", size: 30, delay: 0.6 },
  { top: "62.9%", left: "95.0%", size: 35, delay: 0.9 },
  { top: "59.9%", left: "97.5%", size: 40, delay: 0.2 },
  { top: "56.9%", left: "98.9%", size: 30, delay: 0.5 },
  { top: "61.5%", left: "92.2%", size: 35, delay: 0.8 },
  { top: "55.3%", left: "99.8%", size: 30, delay: 1.1 },
  { top: "52.5%", left: "99.7%", size: 35, delay: 0.0 },
  { top: "61.5%", left: "97.7%", size: 40, delay: 0.3 },
  { top: "66.3%", left: "89.5%", size: 30, delay: 0.6 },
  { top: "68.6%", left: "82.7%", size: 35, delay: 0.9 },
  { top: "71.0%", left: "73.6%", size: 40, delay: 0.2 },
  { top: "71.6%", left: "69.1%", size: 30, delay: 0.5 },
  { top: "75.2%", left: "64.9%", size: 35, delay: 0.8 },
  { top: "75.7%", left: "60.7%", size: 40, delay: 1.1 },
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
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-[8%] pt-20 pb-10 md:py-0">
        <div className=" space-y-6">
          <h2 className="text-[32px] md:text-[48px] font-medium text-white uppercase leading-[1.1] tracking-tight">
            The Art of Radiant <br className="hidden md:block" /> Refinement
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/50 leading-relaxed max-w-[480px]">
            Trust begins with transparency. Every diamond at Dia Diamonds is independently certified by internationally recognised gemological laboratories, ensuring verified quality, authenticity, and ethical standards. We prioritise conflict-free sourcing and sustainable practices, so you can wear your diamond with pride.
          </p>
          <PrimaryBtn
            mode="dark"
            text="VIEW MORE"
            onClick={() => router.push("/collections/necklaces")}
            className="mt-4 w-fit px-10 py-4 uppercase border border-white/20 hover:bg-white hover:text-black transition-all"
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
