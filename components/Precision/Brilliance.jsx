"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion } from "framer-motion";

export default function Brilliance() {
  const bgImage = "/assets/img/Precision/Brilliance/bgImage.png";

  return (
    <section data-theme="dark" className="w-full bg-[linear-gradient(180deg,#F8CC96_0%,#F8D8B1_0.01%,#F7E7D3_0.02%,#F7EAD9_0.03%,#F7F6F4_100%)]">
      
      {/* First Section */}
      <div className="w-full flex justify-center items-center text-center md:text-left pt-[72px] pb-[2%]">
        <h2>The Art of Choosing Brilliance</h2>
      </div>

      {/* Second Section */}
      <div className="w-full relative px-6 sm:px-[34px] md:px-10 lg:px-[56px] xl:px-[64px] 2xl:px-20">

        {/* Original Rows */}

          <div className="w-full pb-[140%] md:pb-0">
            <div className="w-[35%] opacity-0 aspect-[350/165] rounded-[20px] flex flex-col backdrop-blur-[5px] bg-transparent shadow-[1px_1px_5px_0px_#00000040] px-[20px] py-[20px]">
              <h3 className="text-[20px] leading-[140%] text-[#000000] pb-[10px]">
                
              </h3>
              <p className="text-[13px] leading-[140%] text-[#5E5E5E]">
                
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-[35%] opacity-0 aspect-[350/165] rounded-[20px] flex flex-col ml-auto backdrop-blur-[5px] bg-transparent shadow-[1px_1px_5px_0px_#00000040] px-[20px] py-[20px]">
              <h3 className="text-[20px] leading-[140%] text-[#000000] pb-[10px]">
                
              </h3>
              <p className="text-[13px] leading-[140%] text-[#5E5E5E]">
                
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-[35%] opacity-0 aspect-[350/165] rounded-[20px] flex flex-col ml-[10%] backdrop-blur-[5px] bg-transparent shadow-[1px_1px_5px_0px_#00000040] px-[20px] py-[20px]">
              <h3 className="text-[20px] leading-[140%] text-[#000000] pb-[10px]">
                
              </h3>
              <p className="text-[13px] leading-[140%] text-[#5E5E5E]">
                
              </p>
            </div>
          </div>


        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-10">
          <img
            src={bgImage}
            alt="Background"
            className="w-full md:h-full aspect-[289/281] md:aspect-auto object-contain translate-y-[53%] md:-translate-y-[10%]"
          />
        </div>

        {/* Duplicate Rows */}
        <div className="absolute inset-0 w-full h-full z-20 px-6 sm:px-[34px] md:px-10 lg:px-[56px] xl:px-[64px] 2xl:px-20">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount:0.5 }}
              transition={{ duration: 0.5, delay:0.2, ease:"easeIn" }}
            
            className="w-full">
              <div className="w-[75%] md:w-[30%] md:ml-[6%] md:mt-[2%]  rounded-[20px] flex flex-col backdrop-blur-[5px] bg-transparent shadow-[1px_1px_5px_0px_#00000040] px-[20px] py-[20px] backdrop-blur-sm bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100">
                <h3 className="text-[20px] leading-[140%] text-[#000000] pb-[10px]">
                  Luxury That Makes Sense
                </h3>
                <p className="text-[13px] leading-[140%] text-[#5E5E5E] tracking-0">
                  True sophistication is choosing wisely. Lab grown diamonds combine advanced science with timeless beauty, offering exceptional value today and pride of ownership tomorrow. It’s a purchase that feels as good as it looks.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount:0.5 }}
              transition={{ duration: 0.5, delay:0.2, ease:"easeIn" }}
            
            className="w-full mt-[50%] md:mt-0">
              <div className="w-[75%] md:w-[30%] md:mr-[5%] md:mt-[-2%] h-auto rounded-[20px] flex flex-col ml-auto backdrop-blur-[5px] bg-transparent shadow-[1px_1px_5px_0px_#00000040] px-[20px] py-[20px] backdrop-blur-sm bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100">
                <h3 className="text-[20px] leading-[140%] text-[#000000] pb-[10px]">
                  Greater Diamond, <br /> Greater Value
                </h3>
                <p className="text-[13px] leading-[140%] text-[#5E5E5E] tracking-0">
                  With lab grown diamonds, your investment goes directly into size, brilliance, and quality not inflated mining costs. You enjoy a larger, finest diamond for the same budget. Smart buying becomes visible luxury.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount:0.5 }}
              transition={{ duration: 0.5, delay:0.2, ease:"easeIn" }}
            
            className="w-full hidden md:block">
              <div className="w-[30%] rounded-[20px] flex flex-col ml-[15%] md:mt-[-6%] md:ml-[17%] backdrop-blur-[5px] bg-transparent shadow-[1px_1px_5px_0px_#00000040] px-[20px] py-[20px] backdrop-blur-sm bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100">
                <h3 className="text-[20px] leading-[140%] text-[#000000] pb-[10px]">
                  Beauty Without Compromise
                </h3>
                <p className="text-[13px] leading-[140%] text-[#5E5E5E] tracking-0">
                  Every Dia diamond delivers the same fire, strength, and certification as a mined stone. The difference lies only in origin, never in elegance. You gain pure brilliance with modern intelligence behind your choice.
                </p>
              </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
}