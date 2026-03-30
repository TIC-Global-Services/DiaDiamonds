"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { Parallax } from "react-scroll-parallax";

export default function OurRoots() {

    const ImageLeft = '/assets/img/About/OurRoots/ImageLeft.png';
    const ProfileImage = '/assets/img/About/OurRoots/ProfileImage.jpg';

    return (
      <section data-theme="light" className="w-full h-[100svh] md:h-auto flex flex-col md:flex-row relative">

        {/* Left image */}
        <div className="w-full md:w-1/2  
                        h-screen md:h-auto 
                        md:relative absolute top-0 left-0 z-0 overflow-hidden">

          <Parallax speed={-20} className="w-full h-full">
          <img
            src={ImageLeft}
            alt="Our Roots"
            className="w-full h-full object-cover md:object-cover hover:scale-105 transition-transform duration-500"
          />
          </Parallax>
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 relative z-10 my-auto md:my-0">
          <ContainerLayout>
            <div className="w-full flex flex-col justify-center items-center md:items-center gap-4 md:gap-8
                            px-6 py-[10%] md:py-20 
                            bg-white/50 backdrop-blur-xs md:bg-transparent md:backdrop-blur-0 rounded-[20px]">
              {/* Profile Image */}
              <img
                src={ProfileImage}
                alt="Profile Image"
                className="w-[60%] md:w-[30%] aspect-182/174 md:aspect-[190/174] border-0 rounded-[30px] object-cover"
              />

              {/* Heading */}
              <h2 className="font-medium text-2xl md:text-[40px] leading-[120%] md:leading-[100%] uppercase text-[#000000] pt-4 md:pt-0">
                Our Roots
              </h2>

              {/* Paragraph */}
              <p className="font-light text-xs md:text-[20px] leading-[140%] md:leading-[140%] text-center text-[#000000]/50 md:text-left">
                Our story begins with <span className="font-bold text-xs md:text-[20px] leading-[100%] text-[#000000]">V Nataraja Mudaliar and Sons Jewellers</span>, a name that has earned generations of confidence through fine jewellery, ethical practices, and timeless design. For decades, the brand has stood as a symbol of reliability and refined craftsmanship, shaping jewellery that families return to, time and again.
              </p>
            </div>
          </ContainerLayout>
        </div>

      </section>
    );
}