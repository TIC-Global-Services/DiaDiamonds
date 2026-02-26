"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion } from "framer-motion";

export default function OurDiamonds() {

    const ImageLeft = '/assets/img/About/OurDiamonds/ImageLeft.png';

  return (
    <div className="w-full h-[100vh] overflow-hidden flex flex-wrap md:flex-nowrap">
      {/* Image container */}
      <div className="w-full h-[50vh] md:w-[40%] md:h-full overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          viewport={{once:false}}

          src={ImageLeft}
          alt="Our Diamonds"
          className="w-full h-full object-cover hover:scale-110 transition-transform delay-100 duration-300 ease-in-out"
        />
      </div>

      {/* Content container */}
      <div className="w-full h-[50vh] md:h-auto md:w-[60%] flex justify-center items-center bg-[#EAE3D9]">
        <ContainerLayout>
          <div className="w-full flex flex-col justify-start items-start gap-7 md:gap-9">
            <motion.h2
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            viewport={{once:false}}
            className="md:font-medium md:text-[40px] md:leading-[100%] uppercase text-[#000000]">
              Our Diamonds
            </motion.h2>

            <motion.p
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            viewport={{once:false}}
            className="font-light md:text-[20px] md:leading-[140%] text-[#000000]">
                Each Dia Diamonds creation is shaped by responsible sourcing, global certification, and masterful craftsmanship — resulting in jewellery that reflects integrity as much as brilliance. Each Dia Diamonds creation is shaped by responsible sourcing, global certification, and masterful craftsmanship — resulting in jewellery that reflects integrity as much as brilliance.
            </motion.p>

            <motion.button
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            viewport={{once:false}}
            className="BtnAnimation px-7 md:px-12 py-3 md:py-4 border-5 rounded-full border-[#FFFFFF]/1 shadow-[0_4px_4px_0_rgba(0,0,0,0.1)]  bg-[#FFFFFF]/4 text-[13px] md:text-[16px] font-medium leading-[100%] text-[#000000]">
              Discover Our Craft
            </motion.button>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}