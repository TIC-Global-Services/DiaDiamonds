"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisitStore() {

  const ImageRight = '/assets/img/About/VisitStore/ImageRight.jpg';

  return (
    <section data-theme="light" className="w-full py-10 md:py-16">
      
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 md:px-6">

        {/* Text Content */}
        <div className="flex flex-col w-full gap-4 md:gap-6 order-2 md:order-1">
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[24px] md:text-[40px] font-medium uppercase text-black leading-tight"
          >
            Visit Our Store
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[13px] md:text-[20px] text-black"
          >
            Step into our boutique to experience Dia Diamonds as it’s meant to be.
          </motion.p>

          <motion.label
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[13px] md:text-[16px] font-medium text-black"
          >
            Enter email
          </motion.label>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="w-full sm:flex-1 px-5 py-3 rounded-full border border-black/20  focus:outline-none focus:ring-2 focus:ring-black/50"
            />

            <button className="rounded-full bg-black text-white px-6 py-3 whitespace-nowrap">
              Book
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <div className="w-full md:w-[40%] aspect-[4/5] relative overflow-hidden order-1 md:order-2">
          <Image
            src={ImageRight}
            alt="Visit Store"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}