"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import modelImage from '@/public/assets/img/Popup/PopupModel.png';
import logo from '@/public/assets/img/DiaDiamondLogoBlack.png';
import diamondLogo from '@/public/assets/img/Diamond.png';
import PrimaryBtn from "./PrimaryBtn";
import { useRouter } from "next/navigation";

export default function WelcomePopup() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const closePopup = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/20 backdrop-blur-sm px-4 pt-8"
      onClick={closePopup}
    >
      {/* Popup card */}
      <div
        className="
          relative 
          flex flex-col md:flex-row 
          w-full max-w-5xl 
          h-[60vh] md:h-[80vh] 
          bg-white overflow-hidden 
          rounded-lg
        "
        onClick={(e) => e.stopPropagation()}
      >        
      {/* Content */}
        <div className="flex flex-col justify-center items-center text-center md:text-left px-6 sm:px-10 py-10 md:py-0 md:w-1/2">
          
          <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-2">
            WAIT!
          </h1>

          <p className="font-light text-lg sm:text-xl md:text-2xl text-gray-900 mb-6 leading-snug">
            Save 25% on your first order
          </p>

          <PrimaryBtn
            onClick={() => router.push("/collections/rings")}
            className="
              w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]
              bg-[#431A1A] text-white uppercase
              hover:text-black
              text-sm sm:text-base md:text-lg
              py-3 md:py-4
              rounded-full
            "
          >
            See the category
          </PrimaryBtn>
        </div>


        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-3 left-4 z-10 text-xs cursor-pointer text-black hover:text-gray-700 tracking-widest"
        >
          [CLOSE]
        </button>

        {/* Image FIRST on mobile */}
        <div className="relative w-full h-[650%] md:h-full md:w-1/2 bg-[#d4b5a0]">
          <Image
            src={modelImage}
            alt="model"
            fill
            className="object-cover"
            priority
          />

          {/* Logo */}
          <div className="absolute bottom-3 right-3 flex items-center">
            <Image
              src={diamondLogo}
              alt="diamond"
              className="w-8 md:w-10 h-auto"
            />
            <Image
              src={logo}
              alt="logo"
              className="w-10 md:w-12 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}