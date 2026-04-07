"use client";


import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { COLLECTION_CATEGORIES } from "@/types/product";
import { useState } from "react";
import { NAV_ITEMS } from "@/constants/Collections";
import Image from "next/image";
import logo from '@/public/assets/img/DiaDiamondLogo.png'
import diamond from '@/public/assets/img/Diamond.png'

export default function Footer() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const currentPath = usePathname();

  const customerLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Return Policy", href: "/return-policy" },
    { name: "Shipping Policy", href: "/shipping-policy" },
  ];


  return (
    <footer data-theme='dark' className="w-full min-h-auto bg-[#0b0b0b] px-2 md:px-6 pt-6 pb-2">

      {/* ================= NAV ================= */}
      <div className="flex pb-4 md:pb-6">
        <ul className="flex flex-wrap md:w-1/2 items-start justify-start md:justify-start md:items-start gap-x-4 gap-y-2 md:gap-6 w-full">
          {NAV_ITEMS.map((item) => {
            if (item.label === "Collections") {
              return (
                <li
                  key={item.label}
                  className="relative flex gap-2 md:gap-2 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {/* TEXT */}
                  <span className="text-[#717580] hover:text-white transition text-[14px] md:text-base">
                    Collections
                  </span>

                  {/* CHEVRON */}
                  <svg
                    className={`transition-transform mt-2 md:mt-2 duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>

                  {/* DROPDOWN */}
                  {isOpen && (
                    <div className="absolute top-[120%] left-0 md:left-auto md:right-0 min-w-[60px] bg-black border border-[#222] rounded-md shadow-lg z-[999]">
                      {COLLECTION_CATEGORIES.map((cat) => (
                        <div
                          key={cat.value}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                            router.push(`/collections/${cat.value}`);
                          }}
                          className="px-2 py-2 text-[12px] text-white/60 hover:text-white hover:bg-[#111] cursor-pointer capitalize"
                        >
                          {cat.label}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.label} className="whitespace-nowrap">
                <Link
                  href={item.href}
                  className={`${currentPath === item.href ? "text-white" : "text-[#717580]"
                    } hover:text-white transition text-[14px] md:text-base`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ================= CUSTOMER SERVICE ================= */}
        <div className="hidden md:w-1/2 md:flex order-3 md:order-1 flex-col items-end text-right">
          <h2 className='text-[13px] md:text-[20px] text-[#FFFFFF]'>
            CUSTOMER SERVICE
          </h2>

          {customerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={true}
              className="text-[10px] md:text-[16px] text-[#737373] underline cursor-pointer hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>


      {/* ================= LOGO ================= */}
      <div className="order-1 md:order-2 relative flex flex-col mx-auto pt-10 md:pt-0 pb-6 items-center justify-center gap-1 pointer-events-none">

        <Image
          className="w-[60px] aspect-square"
          src={diamond}
          alt="diamond"
        />

        {/* sparkle */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut', repeat: 2, repeatType: 'reverse' }}
          viewport={{ once: false }}
          className="absolute top-[20%] left-[46%] w-[60px] aspect-square"
          viewBox="0 0 239 239"
          fill="none"
        >
        </motion.svg>

        <Image
          className="w-[70px] h-[45px] md:w-[146.38px] md:h-[94.72px]"
          src={logo}
          alt="logo"
        />
      </div>


      {/* ================= INFO SECTION ================= */}
      <div className="order-2 md:order-3 flex flex-row md:flex-row w-full md:px-0 gap-0 py-0 md:py-0">

       {/* ================= HEAD OFFICE ================= */}
        <div className="flex flex-col items-start text-left gap-1.5 md:gap-3 w-1/3 md:w-1/2 md:pt-0">
          <h2 className="text-[12px] uppercase font-normal lg:text-xl md:text-base leading-[100%] text-[#FFFFFF]">
            Head Office
          </h2>

          <p className="text-[12px] md:w-[55%] md:text-sm lg:text-[18px] leading-[100%] tracking-tight text-[#737373]">
            2nd Floor, Crystal Plaza  Heritage Road, Coimbatore, India - 600 548
          </p>
        </div>

        
        {/* ================= MOBILE CUSTOMER SERVICE ================= */}
        <div className="flex flex-col items-center text-center md:hidden gap-1 w-1/3">
          <h2 className="text-[12px] font-normal pb-1 text-white">
            CUSTOMER SERVICE
          </h2>

          {customerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] underline decoration-solid leading-none tracking-tight text-[#737373] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

       {/* ================= CONTACTS ================= */}
        <div className="flex flex-col items-end text-right gap-1 w-1/3 md:w-1/2 md:pl-10 md:pt-0">
          <h2 className="text-[12px] uppercase lg:text-xl md:text-base leading-[120%] text-[#FFFFFF]">
            Contacts
          </h2>

          <p className="flex flex-col text-[12px] md:text-sm lg:text-[18px] text-[#737373] cursor-pointer tracking-tight leading-[140%] hover:underline">
            <a href="tel:987654321">
              +91 98765 43021
            </a>
            <a href="mailto:hello@diadiamonds.com">
              hello@diadiamonds.com
            </a>
          </p>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <hr className="w-full border-t-[0.5px] border-[white] my-2 md:my-6" />

      {/* ================= BOTTOM BAR ================= */}
      <div className="w-full flex flex-col items-center py-2 px-2 justify-start gap-1 md:gap-0 md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-[14px] md:text-sm lg:text-[18px] leading-tight text-[#FFFFFF] text-center md:text-left">
          © 2026 Dia Diamonds . All Rights Reserved.
        </p>
        <p className="font-medium text-[12px] md:text-sm lg:text-[18px] leading-tight text-[#FFFFFF] text-center md:text-right">
          Designed & Developed By{" "}
          <a
            href="https://www.theinternetcompany.one/"
            target="_blank"
            className="cursor-pointer hover:underline"
          >
            TIC Global Services
          </a>
        </p>
      </div>
    </footer>
  );
}