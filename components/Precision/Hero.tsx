"use client";

import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const Hero: React.FC = () => {
  // Background image path for the Hero section
  const bgImage: string = "/assets/img/Precision/Hero/bgImage.jpg";

  return (
    // Main hero container (relative for absolute overlay positioning)
    <section
      data-theme="light"
      className="w-full h-[100svh] relative overflow-hidden"
    >
      <Parallax speed={-20}>
        {/* Background Image with fade-in */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-[100svh]"
        >
          <Image
            src={bgImage}
            alt="Hero Background"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-[100svh] object-cover"
          />
        </motion.div>

        {/* Bottom overlay content */}
        <div className="absolute w-full h-2/5 bottom-20 left-0 flex justify-center items-center">
          <div className="flex flex-col items-center gap-4 mt-25">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-[#FFFFFF]"
            >
              Lab Grown Diamonds
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-[#FFFFFF]"
            >
              A New Way To Shine
            </motion.p>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Hero;