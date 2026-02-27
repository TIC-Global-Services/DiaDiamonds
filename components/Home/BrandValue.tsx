"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Parallax } from "react-scroll-parallax";
import { div } from "framer-motion/client";

export default function BrandValue() {
  const BrandValueImg = '/assets/img/BrandValue/BrandValue.png';


  return(
    <div className="relative w-full h-auto ">
      <img src={BrandValueImg} alt="Rings Image" className=" w-full h-auto " />

      <div className="w-full md:w-[48%] absolute bottom-0 right-0 md:mb-[16.25%]  flex flex-col justify-center md:justify-normal items-start">
        <h2>Thoughtfully curated for you </h2>
        <p>Your diamond journey starts here. Where brilliance meets craftsmanship, and every sparkle tells your story.</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  )
}