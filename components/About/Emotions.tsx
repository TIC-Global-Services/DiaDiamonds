"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion } from "framer-motion";

export default function Emotions() {

    const BgImage = '/assets/img/About/Emotions/BgImage.png';
    const diamond = '/assets/img/Diamond.png';
    const logo = '/assets/img/DiaDiamondLogo.png';
    const singleSparkle = '/assets/img/SingleSparkle.png';

return (
    <div className="w-full h-[100vh] md:h-auto  relative">
  
      {/* Background image */}
      <img
        src={BgImage}
        alt="Emotions"
        className="w-full object-cover  md:translate-x-0 md:object-fill h-[100vh] md:h-auto"
      />

      {/* First absolute overlay */}
      <div className="w-full absolute inset-0 h-full">
        <ContainerLayout>
          <h2 className="font-medium text-[40px] leading-[100%] text-[#FFFFFF] w-[25%] uppercase">
            Emotion Embraces Techniques
          </h2>
        </ContainerLayout>
      </div>

      {/* Second absolute overlay */}
      <div className="w-full h-full absolute inset-0 flex justify-end items-end px-6 xl:px-[105px] lg:px-[50px] py-8 md:py-10">

        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <img src={diamond} alt="diamond" className="w-13 aspect-square"/>
            <img src={logo} alt="logo" className="w-13 aspect-square"/>
          </div>
          <p className="text-[20px] leading-[100%] text-[#FFFFFF]">
            Where Brilliance Meets Beauty
          </p>
        </div>
          
      </div>


      <div className="w-full absolute inset-0 h-full">

        <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat:2, repeatType:'reverse',  ease: "easeInOut" }}
        viewport={{once:false}}
        src={singleSparkle} alt="sparkle" className="w-24 aspect-square object-cover absolute top-[30%] left-[35%] md:top-[39%] md:left-[48%] " />

        <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, repeat:2, repeatType:'reverse',  ease: "easeInOut" }}
        viewport={{once:false}}
        src={singleSparkle} alt="sparkle" className="w-24 aspect-square object-cover absolute top-[58%] left-[22%] md:top-[58%] md:left-[38%] " />

        <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, repeat:2, repeatType:'reverse',  ease: "easeInOut" }}
        viewport={{once:false}}
        src={singleSparkle} alt="sparkle" className="w-24 aspect-square object-cover absolute top-[58%] left-[10%] md:top-[59%] md:left-[40%] " />

      </div>

    </div>
  );
}