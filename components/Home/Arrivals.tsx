"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import firstImage from '@/public/assets/img/Arrivals/ArrivalsImg1.png'
import secondImage from '@/public/assets/img/Arrivals/ArrivalsImg2.png'
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Arrivals() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  return (
    <section data-theme="light"
      ref={containerRef}
      className="relative w-full h-[100svh] flex flex-col md:flex-row overflow-hidden"
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
        <div onClick={() => router.push("/collections/rings")} className="relative w-full h-full cursor-pointer overflow-hidden">
          <Parallax speed={-10}>
            <Image
              src={firstImage}
              alt="First Arrival"
              className="w-full h-full 2xl:h-screen object-cover "
            />
          </Parallax>

          <h2 className="absolute inset-0 font-medium text-xl tracking-[0%] md:tracking-auto md:text-[40px] leading-[110%] md:leading-[100%] text-white flex justify-center items-center uppercase">
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
        <div onClick={() => router.push("/collections/rings")} className="relative cursor-pointer w-full h-full overflow-hidden">
          <Parallax speed={-10}>
            <Image
              src={secondImage}
              alt="Second Arrival"
              className="w-full h-full 2xl:h-screen object-cover"
            />
          </Parallax>

          <h2 className="absolute inset-0 font-medium text-xl tracking-[0%] md:tracking-auto md:text-[40px] leading-[110%] md:leading-[100%] text-white flex justify-center items-center uppercase">
            COLLECTIONS
          </h2>
        </div>
      </motion.div>
    </section>
  );
}