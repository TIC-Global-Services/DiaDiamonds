"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion } from "framer-motion";

export default function Brilliance() {
  const bgImage = "/assets/img/Precision/Brilliance/bgImage.png";

  return (
    <section data-theme="dark" className="w-full relative bg-[linear-gradient(180deg,#F8CC96_0%,#F8D8B1_0.01%,#F7E7D3_0.02%,#F7EAD9_0.03%,#F7F6F4_100%)] md:py-[5%] md:px-[10.56%]">


      {/* TITLE */}

      <h2 className="text-center leading-[48px] tracking-[0%] md:pb-[2.47%]">THE ART OF CHOOSING BRILLIANCE</h2>

      {/* BG IMAGE */}
      <div className="md:w-[58.96%] md:mx-auto aspect-[669.19/650] overflow-hidden ">
      
          <img src={bgImage} alt="bgImage" className="w-full h-auto scale-130" />

      </div>

      {/* Left Text box */}

      <div className="absolute top-[19.1%] left-[8%]  md:p-[2.11%] border-0 rounded-[20px] md:w-[26.84%] shadow-[1px_1px_5px_0px_#00000040] bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-40">

        <h3 className="md:text-[20px] text-[#000000] md:pb-[3.43%]">Luxury That Makes Sense</h3>

        <p className="md:text-[13px] md:tracking-[0%] text-[#5E5E5E]">True sophistication is choosing wisely. Lab grown diamonds combine advanced science with timeless beauty, offering exceptional value today and pride of ownership tomorrow. It’s a purchase that feels as good as it looks.</p>

      </div>

      {/* Right Text box */}

      <div className="absolute top-[45.92%] right-[7.39%] md:p-[2.11%] border-0 rounded-[20px] md:w-[26.84%]  shadow-[1px_1px_5px_0px_#00000040] bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-40">

        <h3 className="md:text-[20px] text-[#000000] md:pb-[3.43%]">Greater Diamond,<br /> Greater Value</h3>

        <p className="md:text-[13px] md:tracking-[0%] text-[#5E5E5E]">With lab grown diamonds, your investment goes directly into size, brilliance, and quality not inflated mining costs. You enjoy a larger, finest diamond for the same budget. Smart buying becomes visible luxury.</p>

      </div>

      {/* Bottom Middle box */}

      <div className="absolute top-[67%] left-[19.49%] md:p-[2.11%] border-0 rounded-[20px] md:w-[26.84%]  shadow-[1px_1px_5px_0px_#00000040] bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-40">

        <h3 className="md:text-[20px] text-[#000000] md:pb-[3.43%]">Greater Diamond, Greater Value</h3>

        <p className="md:text-[13px] md:tracking-[0%] text-[#5E5E5E]">With lab grown diamonds, your investment goes directly into size, brilliance, and quality not inflated mining costs. You enjoy a larger, finest diamond for the same budget. Smart buying becomes visible luxury.</p>

      </div>

    </section>
  );
}