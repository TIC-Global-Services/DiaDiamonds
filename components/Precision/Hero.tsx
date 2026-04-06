"use client";

import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

const Hero: React.FC = () => {
  const bgImage: string = "/assets/img/Precision/Hero/bgImage.jpg";

  return (
    <section
      data-theme="dark"
      className="w-full h-screen relative overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Parallax speed={-20} className="h-[130%] w-full" style={{ top: "-15%" }}>
          <div className="relative w-full h-full">
            <Image
              src={bgImage}
              alt="Hero Background"
              fill
              sizes="100vw"
              className="object-cover object-[20%] md:object-center"
            />
          </div>
        </Parallax>
      </motion.div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full pb-12">
        <div className="w-full flex flex-col items-center justify-center gap-2 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-white font-medium text-xl md:text-3xl"
          >
            Lab Grown Diamonds
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-white font-normal text-[14px] md:text-[22px]"
          >
            A New Way To Shine
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;