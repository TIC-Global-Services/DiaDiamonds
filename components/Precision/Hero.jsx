"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  // Background image path for the Hero section
  const bgImage = "/assets/img/Precision/Hero/bgImage.jpg";

  return (
    // Main hero container (relative for absolute overlay positioning)
    <div className="w-full h-[100svh] relative overflow-hidden">
      <Parallax speed={-20}>
      {/* Background Image */}
      
      <img
        src={bgImage}
        alt="Hero Background"
        className="w-full h-[100svh] md:h-full object-cover"
      />
      

      {/* Bottom overlay content */}
      <div className="absolute w-full h-2/5 bottom-20 left-0 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[#FFFFFF]">
            Lab Grown Diamonds
          </h2>
          <p className="text-[#FFFFFF]">
            A new way to shine
          </p>
        </div>
      </div>

      </Parallax>
    </div>
  );
}