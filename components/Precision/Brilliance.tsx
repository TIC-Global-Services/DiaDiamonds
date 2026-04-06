"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../Reusable/GlassCard";
import Image from "next/image";

const Brilliance: React.FC = () => {
  const bgImage: string = "/assets/img/Precision/Brilliance/bgImage.png";

  return (
    <section
      data-theme="light"
      className="w-full relative bg-[linear-gradient(180deg,#F8CC96_0%,#F8D8B1_0.01%,#F7E7D3_0.02%,#F7EAD9_0.03%,#F7F6F4_100%)] py-14 md:py-[5%] px-6 sm:px-6 lg:px-[10.56%]"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-[24px] md:text-[40px] font-medium tracking-tight pb-8 md:pb-[2.47%]"
      >
        THE ART OF CHOOSING BRILLIANCE
      </motion.h2>

      {/* MOBILE LAYOUT  */}
      <div className="flex flex-col justify-between md:hidden">

        {/* Top LEFT card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full justify-start p-2 flex"
        >
          <GlassCard className="w-[75%] bottom-0 self-start p-2 bg-transparent
              backdrop-blur-md
              border-t border-b border-white/90
              shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)] z-50">
            <h3 className="text-[16px] text-[#000000] pb-2">
              Luxury That Makes Sense
            </h3>
            <p className="text-[12px] text-[#5E5E5E] leading-[1.5]">
              True sophistication is choosing wisely.
              Lab grown diamonds combine advanced science with timeless beauty,
              offering exceptional value today and pride of ownership tomorrow.
              It's a purchase that feels as good as it looks.
            </p>
          </GlassCard>
        </motion.div>

        {/* Center image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full aspect-[669/650] justify-center relative h-[50dvh]"
        >
          <Image
            src={bgImage}
            alt="Diamond Brilliance"
            fill
            className="object-cover rounded-[12px]"
            priority
          />
        </motion.div>

        {/* Bottom RIGHT card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="w-full flex pb-4 justify-end"
        >
          <GlassCard className="w-[75%] self-end p-4 bg-transparent
            backdrop-blur-md
            border-t border-b border-white/90
            shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]">
            <h3 className="text-[16px] text-[#000000] pb-2">
              Greater Diamond, Greater Value
            </h3>
            <p className="text-[12px] text-[#5E5E5E] leading-[1.5]">
              With lab grown diamonds, your investment goes directly into size,
              brilliance, and quality not inflated mining costs. You enjoy a
              larger, finest diamond for the same budget. Smart buying becomes
              visible luxury.
            </p>
          </GlassCard>
        </motion.div>
      </div>

      {/* TABLET / DESKTOP LAYOUT */}
      <div className="hidden md:block relative w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">

        {/* BG IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[75%] lg:w-[58.96%] mx-auto aspect-[669/650] relative"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={bgImage}
              alt="Diamond Brilliance"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Absolutely positioned cards */}
        <div className="absolute inset-0">

          {/* Left Text box – Luxury That Makes Sense */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="absolute top-[15%] left-0 md:top-[2%] md:left-[0%] lg:top-[3.1%] lg:left-[0%] w-[45%] lg:w-[35%]"
          >
            <GlassCard className="w-full p-5 lg:p-6 border-0 rounded-[16px] lg:rounded-[20px] bg-transparent
              backdrop-blur-md
              border-t border-b border-white/90
              shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]">
              <h3 className="text-[18px] lg:text-[20px] text-[#000000] pb-2 lg:pb-[3.43%]">
                Luxury That Makes Sense
              </h3>
              <p className="text-[13px] lg:text-[14px] tracking-[0%] text-[#5E5E5E] leading-[1.5]">
                True sophistication is choosing wisely.
                Lab grown diamonds combine advanced science with timeless beauty,
                offering exceptional value today and pride of ownership tomorrow.
                It's a purchase that feels as good as it looks.
              </p>
            </GlassCard>
          </motion.div>

          {/* Right Text box – Greater Diamond, Greater Value */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="absolute top-[40%] right-0 md:top-[63.92%] lg:top-[45.92%] lg:right-[0%] w-[45%] lg:w-[35%]"
          >
            <GlassCard className="w-full p-5 lg:p-6 border-0 rounded-[16px] lg:rounded-[20px] bg-transparent
              backdrop-blur-md
              border-t border-b border-white/90
              shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]">
              <h3 className="text-[18px] lg:text-[20px] text-[#000000] pb-2 lg:pb-[3.43%]">
                Greater Diamond,<br /> Greater Value
              </h3>
              <p className="text-[13px] lg:text-[14px] tracking-[0%] text-[#5E5E5E] leading-[1.5]">
                With lab grown diamonds, your investment goes directly into size,
                brilliance, and quality not inflated mining costs. You enjoy a
                larger, finest diamond for the same budget. Smart buying becomes
                visible luxury.
              </p>
            </GlassCard>
          </motion.div>

          {/* Bottom Middle box – Beauty Without Compromise (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block absolute top-[67%] left-[12%] w-[35%]"
          >
            <GlassCard className="w-full p-6 border-0 rounded-[20px] bg-transparent
              backdrop-blur-md
              border-t border-b border-white/90
              shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]">
              <h3 className="text-[20px] text-[#000000] pb-[3.43%]">
                Beauty Without Compromise
              </h3>
              <p className="text-[14px] tracking-[0%] text-[#5E5E5E] leading-[1.5]">
                Every Dia diamond delivers the same fire, strength, and certification as a mined stone.
                The difference lies only in origin, never in elegance.
                You gain pure brilliance with modern intelligence behind your choice.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brilliance;