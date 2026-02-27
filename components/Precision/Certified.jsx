"use client";

import { motion } from "framer-motion";
import ContainerLayout from "@/layout/ContainerLayout";
import { Parallax } from "react-scroll-parallax";

export default function Certified() {
  const bgImage1 = "/assets/img/Precision/Certified/bgImage1.jpg";
  const logo1 = "/assets/img/Precision/Certified/logo1.png";
  const bgImage2 = "/assets/img/Precision/Certified/bgImage2.jpg";
  const logo2 = "/assets/img/Precision/Certified/logo2.png";

  return (
    <div className="w-full relative py-[5.56%] bg-[linear-gradient(180deg,#F7F6F4_0%,#F7EDE0_99.97%)]">
      
      {/* First Div */}
      <div className="w-full flex justify-center items-center ">
        <h2 className="text-center md:text-left">IGI & SGL Certified Diamonds</h2>
      </div>

      <ContainerLayout>
        
        {/* First Div */}
        <div className="w-full flex justify-center  relative pb-[8.33%]">
          
          {/* Image Div */}
          <div className="w-[70%] md:w-[40%] relative z-10 shrink-0 overflow-hidden">
              <Parallax speed={5}>
            <img
              src={bgImage1}
              alt="Certified Background 1"
              className="w-full aspect-[280/180]  md:aspect-574/355 object-cover border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px] bg-transparent shadow-[1px_1px_5px_0px_#00000040]"
            />
            </Parallax>
          </div>

          {/* Content Div */}
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay:0.2, ease:"easeIn" }}

          className="w-[80%] md:w-[40%] aspect-[281/305]  md:aspect-574/355 relative z-20 shrink-0  ml-[-43%]  mt-[34%]  md:ml-[-7.85%]  md:mt-[5%]  border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px]  bg-transparent shadow-[1px_1px_5px_0px_#00000040] bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100">

            <div className="w-full h-full px-[2.5%] py-[4.097%] flex flex-col">
            <img
              src={logo1}
              alt="IGI Logo"
              className="w-[116px] h-[48px] mx-auto object-contain hidden md:block"
            />

            <h3 className="text-[16px] md:text-[20px] mt-[20px] ">
              IGI Certified Diamonds
            </h3>

            <p className="text-[12px] md:text-[14px] text-[#505050] mt-[16px] ">
              Every Dia Diamond is certified by the International Gemological Institute (IGI), one of the world’s most trusted diamond grading authorities. This certification ensures your diamond’s authenticity and provides accurate details about its cut, color, clarity, and carat weight. 
            </p>

            <p className="font-medium text-[12px] md:text-[16px] leading-[140%] text-[#5e5e5e] mt-[20px] ">
              100% IGI Certified Authenticity
            </p>

            </div>
          </motion.div>

        </div>

<div className="w-full flex justify-center relative ">

  {/* Image Div (Right, behind content) */}
  <div className="w-[70%] md:w-[40%] shrink-0 relative z-10 overflow-hidden order-1 md:order-2  md:ml-[-7.85%]  md:translate-y-[23.38%] ">
    <Parallax speed={5}>
      <img
        src={bgImage2}
        alt="Certified Background 2"
        className="w-full aspect-[280/180] md:aspect-574/355 object-cover border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px] bg-transparent shadow-[1px_1px_5px_0px_#00000040]"
      />
    </Parallax>
  </div>

  {/* Content Div (Left, on top) */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
    className="w-[80%] md:w-[40%] aspect-[281/305] md:aspect-574/355 relative z-20 shrink-0  ml-[-43%] mt-[36.65%] md:ml-0 md:mt-0 border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px] bg-transparent shadow-[1px_1px_5px_0px_#00000040] bg-clip-padding backdrop-filter bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100 order-2 md:order-1"
  >

    <div className="w-full h-full px-[2.5%] py-[4.097%] flex flex-col">
    <img
      src={logo2}
      alt="SGL Logo"
      className="w-[116px] h-[48px] mx-auto object-contain hidden md:block"
    />

    <h3 className="text-[16px] md:text-[20px]">SGL Certified Diamonds</h3>

    <p className="text-[12px] md:text-[14px] text-[#505050] mt-[16px]">
      Every Dia Diamond is certified by Solitaire Gemological Laboratories (SGL), one of India’s most trusted diamond certification authorities. This certification verifies the authenticity and accurately evaluates the diamond’s cut, colour, clarity, and carat weight.
    </p>

    <p className="text-[12px] md:text-[14px] leading-[140%] text-[#505050] ">
      Certified by SGL, Crafted for Trust. Our diamonds are certified by SGL, assuring exceptional quality, authenticity, and timeless brilliance.
    </p>

    </div>
  </motion.div>

</div>

      </ContainerLayout>

    </div>
  );
}