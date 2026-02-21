"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Arrivals() {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, {amount:0.2, once:false});
  const firstImage = '/assets/img/Arrivals/ArrivalsImg1.png'; 
  const secondImage = '/assets/img/Arrivals/ArrivalsImg2.png'; 

  return (
    <div ref={containerRef}  className="relative w-full h-screen flex flex-wrap md:flex-nowrap overflow-hidden">
      
      <motion.div  
      initial={{height:'10%'}}
       animate={isInView ? {height:'100%'}: {height:'10%'}}
       transition={{duration:1.2, ease:"easeInOut", delay:0.3}}
       viewport={{once:false}}
       
        className="overflow-hidden w-full md:w-1/2 h-1/2 md:h-[100px] ">
      <div className="relative w-full h-full hover:scale-110 delay-100 duration-300 ease-in-out">
        <img src={firstImage} alt="First Arrival" className="w-full h-full object-cover " />
        <h2 className="absolute inset-0 font-medium text-[40px] leading-[100%] text-[#FFFFFF] w-full h-full flex justify-center items-center uppercase">NEW ARRIVALS</h2>
      </div>
      </motion.div>

      <motion.div
      initial={{height:'10%'}}
       animate={isInView ? {height:'100%'}: {height:'10%'}}
       transition={{duration:1.2, ease:"easeInOut"}}
       viewport={{once:false}}

      className="absolute bottom-0 right-0 overflow-hidden w-full md:w-1/2 h-1/2 md:h-[100px]">
      <div className="w-full h-full relative hover:scale-110 delay-100 duration-300 ease-in-out ">
        <img src={secondImage} alt="Second Arrival" className=" w-full h-full object-cover " />
        <h2 className="absolute inset-0 font-medium text-[40px] leading-[100%] text-[#FFFFFF] w-full h-full flex justify-center items-center uppercase ">NEW COLLECTIONS</h2>
      </div>
      </motion.div>

    </div>
  );
}
