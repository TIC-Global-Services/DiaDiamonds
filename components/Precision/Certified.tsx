"use client";

import React from "react";
import { motion } from "framer-motion";
import ContainerLayout from "@/layout/ContainerLayout";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import GlassCard from "../Reusable/GlassCard";

const Certified: React.FC = () => {
  const bgImage1: string = "/assets/img/Precision/Certified/bgImage1.jpg";
  const logo1: string = "/assets/img/Precision/Certified/logo1.png";
  const bgImage2: string = "/assets/img/Precision/Certified/bgImage2.jpg";
  const logo2: string = "/assets/img/Precision/Certified/logo2.png";

  return (
    <section
      data-theme="light"
      className="w-full relative py-[5.56%] bg-[linear-gradient(180deg,#F7F6F4_0%,#F7EDE0_99.97%)]"
    >
      {/* TITLE */}
      <div className="w-full flex justify-center items-center">
        <h2 className="font-medium text-[24px] md:text-[40px] text-center tracking-tight">
          “IGI & SGL Certified Diamonds”
        </h2>
      </div>

      <ContainerLayout>

        {/* ================= FIRST BLOCK ================= */}
        <div className="w-full flex justify-center relative pb-[5.33%]">

          {/* IMAGE */}
          <div className="w-[70%] md:w-[40%] relative z-10 shrink-0 overflow-hidden">
            <Parallax speed={5}>
              <Image
                src={bgImage1}
                alt="Certified Background 1"
                className="w-full aspect-[280/180] md:aspect-[574/355] object-cover rounded-[20px] shadow-[1px_1px_5px_0px_#00000040]"
                width={800}
                height={500}
              />
            </Parallax>
          </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            className="
              w-[80%] md:w-[40%]
              relative z-20 shrink-0
              ml-[-43%] mt-[34%]
              md:ml-[-7.85%] md:mt-[5%]
            "
          >
            <GlassCard className="
              w-full
              flex flex-col
              gap-3 md:gap-4
              px-4 md:px-[2.5%]
              py-2 md:py-[2%]
              max-w-[420px] md:max-w-none
              mx-auto 
            ">
              <Image
                src={logo1}
                alt="IGI Logo"
                width={116}
                height={48}
                className="w-[53px] h-[24px] mx-auto mt-2 mb-2 object-contain md:w-[116px] md:h-[46px]"
              />

              <h3 className="text-[16px] md:text-[20px] text-gray-800 text-left">
                IGI Certified Diamonds
              </h3>

              <p className="text-[14px] md:text-[14px] text-gray-500 leading-[120%] tracking-normal text-left">
                Every Dia Diamond is certified by the International Gemological
                Institute (IGI), one of the world’s most trusted diamond grading
                authorities. This certification ensures your diamond’s
                authenticity and provides accurate details about its cut, color,
                clarity, and carat weight.
              </p>

              <p className="text-[12px] md:text-[14px] text-gray-700 leading-[120%] text-left">
                100% IGI Certified Authenticity
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* ================= SECOND BLOCK ================= */}
        <div className="w-full flex justify-center relative">

          {/* IMAGE */}
          <div className="w-[70%] md:w-[40%] shrink-0 relative z-10 overflow-hidden order-1 md:order-2 md:ml-[-7.85%] md:translate-y-[23.38%]">
            <Parallax speed={5}>
              <Image
                src={bgImage2}
                alt="Certified Background 2"
                className="w-full aspect-[280/180] md:aspect-[574/355] object-cover rounded-[20px] shadow-[1px_1px_5px_0px_#00000040]"
                width={800}
                height={500}
              />
            </Parallax>
          </div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            className="
              w-[80%] md:w-[40%]
              relative z-20 shrink-0
              ml-[-43%] mt-[36.65%]
              md:ml-0 md:mt-0
              order-2 md:order-1
            "
          >
            <GlassCard className="
              w-full
              flex flex-col
              gap-3 md:gap-4
              px-4 md:px-[3.5%]
              py-4 md:py-[2%]
              max-w-[420px] md:max-w-none
              mx-auto
            ">

              <Image
                src={logo2}
                alt="SGL Logo"
                width={116}
                height={48}
                className="w-[53px] h-[22px] mx-auto mt-2 mb-2 object-contain md:w-[116px] md:h-[48px]"
              />

              <h3 className="text-[16px] md:text-[20px] text-gray-800 text-left">
                SGL Certified Diamonds
              </h3>

              <p className="text-[14px] md:text-[14px] text-gray-500 leading-[120%] tracking-normal text-left">
                Every Dia Diamond is certified by Solitaire Gemological
                Laboratories (SGL), one of India’s most trusted diamond
                certification authorities. This certification verifies the
                authenticity and accurately evaluates the diamond’s cut, colour,
                clarity, and carat weight.
              </p>

              <p className="hidden md:block text-[12px] md:text-[14px] text-gray-600 leading-[120%] tracking-normal text-left">
                Certified by SGL, Crafted for Trust. Our diamonds are certified
                by SGL, assuring exceptional quality, authenticity, and timeless
                brilliance.
              </p>

            </GlassCard>
          </motion.div>
        </div>

      </ContainerLayout>
    </section>
  );
};

export default Certified;