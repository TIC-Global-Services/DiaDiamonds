"use client";

import { Parallax } from "react-scroll-parallax";
import PrimaryBtn from "../Reusable/PrimaryBtn";

const Hero = () => {

  const heroImage = '/assets/img/Hero/HeroImage.jpg';


  return (

    

        <section className="w-full h-[120vh]  overflow-hidden z-10" style={{scrollbarWidth:'none'}} data-theme="dark">
          <Parallax speed={-100} className="-translate-y-[40%]">
          
            <img 
              src={heroImage}
              alt="heroImage" 
              className="w-full md:h-full h-[120vh] object-cover object-center scale-110 md:scale-100 md:object-fill"
            />
          
            
            
            <div className="absolute w-full h-full bottom-0 left-0 ">

                <div className="w-full h-full flex flex-col gap-7 md:gap-[14px] justify-center items-center  md:items-start md:justify-end px-6 sm:px-[34px] md:px-10 lg:px-[56px] xl:px-[64px] 2xl:px-20 py-8 md:py-22 pt-[70%] md:pt-0">

                  <h1 className="text-center md:text-left font-medium text-[30px] md:text-[44px] md:leading-[46px] uppercase md:pb-[14px] text-[#FFFFFF] w-[90%] md:w-full">
                  Crafted to last forever
                </h1>

                <p className="w-full text-center w-[75%] md:w-[40%] md:text-left md:text-[22px] md:leading-[24px] text-[#FFFFFF] md:pb-[12px] tracking-[0%] " >
                  Iconic Brand Feel Designed to Shine Today And Endure Forever
                </p>


                <PrimaryBtn text="DISCOVER MORE" textColor="text-white" />
                   


                </div>
            </div>

            </Parallax>
            
        </section>
     
  )
}

export default Hero
