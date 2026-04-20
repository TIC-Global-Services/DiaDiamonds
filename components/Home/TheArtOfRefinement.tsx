"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PantherImage from "@/public/assets/img/TheArtOfRefinement/panther_img.png";
import SparkleAsset from "@/public/assets/sparkle.png";
import { motion, useAnimation } from "framer-motion";

const necklaceSparkles = [
  { top: "39.4%", left: "16.9%", size: 30, delay: 0.0 },
  { top: "68.1%", left: "49.7%", size: 30, delay: 0.0 },
  { top: "68.9%", left: "51.2%", size: 35, delay: 0.3 },
  { top: "69.4%", left: "53.1%", size: 40, delay: 0.6 },
  { top: "69.7%", left: "55.0%", size: 30, delay: 0.9 },
  { top: "69.6%", left: "57.1%", size: 35, delay: 0.2 },
  { top: "69.6%", left: "59.1%", size: 40, delay: 0.5 },
  { top: "69.6%", left: "60.4%", size: 30, delay: 0.8 },
  { top: "69.6%", left: "62.0%", size: 35, delay: 1.1 },
  { top: "69.5%", left: "62.5%", size: 40, delay: 0.4 },
  { top: "69.2%", left: "63.6%", size: 30, delay: 0.7 },
  { top: "69.1%", left: "65.0%", size: 35, delay: 1.0 },
  { top: "68.6%", left: "66.5%", size: 40, delay: 0.1 },
  { top: "68.9%", left: "68.5%", size: 30, delay: 0.0 },
  { top: "68.5%", left: "69.3%", size: 35, delay: 0.3 },
  { top: "68.2%", left: "71.5%", size: 40, delay: 0.6 },
  { top: "67.8%", left: "73.4%", size: 30, delay: 0.9 },
  { top: "67.0%", left: "75.1%", size: 35, delay: 0.2 },
  { top: "66.1%", left: "76.6%", size: 40, delay: 0.5 },
  { top: "65.3%", left: "78.2%", size: 30, delay: 0.8 },
  { top: "64.3%", left: "79.5%", size: 35, delay: 1.1 },
  { top: "63.5%", left: "81.3%", size: 40, delay: 0.4 },
  { top: "62.1%", left: "83.2%", size: 30, delay: 0.7 },
  { top: "62.9%", left: "82.4%", size: 35, delay: 1.0 },
  { top: "61.7%", left: "84.9%", size: 40, delay: 0.1 },
  { top: "61.0%", left: "86.6%", size: 30, delay: 0.0 },
  { top: "60.2%", left: "87.8%", size: 35, delay: 0.3 },
  { top: "58.6%", left: "89.4%", size: 40, delay: 0.6 },
  { top: "59.3%", left: "88.7%", size: 30, delay: 0.9 },
  { top: "57.5%", left: "90.8%", size: 35, delay: 0.2 },
  { top: "56.5%", left: "92.3%", size: 40, delay: 0.5 },
  { top: "55.4%", left: "93.2%", size: 30, delay: 0.8 },
  { top: "54.0%", left: "94.8%", size: 35, delay: 1.1 },
  { top: "53.0%", left: "96.3%", size: 40, delay: 0.4 },
  { top: "52.0%", left: "96.9%", size: 30, delay: 0.7 },
  { top: "50.9%", left: "98.1%", size: 35, delay: 1.0 },
  { top: "49.4%", left: "98.9%", size: 40, delay: 0.1 },
  { top: "70.5%", left: "49.1%", size: 30, delay: 0.0 },
  { top: "71.4%", left: "50.8%", size: 35, delay: 0.3 },
  { top: "72.4%", left: "52.1%", size: 40, delay: 0.6 },
  { top: "72.9%", left: "54.6%", size: 30, delay: 0.9 },
  { top: "73.6%", left: "57.6%", size: 35, delay: 0.2 },
  { top: "72.9%", left: "60.7%", size: 40, delay: 0.5 },
  { top: "72.4%", left: "62.8%", size: 30, delay: 0.8 },
  { top: "73.4%", left: "59.4%", size: 35, delay: 1.1 },
  { top: "74.3%", left: "58.9%", size: 40, delay: 0.4 },
  { top: "75.3%", left: "61.2%", size: 30, delay: 0.7 },
  { top: "75.3%", left: "56.8%", size: 35, delay: 1.0 },
  { top: "75.8%", left: "58.7%", size: 40, delay: 0.1 },
  { top: "72.0%", left: "65.0%", size: 30, delay: 0.0 },
  { top: "72.0%", left: "66.6%", size: 35, delay: 0.3 },
  { top: "71.8%", left: "68.1%", size: 40, delay: 0.6 },
  { top: "71.6%", left: "69.7%", size: 30, delay: 0.9 },
  { top: "71.4%", left: "71.0%", size: 35, delay: 0.2 },
  { top: "71.1%", left: "72.0%", size: 40, delay: 0.5 },
  { top: "70.4%", left: "74.1%", size: 30, delay: 0.8 },
  { top: "69.9%", left: "74.7%", size: 35, delay: 1.1 },
  { top: "69.5%", left: "75.3%", size: 40, delay: 0.4 },
  { top: "68.7%", left: "77.1%", size: 30, delay: 0.7 },
  { top: "68.1%", left: "78.9%", size: 35, delay: 1.0 },
  { top: "68.0%", left: "80.0%", size: 40, delay: 0.1 },
  { top: "66.4%", left: "82.9%", size: 30, delay: 0.0 },
  { top: "67.2%", left: "81.8%", size: 35, delay: 0.3 },
  { top: "65.5%", left: "84.2%", size: 40, delay: 0.6 },
  { top: "64.1%", left: "85.7%", size: 30, delay: 0.9 },
  { top: "63.0%", left: "87.6%", size: 35, delay: 0.2 },
  { top: "62.5%", left: "89.0%", size: 40, delay: 0.5 },
  { top: "61.7%", left: "91.0%", size: 30, delay: 0.8 },
  { top: "59.4%", left: "93.4%", size: 35, delay: 1.1 },
  { top: "60.5%", left: "92.7%", size: 40, delay: 0.4 },
  { top: "58.3%", left: "94.5%", size: 30, delay: 0.7 },
  { top: "56.5%", left: "97.1%", size: 35, delay: 1.0 },
  { top: "57.2%", left: "96.3%", size: 40, delay: 0.1 },
  { top: "55.8%", left: "98.5%", size: 30, delay: 0.0 },
  { top: "54.9%", left: "98.7%", size: 35, delay: 0.3 },
  { top: "75.1%", left: "64.5%", size: 40, delay: 0.6 },
  { top: "74.7%", left: "65.5%", size: 30, delay: 0.9 },
  { top: "74.6%", left: "54.1%", size: 35, delay: 0.2 },
];

type ClickPoint = { top: string; left: string; x: number; y: number };

export default function TheArtOfRefinement() {
  const router = useRouter();
  const controls = useAnimation();
  const [debugMode, setDebugMode] = useState(false);
  const [clickPoints, setClickPoints] = useState<ClickPoint[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "d" || e.key === "D") setDebugMode((v) => !v);
      if (e.key === "Escape") setClickPoints([]);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleContainerClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!debugMode || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const topPct = ((y / rect.height) * 100).toFixed(1);
    const leftPct = ((x / rect.width) * 100).toFixed(1);
    const point = { top: `${topPct}%`, left: `${leftPct}%`, x, y };
    setClickPoints((prev) => [...prev, point]);
    console.log(`{ top: "${topPct}%", left: "${leftPct}%", size: 30, delay: 0.0 },`);
  }, [debugMode]);

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
        <div
          ref={containerRef}
          className="relative w-full h-full"
          onClick={handleContainerClick}
          style={{ cursor: debugMode ? "crosshair" : "default" }}
        >
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

          {/* Debug click points */}
          {debugMode && clickPoints.map((pt, i) => (
            <div
              key={i}
              className="absolute pointer-events-none"
              style={{ top: pt.top, left: pt.left, transform: "translate(-50%, -50%)" }}
            >
              <div className="w-2 h-2 rounded-full bg-red-500 ring-1 ring-white" />
              <div className="absolute left-3 top-0 whitespace-nowrap bg-black/80 text-white text-[10px] px-1 py-0.5 rounded font-mono">
                {pt.top}, {pt.left}
              </div>
            </div>
          ))}

          {/* Debug mode badge */}
          {debugMode && (
            <div className="absolute top-2 left-2 bg-red-600/90 text-white text-[11px] font-mono px-2 py-1 rounded pointer-events-none">
              DEBUG — click to place • ESC clears • D toggles
            </div>
          )}
        </div>
      </div>
    </section>
  );
}