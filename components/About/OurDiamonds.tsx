"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import PrimaryBtn from "../Reusable/PrimaryBtn";

export default function OurDiamonds() {

    const ImageLeft = '/assets/img/About/OurDiamonds/ImageLeft.png';

  return (
    <section className="w-full min-h-screen md:h-[100dvh] overflow-hidden flex flex-wrap md:flex-nowrap bg-[#EAE3D9]">
      {/* Image container */}
      <div className="w-full h-[50vh] md:w-[45%] md:h-full overflow-hidden relative">
        <Parallax speed={-20} className="absolute inset-0 w-full h-[130%] -top-[10%]">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: false }}
            src={ImageLeft}
            alt="Our Diamonds"
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      {/* Content container */}
      <div className="w-full md:w-[60%] flex justify-center items-center bg-[#EAE3D9]">
        <ContainerLayout>
          <div className="w-full flex flex-col mb-10 md:mb-0 justify-start items-start gap-8 md:gap-9 pb-0 md:pb-20">
            <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{once:false}}
            className="font-medium text-2xl md:text-[40px] leading-[120%] md:leading-[120%] uppercase text-[#000000]">
              Our Diamonds
            </motion.h2>

            <motion.p

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{once:false}}
            className="font-light text-[14px] md:text-[20px] leading-[120%] md:leading-[140%] text-[#000000]">
                Each Dia Diamonds creation is shaped by responsible sourcing, global certification, and masterful craftsmanship — resulting in jewellery that reflects integrity as much as brilliance. Each Dia Diamonds creation is shaped by responsible sourcing, global certification, and masterful craftsmanship — resulting in jewellery that reflects integrity as much as brilliance.
            </motion.p>

            <PrimaryBtn
            text="Discover Our Craft"
            mode="light" >
            </PrimaryBtn>
          </div>
        </ContainerLayout>
      </div>
    </section>
  );
}