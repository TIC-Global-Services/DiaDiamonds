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
  const [offsetX, setOffsetX] = useState(150);
  const [offsetY, setOffsetY] = useState(150);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMaskSize = () => {
      if (window.innerWidth < 640) {
        setMaskSize("114px 104px");
        setOffsetX(57);
        setOffsetY(52);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setMaskSize("220px 220px");
        setOffsetX(110);
        setOffsetY(110);
        setIsMobile(false);
      } else {
        setMaskSize("300px 300px");
        setOffsetX(150);
        setOffsetY(150);
        setIsMobile(false);
      }
    };

    updateMaskSize();
    window.addEventListener("resize", updateMaskSize);
    return () => window.removeEventListener("resize", updateMaskSize);
  }, []);

  const elementRef = useRef<HTMLDivElement>(null);
  const coloredImageRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const captureMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current || !coloredImageRef.current || !borderRef.current) return;

    const element = elementRef.current.getBoundingClientRect();
    const x = (e.clientX - element.left) - offsetX;
    const y = (e.clientY - element.top) - offsetY;

    coloredImageRef.current.style.setProperty('--position', `${x}px ${y}px`);
    borderRef.current.style.setProperty('--translate', '0% 0%');
    borderRef.current.style.setProperty('--top', `${y}px`);
    borderRef.current.style.setProperty('--left', `${x}px`);
  };

  return (
    <section
      className="w-full relative h-[100dvh] md:h-[150dvh] overflow-hidden"
      ref={elementRef}
      onMouseMove={captureMousePosition}
      data-theme="dark"
    >
      {/* Base Image */}
      <Image
        src={DiamondSpotLightImage}
        alt="diamond spotlight"
        fill
        priority
        className="w-full h-full object-cover"
      />

      {/* Colored Reveal Image */}
      <div
        ref={coloredImageRef}
        className="absolute inset-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black, black)',
          maskImage: 'linear-gradient(to right, black, black)',
          maskRepeat: 'no-repeat',
          maskSize: maskSize,
          maskPosition: 'var(--position, center)',
        }}
      >
        <Image
          src={DiamondSpotLightColoredImage}
          alt="diamond spotlight colored"
          fill
          className="object-cover w-full h-full" 
        />
      </div>

      {/* Spotlight Border Box */}
      <div
        ref={borderRef}
        style={{
          top: 'var(--top, 50%)',
          left: 'var(--left, 50%)',
          translate: 'var(--translate, -50% -50%)',
          width: isMobile ? '114px' : maskSize.split(' ')[0],
          height: isMobile ? '104px' : maskSize.split(' ')[1],
        }}
        className="absolute border border-white rounded-sm z-10"
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 w-full h-full flex justify-center items-end pb-[8%] md:pb-[5%]">
        <div className="flex flex-col justify-between items-center w-[90%] sm:w-[65%] md:w-[45%] gap-4">
          <h2 className="font-medium text-3xl sm:text-xl md:text-[40px] leading-[100%] tracking-tight md:leading-[100%] uppercase text-[#EFFFFF] text-center">
            Designed for you.<br />
            <span className="hidden md:inline">Crafted for a lifetime.</span>
            <span className="md:hidden">Crafted for a<br />lifetime.</span>
          </h2>
          <div onClick={() => router.push("/collections/rings")}>
            <PrimaryBtn text="DISCOVER MORE" textColor="text-white" hoverColor="rgba(217, 217, 217, 1)" hoverTextColor="black"/>
          </div>
        </div>
      </div>
    </section>
  );
}