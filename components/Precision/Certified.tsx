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
        <h2 className="text-center md:text-left">
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
            <GlassCard className="w-[50%] h-[50%] md:w-full md:h-full flex flex-col px-5 py-8 md:px-[6.5%] md:py-[4.097%]">

              <Image
                src={logo1}
                alt="IGI Logo"
                className="w-[90px] h-[36px] mx-auto object-contain md:w-[116px] md:h-[48px] md:block"
                width={116}
                height={48}
              />

              <h3 className="text-[15px] md:text-[20px] mt-3 md:mt-[20px] text-start md:text-left">
                IGI Certified Diamonds
              </h3>

              <p className="text-[13px] md:text-[14px] text-[#505050] mt-3 md:mt-[16px] leading-[150%]">
                Every Dia Diamond is certified by the International Gemological
                Institute (IGI), one of the world’s most trusted diamond grading
                authorities. This certification ensures your diamond’s
                authenticity and provides accurate details about its cut, color,
                clarity, and carat weight.
              </p>

              <p className="font-medium text-[13px] md:text-[16px] leading-[140%] text-[#5e5e5e] mt-4 md:mt-[20px]">
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
            <GlassCard className="w-full h-[60%] md:w-full md:h-full flex flex-col px-4 py-5 md:px-[6.5%] md:py-[2.097%]">

              <Image
                src={logo2}
                alt="SGL Logo"
                className="w-[90px] h-[36px] mx-auto object-contain md:w-[116px] md:h-[48px] md:block"
                width={116}
                height={48}
              />

              <h3 className="text-[15px] md:text-[20px] mt-2 text-start md:text-left">
                SGL Certified Diamonds
              </h3>

              <p className="text-[13px] md:text-[14px] text-[#505050] mt-3 md:mt-[16px] leading-[150%]">
                Every Dia Diamond is certified by Solitaire Gemological
                Laboratories (SGL), one of India’s most trusted diamond
                certification authorities. This certification verifies the
                authenticity and accurately evaluates the diamond’s cut, colour,
                clarity, and carat weight.
              </p>

              <p className="text-[13px] md:text-[14px] leading-[150%] text-[#505050] mt-1">
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