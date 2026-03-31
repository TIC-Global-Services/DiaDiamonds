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
      {/* First Div */}
      <div className="w-full flex justify-center items-center">
        <h2 className="font-medium text-[24px] md:text-[40px] text-center md:text-left">
          “IGI & SGL Certified Diamonds”
        </h2>
      </div>

      <ContainerLayout>
        {/* First Block */}
        <div className="w-full h-full flex justify-center relative pb-[5.33%]">
          {/* Image */}
          <div className="w-[70%] md:w-[40%] relative z-10 shrink-0 overflow-hidden">
            <Parallax speed={5}>
              <Image
                src={bgImage1}
                alt="Certified Background 1"
                className="w-full aspect-[280/180] md:aspect-574/355 object-cover border border-[#FFFFFF]/4 backdrop-blur-lg rounded-[20px] bg-transparent shadow-[1px_1px_5px_0px_#00000040]"
                width={800}
                height={500}
              />
            </Parallax>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            className="w-[80%] md:w-[40%] aspect-[281/305] md:aspect-574/355 relative z-20 shrink-0 ml-[-43%] mt-[34%] md:ml-[-7.85%] md:mt-[5%]"
          >
            <GlassCard className="w-full md:w-full h-full md:h-full flex flex-col gap-1 md:gap-4 md:px-[3.5%]">
              <Image src={logo1} alt="IGI Logo" width={116} height={48}
                className="w-[53px] h-[24px] mx-auto object-contain md:w-[116px] md:h-[46px]"
              />
              <h3 className="text-[16px] font-normal text-gray-800 md:text-[20px] text-start md:text-left">
                IGI Certified Diamonds
              </h3>

              <p className="text-[12px] font-light text-gray-600 md:text-[14px] leading-[100%] text-start md:text-left">
                Every Dia Diamond is certified by the International Gemological
                Institute (IGI), one of the world’s most trusted diamond grading
                authorities. This certification ensures your diamond’s
                authenticity and provides accurate details about its cut, color,
                clarity, and carat weight.
              </p>

              <p className="font-light text-gray-600 text-[12px] md:text-[16px] leading-[80%] text-start md:text-left">
                100% IGI Certified Authenticity
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Second Block */}
        <div className="w-full flex justify-center relative">
          {/* Image */}
          <div className="w-[70%] md:w-[40%] shrink-0 relative z-10 overflow-hidden order-1 md:order-2 md:ml-[-7.85%] md:translate-y-[23.38%]">
            <Parallax speed={5}>
              <Image
                src={bgImage2}
                alt="Certified Background 2"
                className="w-full aspect-[280/180] md:aspect-574/355 object-cover border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px] bg-transparent shadow-[1px_1px_5px_0px_#00000040]"
                width={800}
                height={500}
              />
            </Parallax>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
            className="w-[80%] md:w-[40%] aspect-[281/305] md:aspect-574/355 relative z-20 shrink-0 ml-[-43%] mt-[36.65%] md:ml-0 md:mt-0 order-2 md:order-1"
          >
            <GlassCard className="w-full md:w-full h-full md:h-full flex flex-col gap-2 md:gap-3 md:px-[3.5%] md:py-[2.097%]">

              <Image
                src={logo2}
                alt="SGL Logo"
                className="w-[53px] h-[22px] mx-auto object-contain md:w-[116px] md:h-[48px]"
                width={116}
                height={48}
              />

              <h3 className="text-[16px] font-normal text-gray-800 md:text-[20px] text-left md:text-left">
                SGL Certified Diamonds
              </h3>

              <p className="text-[12px] font-light text-gray-600 md:text-[14px] leading-[100%] text-left md:text-left">
                Every Dia Diamond is certified by Solitaire Gemological
                Laboratories (SGL), one of India’s most trusted diamond
                certification authorities. This certification verifies the
                authenticity and accurately evaluates the diamond’s cut, colour,
                clarity, and carat weight.
              </p>

              <p className="hidden md:block font-light text-gray-600 text-[12px] md:text-[14px] leading-[100%] text-start md:text-left">
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