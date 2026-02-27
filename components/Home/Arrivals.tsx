"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";

export default function Arrivals() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  const firstImage = "/assets/img/Arrivals/ArrivalsImg1.png";
  const secondImage = "/assets/img/Arrivals/ArrivalsImg2.png";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden"
    >
      {/* TOP / LEFT PANEL — Reveals from TOP */}
      <motion.div
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(0% 0% 100% 0%)" }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden"
      >
        <div className="relative w-full h-full overflow-hidden">
          <Parallax speed={-10}>
            <img
              src={firstImage}
              alt="First Arrival"
              className="w-full h-full object-cover"
            />
          </Parallax>

          <h2 className="absolute inset-0 md:font-medium text-base tracking-[0%] md:tracking-auto md:text-[40px] md:leading-[100%] text-white flex justify-center items-center uppercase">
            NEW ARRIVALS
          </h2>
        </div>
      </motion.div>

      {/* BOTTOM / RIGHT PANEL — Reveals from BOTTOM */}
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(100% 0% 0% 0%)" }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden"
      >
        <div className="relative w-full h-full overflow-hidden">
          <Parallax speed={-10}>
            <img
              src={secondImage}
              alt="Second Arrival"
              className="w-full h-full object-cover"
            />
          </Parallax>

          <h2 className="absolute inset-0 font-medium text-base tracking-[0%] md:tracking-auto md:text-[40px] md:leading-[100%] text-white flex justify-center items-center uppercase">
            NEW COLLECTIONS
          </h2>
        </div>
      </motion.div>
    </div>
  );
}