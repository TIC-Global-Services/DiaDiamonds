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
        <motion.svg
         initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1.2}}
        transition={{duration:0.5, delay:0.2, ease:'easeInOut', repeat:2, repeatType:'reverse'}}
        viewport={{once:false}}
        
        className="absolute top-[20%] left-[46%] w-[60px] aspect-square"
        viewBox="0 0 239 239" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dddddd_505_3866)"><path d="M108.415 119.416C116.076 119.416 119.415 116.193 119.415 108.416C119.415 116.193 122.731 119.416 130.415 119.416C122.731 119.416 119.415 122.731 119.415 130.416C119.415 122.731 116.076 119.416 108.415 119.416Z" fill="white"/></g><g filter="url(#filter1_dddddd_505_3866)"><path d="M98.415 110.916C100.156 110.916 100.915 110.183 100.915 108.416C100.915 110.183 101.669 110.916 103.415 110.916C101.669 110.916 100.915 111.669 100.915 113.416C100.915 111.669 100.156 110.916 98.415 110.916Z" fill="white"/></g><g filter="url(#filter2_dddddd_505_3866)"><path d="M105.415 106.916C107.156 106.916 107.915 106.183 107.915 104.416C107.915 106.183 108.669 106.916 110.415 106.916C108.669 106.916 107.915 107.669 107.915 109.416C107.915 107.669 107.156 106.916 105.415 106.916Z" fill="white"/></g><g filter="url(#filter3_dddddd_505_3866)"><path d="M137.415 111.916C139.156 111.916 139.915 111.183 139.915 109.416C139.915 111.183 140.669 111.916 142.415 111.916C140.669 111.916 139.915 112.669 139.915 114.416C139.915 112.669 139.156 111.916 137.415 111.916Z" fill="white"/></g><g filter="url(#filter4_dddddd_505_3866)"><path d="M115.415 135.916C117.156 135.916 117.915 135.183 117.915 133.416C117.915 135.183 118.669 135.916 120.415 135.916C118.669 135.916 117.915 136.669 117.915 138.416C117.915 136.669 117.156 135.916 115.415 135.916Z" fill="white"/></g><defs><filter id="filter0_dddddd_505_3866" x="-0.000480652" y="7.62939e-06" width="238.831" height="238.831" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="1.29066"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="2.58132"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect1_dropShadow_505_3866" result="effect2_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="9.03463"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect2_dropShadow_505_3866" result="effect3_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="18.0693"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect3_dropShadow_505_3866" result="effect4_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="30.9759"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect4_dropShadow_505_3866" result="effect5_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="54.2078"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect5_dropShadow_505_3866" result="effect6_dropShadow_505_3866"/><feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_505_3866" result="shape"/></filter><filter id="filter1_dddddd_505_3866" x="73.215" y="83.2155" width="55.4" height="55.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="0.3"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="0.6"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect1_dropShadow_505_3866" result="effect2_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="2.1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect2_dropShadow_505_3866" result="effect3_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="4.2"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect3_dropShadow_505_3866" result="effect4_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="7.2"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect4_dropShadow_505_3866" result="effect5_dropShadow_505_3866"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="12.6"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect5_dropShadow_505_3866" result="effect6_dropShadow_505_3866"/><feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_505_3866" result="shape"/></filter></defs>
        </motion.svg>

        <motion.svg 

        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1.2}}
        transition={{duration:0.5, delay:0.2, ease:'easeInOut', repeat:2, repeatType:'reverse'}}
        viewport={{once:false}}

        className='absolute top-[-10%] left-[41%] '

        width="239" height="239" viewBox="0 0 239 239" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dddddd_505_3861)"><path d="M108.415 119.416C116.076 119.416 119.415 116.193 119.415 108.416C119.415 116.193 122.731 119.416 130.415 119.416C122.731 119.416 119.415 122.731 119.415 130.416C119.415 122.731 116.076 119.416 108.415 119.416Z" fill="white"/></g><defs><filter id="filter0_dddddd_505_3861" x="-0.000480652" y="7.62939e-06" width="238.831" height="238.831" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="1.29066"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_505_3861"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="2.58132"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect1_dropShadow_505_3861" result="effect2_dropShadow_505_3861"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="9.03463"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect2_dropShadow_505_3861" result="effect3_dropShadow_505_3861"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="18.0693"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect3_dropShadow_505_3861" result="effect4_dropShadow_505_3861"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="30.9759"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect4_dropShadow_505_3861" result="effect5_dropShadow_505_3861"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="54.2078"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend mode="normal" in2="effect5_dropShadow_505_3861" result="effect6_dropShadow_505_3861"/><feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_505_3861" result="shape"/></filter></defs></motion.svg>

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