"use client";

import ContainerLayout from '@/layout/ContainerLayout'
import { useEffect, useRef } from "react";
import { gsap } from 'gsap/gsap-core';


const Hero = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  const heroImage = '/assets/img/Hero/HeroImage.jpg';

  useEffect(()=>{
    if(!containerRef.current) return;

    gsap.to(containerRef.current, {
      y:'-100',
      ease:"none",
      scrollTrigger:{
        trigger:containerRef.current,
        start:"top bottom",
        end:"bottom top",
        scrub:1,
      }
    })
  },[])

  return (
        <div ref={containerRef} className="w-full h-dvh relative overflow-hidden">
            <img 
              src={heroImage}
              alt="heroImage" 
              className="w-full h-full object-fill scale-130"
            />
            
            <div className="absolute bottom-[60px]  px-6 xl:px-[105px] lg:px-[50px]">
                
                <h1 className="font-medium text-[44px] leading-[46px] uppercase pb-[14px] text-[#FFFFFF]">
                  Crafted to last forever
                </h1>

                <p className="w-[70%] text-[22px] leading-[24px] text-[#FFFFFF] pb-[24px]">
                  Iconic Brand Feel Designed to Shine Today And Endure Forever
                </p>

                <button className="w-[213px] h-[44px] border border-[1px] backdrop-blur-md border-[#FFFFFF]/.1 text-[#e7dfd7] bg-[#000000]/10 rounded-full hover:cursor-pointer hover:scale-110 active:scale-100">
                    DISCOVER MORE
                </button>

            </div>

        </div>
  )
}

export default Hero
