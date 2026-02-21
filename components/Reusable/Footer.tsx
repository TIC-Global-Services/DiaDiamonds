"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Footer() {

  const currentPath = usePathname();

  const logo = "/assets/img/DiaDiamondLogo.png";
  const diamond = "/assets/img/Diamond.png";

  return (
    <footer className="w-full min-h-[50dvh] bg-[#0b0b0b] px-10 pt-10 pb-[27px]">
      <ul className="flex items-center gap-[13px] ">
        <li
          className={`font-medium text-xs md:text-[16px] leading-xl cursor-pointer hover:scale-110 active:scale-100 ${
            currentPath === "/" ? "text-[#FFFFFF]" : "text-[#717580]"
          }`}
        >
          Home
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
          Precision
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

      <div className="flex flex-col ml-auto py-3 flex-end items-end">
        <h3 className='text-[20px] text-[#FFFFFF] leading-[140%] '>CUSTOMER SERVICE</h3>
        <a className='text-[16px] text-[#737373] underline cursor-pointer'>Return Policy</a>
        <a className='text-[16px] text-[#737373] underline cursor-pointer'>Shipping Policy</a>
        <a className='text-[16px] text-[#737373] underline cursor-pointer'>Privacy Policy</a>
      </div>

      <div className="flex flex-col mx-auto pt-17 pb-3 items-center justify-center gap-1">
        <img
          className="w-[60px] aspect-square"
          src={diamond}
          alt="diamond"
        />
        <img
          className="w-[146.38px] h-[94.72px]"
          src={logo}
          alt="logo"
        />
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-between items-center w-full pb-9">
        <div className="flex mx-auto md:mx-0 md:block pt-4 md:pt-0">
          <div>
            <h2 className="uppercase font-medium lg:text-xl md:text-base leading-[100%] text-[#FFFFFF] pb-[6px] text-center md:text-left">
              Head Office
            </h2>
            <p className="md:w-[55%] md:text-sm lg:text-[18px] leading-[100%] text-[#737373] text-center md:text-left">
              2nd Floor, Crystal Plaza Heritage Road,
              Coimbatore, India - 600 548
            </p>
          </div>
        </div>

        <div className="flex mx-auto md:mx-0 md:block pt-4 md:pt-0">
          <div>
            <h2 className="uppercase font-medium lg:text-xl md:text-base leading-[100%] text-[#FFFFFF] pb-[6px] text-center md:text-right">
              Contacts
            </h2>
            <p className="md:text-sm lg:text-[18px] leading-[100%] text-[#737373] cursor-pointer  text-center md:text-right hover:underline">
              <a
              href="tel:987654321"
              target="_blank"
            >
              +91 98765 43021
            </a>
            </p>

            <p  className="md:text-sm lg:text-[18px] leading-[100%] text-[#737373] cursor-pointer hover:underline text-center md:text-right">
              <a
              href="http://hello@diadiamonds.com"
              target="_blank"
            >
              hello@diadiamonds.com
            </a>
            </p>
            
          </div>
        </div>
      </div>

      <div className="w-full border-t-[0.5px] border-[#FFFFFF]"></div>

      <div className="w-full flex items-center justify-between pt-5">
        <p className="font-medium text-xs md:text-sm lg:text-[18px] leading-5 text-[#FFFFFF]">
          © 2026 Dia Diamonds . All Rights Reserved.
        </p>
        <span
          
          
          className="font-medium text-xs md:text-sm lg:text-[18px] leading-5 text-[#FFFFFF]   text-right"
        >
          Designed & Developed By <a href="https://www.theinternetcompany.one/" target="_blank" className="cursor-pointer hover:underline">TIC Global Services</a>
        </span>
      </div>
    </footer>
  );
}
