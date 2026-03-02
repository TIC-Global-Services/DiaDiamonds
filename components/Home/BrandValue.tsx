"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Parallax } from "react-scroll-parallax";
import PrimaryBtn from "../Reusable/PrimaryBtn";

export default function BrandValue() {
  const BrandValueImg = '/assets/img/BrandValue/BrandValue.png';


  return(
    <section data-theme="light" className="relative w-full h-[100vh] md:h-auto ">
      <img src={BrandValueImg} alt="Rings Image" className=" w-full h-[100vh] object-cover md:object-auto md:h-auto " />

      <div className="w-[59%] md:w-[48%] h-auto absolute bottom-0 right-0 mb-[55.34%] md:mb-[16.25%] mr-[1.18%] md:mr-0 flex flex-col justify-center md:justify-normal items-start">
        <h2>Thoughtfully curated for you </h2>
        <p className="leading-[100%] md:leading-[140%]">Your diamond journey starts here. Where brilliance meets craftsmanship, and every sparkle tells your story.</p>
        {/* <button className="BtnAnimation bg-[#FFFFFF]/50 rounded-full px-[4.49%] py-[2.18%] md:px-[2.08%] md:py-[0.83%] font-medium text-[12px] backdrop-blur-lg">LEARN MORE</button> */}
        <PrimaryBtn text="LEARN MORE" color="black" />
      </div>
    </section>
  )
}