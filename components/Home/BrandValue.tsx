"use client";

import {useEffect, useRef} from "react";
import { gsap } from "gsap"
import { Parallax } from "react-scroll-parallax";

export default function BrandValue(){

    const BrandValueImg = '/assets/img/BrandValue/BrandValue.png';
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        if(!containerRef.current) return;
    
        gsap.to(containerRef.current, {
          y:'-50',
          ease:"none",
          scrollTrigger:{
            trigger:containerRef.current,
            start:"top bottom",
            end:"bottom top",
            scrub:1,
          }
        })
      },[])
    return(
        <div className="w-full h-[100vh] md:h-[150vh]  relative overflow-hidden ">

            <div ref={containerRef} className="w-[150%] h-full ">
                <Parallax speed={-10}>
                <img 
                src={BrandValueImg} 
                alt="Brand Value" 
                className="w-full h-full  object-cover object-center md:-translate-y-1/6 md:-translate-x-1/5 relative  "
            />
            </Parallax>
            </div>
            

            <div className="absolute right-0 bottom-0 mb-[10vw]  inline-block px-6 xl:px-[4.58vw] lg:px-[50px]">
                <div className="">
                    <h2 className=" font-medium text-[40px] leading-[123%] uppercase text-[#000000]">
                    Thoughtfully curated for you 
                </h2>

                <p className="text-[20px] leading-[140%] text-[#000000]/70 pt-[10px]">
                    Your diamond journey starts here.  Where brilliance meets craftsmanship,<br /> and every sparkle tells your story.
                </p>

                <button className="BtnAnimation mt-[22px] cursor-pointer bg-[#FFFFFFFF]/50 w-[138px] h-[39px] rounded-full px-[30px] py-[12px] font-medium text-[12px] leading-[100%] text-[#000000] uppercase">
                    LEARN MORE
                </button>
                </div>

            </div>

        </div>
    )
}
