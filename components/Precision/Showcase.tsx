"use client";

import React from "react";
import { motion } from "framer-motion";
import ContainerLayout from "@/layout/ContainerLayout";
import { Parallax } from "react-scroll-parallax";

const Showcase: React.FC = () => {
  const BGImage: string = "/assets/img/Precision/Showcase/bgImage.png";

  return (
    <section
      data-theme="dark"
      className="w-full h-[100vh] md:h-[100svh] relative overflow-hidden"
    >
      {/* Background Image */}
      <Parallax speed={-20}>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          src={BGImage}
          alt="Background Image"
          className="w-full h-[100vh] md:h-[100svh] object-cover"
        />
      </Parallax>

      {/* Top Overlay */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center md:justify-start md:items-start">
        <ContainerLayout className="w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            className="text-[#FFFFFF] text-[24px] md:text-[40px] leading-[26px] md:leading-[48px] tracking-[2%] text-center md:text-left"
          >
            The Intelligent Luxury
          </motion.h3>
        </ContainerLayout>
      </div>

      {/* Bottom Overlay */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center md:justify-end md:items-end">
        <ContainerLayout className="w-full h-full mt-[20%] md:mt-0 flex flex-col justify-center items-center md:flex-row md:justify-end md:items-end">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            className="text-[#FFFFFF] text-[24px] md:text-[40px] leading-[26px] md:leading-[48px] tracking-[2%] text-center md:text-left mt-4 md:mt-0"
          >
            DIA diamonds
          </motion.h2>
        </ContainerLayout>
      </div>
    </section>
  );
};

export default Showcase;