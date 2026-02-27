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
    <div className="w-full relative pb-[10%]">
      
      {/* First Div */}
      <div className="w-full flex justify-center items-center py-[4%]">
        <h2 className="text-center md:text-left">IGI & SGL Certified Diamonds</h2>
      </div>

      <ContainerLayout>
        
        {/* Second Div */}
        <div className="w-full flex relative pb-[50%] md:pb-0">
          
          {/* Image Div */}
          <div className="w-[70%] md:w-[55%] relative z-10 shrink-0 overflow-hidden">
              <Parallax speed={-20}>
            <img
              src={bgImage1}
              alt="Certified Background 1"
              className="w-full aspect-[280/180]  md:aspect-574/355 object-cover border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px] bg-transparent shadow-[1px_1px_5px_0px_#00000040]"
            />
            </Parallax>
          </div>

          {/* Content Div */}
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount:0.5 }}
          transition={{ duration: 0.5, delay:0.2, ease:"easeIn" }}

          className="w-[80%] md:w-[55%] relative z-20 shrink-0 -translate-x-[60%] translate-y-[35%] md:-translate-x-[18.8%] md:translate-y-[15%] flex flex-col py-[5%] px-[3%]  border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px] backdrop-blur-[5px] bg-transparent shadow-[1px_1px_5px_0px_#00000040]">
        
            <img
              src={logo1}
              alt="IGI Logo"
              className="w-[116px] h-[48px] mx-auto object-contain"
            />

            <h3 className="text-[20px] mt-[20px] ">
              IGI Certified Diamonds
            </h3>

            <p className="text-[14px] text-[#505050] mt-[16px] ">
              Every Dia Diamond is certified by the International Gemological Institute (IGI), one of the world’s most trusted diamond grading authorities. This certification ensures your diamond’s authenticity and provides accurate details about its cut, color, clarity, and carat weight. 
            </p>

            <p className="font-medium text-[16px] leading-[140%] text-[#5e5e5e] mt-[20px] ">
              100% IGI Certified Authenticity
            </p>

          </motion.div>

        </div>

        {/* Third Div (Reversed Layout) */}
        <div className="w-full flex relative md:mt-[194px] pb-[40%] md:pb-0">
          
          {/* Content Div First */}
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount:0.5 }}
          transition={{ duration: 0.5, delay:0.2, ease:"easeIn" }}
          
          className=" w-[80%] md:w-[55%] shrink-0 relative z-20 flex flex-col -translate-x-[60%] translate-y-[30%] md:translate-x-0 md:translate-y-0  py-[5%] px-[3%]  border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px] backdrop-blur-[5px] bg-transparent shadow-[1px_1px_5px_0px_#00000040] order-2 md:order-1">
          
            <img
              src={logo2}
              alt="IGI Logo"
              className="w-[116px] h-[48px] mx-auto object-contain"
            />

            <h3 className="text-[20px] mt-[20px] ">
              SGL Certified Diamonds
            </h3>

            <p className="text-[14px] text-[#505050] mt-[16px] ">
              Every Dia Diamond is certified by Solitaire Gemological Laboratories (SGL), one of India’s most trusted diamond certification authorities. This certification verifies the authenticity and accurately evaluates the diamond’s cut, colour, clarity, and carat weight.  <br />

            </p>

            <p className=" text-[14px] leading-[140%] text-[#505050] mt-[20px] ">
              Certified by SGL, Crafted for Trust. Our diamonds are certified by SGL, assuring exceptional quality, authenticity, and timeless brilliance.
            </p>

          </motion.div>

          {/* Image Div Second (With Translate) */}
          <div className="w-[70%] md:w-[55%] shrink-0 relative z-10 md:-translate-x-[18.8%] md:translate-y-[15%] order-1 md:order-2 overflow-hidden">
            <Parallax speed={-20}>
            <img
              src={bgImage2}
              alt="Certified Background 2"
              className=" w-full aspect-[280/180]  md:aspect-574/355 object-cover border border-[#FFFFFF]/4 backdrop-blur-[4px] rounded-[20px] bg-transparent shadow-[1px_1px_5px_0px_#00000040]"
            />
            </Parallax>
          </div>

        </div>

      </ContainerLayout>

    </div>
  );
}