"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {

  const currentPath = usePathname();

  const logo = "/assets/img/DiaDiamondLogo.png";
  const diamond = "/assets/img/Diamond.png";
  const singleSparkle = '/assets/img/singleSparkle.png';

  return (
    <footer className="w-full min-h-[50dvh] bg-[#0b0b0b] px-10 pt-10 pb-[27px]">
      
      {/* ================= NAV ================= */}
      <ul className="flex items-center gap-[13px] ">
        <li
          className={`font-medium text-xs md:text-[16px] leading-xl cursor-pointer hover:scale-110 active:scale-100 ${
            currentPath === "/" ? "text-[#FFFFFF]" : "text-[#717580]"
          }`}
        >
          <a href="/">Home</a>
          
        </li>
        <li
          className={`font-medium text-xs md:text-[16px] leading-xl cursor-pointer hover:scale-110 active:scale-100 ${
            currentPath === "/Collections"
              ? "text-[#FFFFFF]"
              : "text-[#717580]"
          }`}
        >
          Collections
        </li>
        <li
          className={`font-medium text-xs md:text-[16px] leading-xl cursor-pointer hover:scale-110 active:scale-100 ${
            currentPath === "/Precision"
              ? "text-[#FFFFFF]"
              : "text-[#717580]"
          }`}
        >
          <a href="/precision">Precision</a>
        </li>
        <li
          className={`font-medium text-xs md:text-[16px] leading-xl cursor-pointer hover:scale-110 active:scale-100 ${
            currentPath === "/About"
              ? "text-[#FFFFFF]"
              : "text-[#717580]"
          }`}
        >
          <a href="/about">About Us</a>
        </li>
        <li
          className={`font-medium text-xs md:text-[16px] leading-xl cursor-pointer hover:scale-110 active:scale-100 ${
            currentPath === "/Contact"
              ? "text-[#FFFFFF]"
              : "text-[#717580]"
          }`}
        >
          Contact Us
        </li>
      </ul>

      {/* ================= CUSTOMER SERVICE ================= */}
      
      <div className="flex flex-col py-10 justify-start items-start md:justify-end md:items-end -mt-6 md:mt-0">
        <h3 className='text-[13px] md:text-[20px] text-[#FFFFFF] leading-[140%] '>CUSTOMER SERVICE</h3>
        <a className='text-[10px] md:text-[16px] text-[#737373] underline cursor-pointer'>Return Policy</a>
        <a className='text-[10px] md:text-[16px] text-[#737373] underline cursor-pointer'>Shipping Policy</a>
        <a className='text-[10px] md:text-[16px] text-[#737373] underline cursor-pointer'>Privacy Policy</a>
      </div>

      {/* ================= LOGO ================= */}
      <div className="relative flex flex-col mx-auto pt-17 pb-3 items-center justify-center gap-1  mt-[-14%]">
        <img
          className="w-[60px] aspect-square"
          src={diamond}
          alt="diamond"
        />

        <motion.img
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1.2}}
        transition={{duration:0.5, delay:0.2, ease:'easeInOut', repeat:2, repeatType:'reverse'}}
        viewport={{once:false}}

        className="absolute top-[25%] left-[48%] w-14 aspect-square"
        src={singleSparkle} alt=""/>

        <img
          className="w-[146.38px] h-[94.72px]"
          src={logo}
          alt="logo"
        />
      </div>

      {/* ================= INFO SECTION ================= */}
<div className="flex flex-row md:flex-row md:flex-nowrap justify-between items-stretch w-full pb-9">
  
  {/* Head Office */}
  <div className="w-1/2 pr-3 pt-4 md:pt-0">
    <h2 className="text-[13px] uppercase font-medium lg:text-xl md:text-base leading-[100%] text-[#FFFFFF] pb-[6px] text-left">
      Head Office
    </h2>
    <p className="text-[10px] md:w-[55%] md:text-sm lg:text-[18px] leading-[120%] text-[#737373] text-left">
      2nd Floor, Crystal Plaza Heritage Road,
      Coimbatore, India - 600 548
    </p>
  </div>

  {/* Contacts */}
  <div className="w-1/2 pl-3 pt-4 md:pt-0">
    <h2 className="text-[13px] uppercase font-medium lg:text-xl md:text-base leading-[100%] text-[#FFFFFF] pb-[6px] text-center md:text-right">
      Contacts
    </h2>

    <p  className="text-[10px] m-0 md:text-sm lg:text-[18px] leading-[120%] text-[#737373] cursor-pointer text-center md:text-right hover:underline">
      <a href="tel:987654321" target="_blank">
        +91 98765 43021
      </a>
    </p>

    <p className="text-[10px] m-0 md:text-sm lg:text-[18px] leading-[120%] text-[#737373] cursor-pointer hover:underline text-center md:text-right">
      <a href="http://hello@diadiamonds.com" target="_blank">
        hello@diadiamonds.com
      </a>
    </p>
  </div>

</div>
      {/* ================= DIVIDER ================= */}
      <div className="w-full border-t-[0.5px] border-[#FFFFFF]"></div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="w-full flex flex-col items-center justify-center gap-0 md:flex-row md:items-center md:justify-between pt-5">
        <p className="font-medium text-[15px] md:text-sm lg:text-[18px] leading-none text-[#FFFFFF] text-center md:text-left">
          © 2026 Dia Diamonds . All Rights Reserved.
        </p>
        <span
          className="font-medium text-[10px] md:text-sm lg:text-[18px] leading-none text-[#FFFFFF] text-center md:text-right"
        >
          Designed & Developed By <a href="https://www.theinternetcompany.one/" target="_blank" className="cursor-pointer hover:underline">TIC Global Services</a>
        </span>
      </div>

    </footer>
  );
}