'use client';
import { useRef } from "react";

export default function DiamondSpotlight() {
    const DiamondSpotLightImage = '/assets/img/DiamondSpotlight/DiamondSpotlight.png';
    const DiamondSpotLightColoredImage = '/assets/img/DiamondSpotlight/DiamondSpotlightColored.png';

    const elementRef = useRef(null);
    const coloredImageRef = useRef(null);
    const borderRef = useRef(null);

    const captureMousePosition = (e)=>{
      const element = elementRef.current.getBoundingClientRect();
      const x = (e.clientX - element.left)-150;
      const y = (e.clientY - element.top)-150;
      console.log(`position is x:${x} y:${y}`);
      coloredImageRef.current.style.setProperty('--position', `${x}px ${y}px`);
      borderRef.current.style.setProperty('--translate', '0% 0%');
      borderRef.current.style.setProperty('--top', `${y}px`);
      borderRef.current.style.setProperty('--left', `${x}px`);
    }

  return (
    <div className="w-full h-[100dvh] relative overflow-hidden" ref={elementRef} 
    onMouseLeave={()=>{
      coloredImageRef.current.style.setProperty('--position', 'center');
      borderRef.current.style.setProperty('--translate', '-50% -50%');
      borderRef.current.style.setProperty('--top', '50%');
      borderRef.current.style.setProperty('--left', '50%');
      }}
       onMouseMove={(e)=>captureMousePosition(e)}>

      <img src={DiamondSpotLightImage} alt="diamond spotlight" className="w-full h-full " />
      <img ref={coloredImageRef} style={{
        WebkitMaskImage:'linear-gradient(to right, black, black)',
        maskImage:'linear-gradient(to right, black, black)',
        maskRepeat:'no-repeat',
        maskSize:'357px 330px',
        maskPosition:'var(--position, center)',
        maskBorder:'1px',
      }} src={DiamondSpotLightColoredImage} alt="diamond spotlight colored" className="absolute inset-0 w-full h-full " />

      
      <div style={{
        top:'var(--top, 50%)',
        left:'var(--left, 50%)',
        translate:'var(--translate, -50% -50%)'
      }} ref={borderRef} className="absolute w-[357px] h-[330px] border-[1px]  border-[#FFFFFF] rounded-sm"></div>
      

      <div className="absolute inset-0 z-10 w-full h-full flex justify-center items-center mt-36">
        <div className="flex flex-col justify-between items-center w-[40%]">
          <h2 className="font-medium text-[40px] leading-[100%] uppercase text-[#EFFFFF] text-center">
            Designed for you. <br /> Crafted for a lifetime.
          </h2>
          <button className="mt-5 w-[213px] h-[44px] border rounded-full px-[30px] py-[12px] uppercase text-[#E7DFD7]">
            Discover More
          </button>
        </div>
      </div>
    </div>
  )
}
