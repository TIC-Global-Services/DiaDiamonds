"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisitStore() {

    const ImageRight = '/assets/img/About/VisitStore/ImageRight.jpg';

  return (
    <section data-theme="light" className="w-full min-h-screen pt-0 md:pt-0 pb-[5%] px-[1px]">
      {/* <ContainerLayout> */}
        <div className=" w-full flex justify-center items-start md:items-center flex-wrap md:flex-nowrap px-[4%] pb-[6%] md:pb-0">

          {/* First div */}
          <div className="flex flex-col w-full gap-2 md:gap-[20px] order-2 md:order-1 shrink ">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{once:false}}
              className="text-[24px] font-medium md:font-medium md:text-[40px] md:leading-[100%] uppercase text-[#000000]">
              Visit Our Store
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{once:false}}
              className="text-[13px] font-normal md:text-[20px] md:leading-[100%] text-[#000000] w-full">
              {/* Placeholder content */}
              Step into our boutique to experience Dia Diamonds as it’s meant to be.
            </motion.p>

            <motion.label
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{once:false}}
               className="font-medium text-[13px] md:text-[16px] leading-[80%] text-[#000000] ">
              Enter email
            </motion.label>

            <motion.div
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{once:false}}
            className="flex flex-col gap-5 md:flex-row md:gap-[30px] items-center">
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-[100%] md:w-[75%] px-[25px] py-[14px] rounded-full border border-[#000000]/20 bg-[#000000]/1 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#000000]/50 focus:border-transparent"
              />

              <button className="BtnAnimation border-0 rounded-[50px] border-[#000000] bg-[#000000] text-[#FFFFFF] px-[20px] py-[7px] md:px-[40px] md:py-[14px]">
                Book
              </button>
            </motion.div>
          </div>

          {/* Second div */}
          <div className="w-[70%] md:w-[34.86%] aspect-[4/5] overflow-hidden relative order-1 md:order-2 shrink-0">
            <Image
              src={ImageRight}
              alt="Visit Store"
              fill
              className="object-cover"
            />
          </div>
        </div>
      {/* </ContainerLayout> */}
    </section>
  );
}