"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion } from "framer-motion";

export default function VisitStore() {

    const ImageRight = '/assets/img/About/VisitStore/ImageRight.jpg';

  return (
    <div className="w-full ">
      <ContainerLayout>
        <div className=" w-full flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap  pb-[10%] md:pb-0">
          {/* First div */}
          <div className="flex flex-col w-full gap-3 md:gap-5 order-2 md:order-1 ">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{once:false}}
              className="md:font-medium md:text-[40px] md:leading-[100%] uppercase text-[#000000]">
              Visit Our Store
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{once:false}}
              className="text-[13px] md:text-[20px] md:leading-[100%] text-[#000000] w-full ">
              {/* Placeholder content */}
              Step into our boutique to experience Dia Diamonds as it’s meant to be.
            </motion.p>

            <motion.label
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{once:false}}
               className="font-medium text-[13px] md:text-[16px] leading-[100%] text-[#000000] ">
              Enter email
            </motion.label>

            <motion.div
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{once:false}}
            className="flex gap-[30px] items-center">
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-[80%] px-[25px] py-[14px] rounded-full border border-[#000000]/20 bg-[#000000]/1 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-[#000000]/50 focus:border-transparent"
              />

              <button className=" BtnAnimation border-0 rounded-[50px] border border-[#000000] bg-[#000000] text-[#FFFFFF] px-[40px] py-[14px]">
                Book
              </button>
            </motion.div>
          </div>

          {/* Second div */}
          <div className="w-full overflow-hidden order-1 md:order-2">
            <img
              src={ImageRight}
              alt="Visit Store"
              className="ml-0 md:ml-auto w-[80%] aspect-square object-contain hover:scale-110 transition-transform duration-300 ease-in-out delay-100"
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}