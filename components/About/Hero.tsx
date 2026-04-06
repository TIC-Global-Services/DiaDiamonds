"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {

  const ImageLeft = '/assets/img/About/Hero/HeroImgLeft.png';
  const ImageRight = '/assets/img/About/Hero/HeroImgRight.png';

  return (
    <ContainerLayout>
      {/* Outer flex container */}
      <Parallax speed={-20}>
      <section data-theme='light' className="w-full flex flex-wrap md:flex-nowrap justify-center items-center md:items-start md:h-[100dsvh] pt-[35%] md:pt-0 md:mt-10 pb-[24%] md:pb-0 md:-translate-y-[10%]">
        
        {/* Text content */}
        <div className="flex flex-col justify-center items-center mx-auto w-full md:w-2/5 gap-6 order-2 md:order-1 pt-[20%]">
          
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay:0.2, ease:"easeInOut" }}
            viewport={{once:false}}
            className="h2 text-2xl md:text-[40px] font-medium leading-[110%] md:leading-[100%] text-[#000000] uppercase"
          >
            ABOUT US
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay:0.4, ease:"easeInOut" }}
            viewport={{once:false}}
            className="text-[14px] md:text-[20px] leading-[140%] md:leading-[140%] text-[#000000] text-left md:text-left px-2 md:px-0"
          >
            Dia Diamonds is the modern expression of a legacy built on trust, integrity, and exceptional craftsmanship. We create timeless diamond jewellery that blends heritage values with contemporary design, ensuring every piece reflects elegance, authenticity, and superior quality. With a strong commitment to ethical sourcing and meticulous attention to detail.
          </motion.p>
        </div>

        {/* Image content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay:0.6, ease:"easeInOut" }}
          viewport={{once:false}}
          className="w-full md:w-1/2 h-full flex md:mt-12 items-start md:items-end relative md:gap-4 order-1 md:order-2"
        >

          {/* Left image wrapper (mobile overlap) */}
          <motion.div
            className="h-full md:h-auto mt-auto w-2/5 md:w-[35%] shrink-0 md:grow-0 relative -right-8 md:right-0 "
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={ImageLeft}
              alt="Hero Image 1"
              className="w-full aspect-square -translate-y-[10%] md:translate-x-[50%] md:scale-100 scale-110 z-20"
            />
          </motion.div>

          {/* Right image wrapper */}
          <div className="overflow-hidden w-3/5 md:w-[60%] md:h-[95%] md:shrink md:grow-0">
            <img
              src={ImageRight}
              alt="Hero Image 2"
              className="w-full md:aspect-[422/633] aspect-[271/406] rounded-t-full z-10"
            />
          </div>
        </motion.div>

       
      </section>
       </Parallax>
    </ContainerLayout>
  );
}