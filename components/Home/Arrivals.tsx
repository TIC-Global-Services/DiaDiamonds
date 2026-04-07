"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import firstImage from "@/public/assets/img/Arrivals/ArrivalsImg1.png";
import secondImage from "@/public/assets/img/Arrivals/ArrivalsImg2.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Arrivals() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  return (
    <section
      data-theme="light"
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col md:flex-row overflow-hidden"
    >
      {/* LEFT / TOP */}
      <motion.div
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(0% 0% 100% 0%)" }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full md:w-1/2 min-h-[50svh] md:min-h-[100svh] overflow-hidden"
      >
        <div
          onClick={() => router.push("/collections/rings?sort=newArrival")}
          className="relative w-full h-full cursor-pointer group"
        >
          <Parallax speed={-10}>
            <Image
              src={firstImage}
              alt="New Arrival"
              className="w-full h-full object-cover"
            />
          </Parallax>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h2 className="h2 text-white text-center">
              NEW ARRIVALS
            </h2>
          </div>
        </div>
      </motion.div>

      {/* RIGHT / BOTTOM */}
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(100% 0% 0% 0%)" }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full md:w-1/2 min-h-[50svh] md:min-h-[100svh] overflow-hidden"
      >
        <div
          onClick={() => router.push("/collections/rings")}
          className="relative w-full h-full cursor-pointer group"
        >
          <Parallax speed={-10}>
            <Image
              src={secondImage}
              alt="Collections"
              className="w-full h-full object-cover"
            />
          </Parallax>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h2 className="h2 text-white text-center">
              COLLECTIONS
            </h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
}