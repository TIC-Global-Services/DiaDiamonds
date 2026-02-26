'use client';
import { useRef, useEffect, useState } from "react";

export default function DiamondSpotlight() {

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

  const DiamondSpotLightImage = '/assets/img/DiamondSpotlight/DiamondSpotlight.png';
  const DiamondSpotLightColoredImage = '/assets/img/DiamondSpotlight/DiamondSpotlightColored.png';

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
    <div
      className="w-full relative h-[100vh] md:h-auto overflow-hidden"
      ref={elementRef}
      onMouseMove={captureMousePosition}
    >

      <img
        src={DiamondSpotLightImage}
        alt="diamond spotlight"
        className="w-full h-full object-cover md:object-fill"
      />

      <img
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

      <div className="absolute inset-0 z-10 w-full h-full flex justify-center items-center mt-[20%]">
        <div className="flex flex-col justify-between items-center w-full md:w-[40%]">
          <h2 className="md:font-medium md:text-[40px] md:leading-[100%] uppercase text-[#EFFFFF] text-center">
            Designed for you. <br /> Crafted for a lifetime.
          </h2>
          <button className="BtnAnimation mt-5 w-[213px] h-[44px] border tracking-[0.166rem] border-[#FFFFFF]/10 text-[#e7dfd7] bg-[#FFFFFF]/4 rounded-full hover:cursor-pointer">
            <a href="https://www.chopard.com/en-in/jewellery-happy-hearts" target="_blank">
              DISCOVER MORE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}