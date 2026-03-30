'use client';
import { useRef, useEffect, useState } from "react";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DiamondSpotLightImage from '@/public/assets/img/DiamondSpotlight/DiamondSpotlight.png'
import DiamondSpotLightColoredImage from '@/public/assets/img/DiamondSpotlight/DiamondSpotlightColored.png'

export default function DiamondSpotlight() {
  const router = useRouter();

  const [maskSize, setMaskSize] = useState("26% 37%");

  useEffect(() => {
    const updateMaskSize = () => {
      if (window.innerWidth < 640) {
        setMaskSize("207px 199px");
      } else {
        setMaskSize("26% 37%");
      }
    };

    updateMaskSize();
    window.addEventListener("resize", updateMaskSize);

    return () => window.removeEventListener("resize", updateMaskSize);
  }, []);


  const elementRef = useRef<HTMLDivElement>(null);
  const coloredImageRef = useRef<HTMLImageElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const captureMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current || !coloredImageRef.current || !borderRef.current) return;

    const element = elementRef.current.getBoundingClientRect();
    const x = (e.clientX - element.left) - 150;
    const y = (e.clientY - element.top) - 150;

    coloredImageRef.current.style.setProperty('--position', `${x}px ${y}px`);
    borderRef.current.style.setProperty('--translate', '0% 0%');
    borderRef.current.style.setProperty('--top', `${y}px`);
    borderRef.current.style.setProperty('--left', `${x}px`);
  };

  return (
    <section
      className="w-full relative h-[100svh] md:h-auto overflow-hidden"
      ref={elementRef}
      onMouseMove={captureMousePosition}
      data-theme="dark"
    >

      <Image
        src={DiamondSpotLightImage}
        alt="diamond spotlight"
        className="w-full h-full object-cover md:object-fill"
      />

      <Image
        ref={coloredImageRef}
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black, black)',
          maskImage: 'linear-gradient(to right, black, black)',
          maskRepeat: 'no-repeat',
          maskSize: maskSize,
          maskPosition: 'var(--position, center)',
        }}
        src={DiamondSpotLightColoredImage}
        alt="diamond spotlight colored"
        className="absolute inset-0 w-full h-full object-cover md:object-fill"
      />

      <div
        ref={borderRef}
        style={{
          top: 'var(--top, 50%)',
          left: 'var(--left, 50%)',
          translate: 'var(--translate, -50% -50%)'
        }}
        className={`absolute ${maskSize === "207px 199px" ? "w-[207px] h-[199px]" : "w-[26%] h-[37%]"} border border-[#FFFFFF] rounded-sm`}
      ></div>

      <div className="absolute inset-0 z-10 w-full h-full flex justify-center items-center mt-[50%] md:mt-[20%]">
        <div className="flex flex-col justify-between items-center w-[50%] md:w-[45%] gap-6 md:gap-4 mt-4">
          <h2 className="font-medium text-xl md:text-[40px] leading-[120%] md:leading-[100%] uppercase text-[#EFFFFF] text-center">
            Designed for you. Crafted for a lifetime.
          </h2>
          <div onClick={() => router.push("/collections/rings")}>
            <PrimaryBtn text="DISCOVER MORE" textColor="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}