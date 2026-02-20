"use client";
import { useState } from "react";

export default function Shop() {

  const [activeDiv, setActiveDiv] = useState(1); 

  const shopItems = [
    {

      name: 'ROSE GOLD',
      img: '/assets/img/Shop/ShopItem1.png',
    },
    {
      
      name: 'YELLOW TONE',
      img: '/assets/img/Shop/YellowToneRing.png',
    },
    {
      
      name: 'PLATINUM / SILVER TONE',
      img: '/assets/img/Shop/SilverRing.jpg',
    },
  ]
  

  return (
    <div className="w-full overflow-hidden py-[200px] px-[110px] flex justify-end items-center relative bg-[#EFFFFSFF]">
      {/* First decorative absolute background div */}
      <div className="w-full h-[100%] bg-[#431a1a] absolute top-0 left-0 -translate-x-[70%] rounded-full z-50 flex justify-end items-center px-20">
        {/* Inner content div */}
        <div>
          {/* H2 tag */}
          <h2 className="text-[40px] font-medium leading-[92%] uppercase text-[#ffffff] pb-5">
            Shop By Color
          </h2>
          {/* Paragraph tag */}
          <p className="text-[20px] leading-[120%] text-[#ffffff]/90 pb-5">
            Choose Category
          </p>
          {/*  Drop Down div below */}
          <div className="relative w-[70%] " >
            <h2 className="border-[1px] border-[#000000]/100 px-4 py-4 text-center rounded-full z-20">hello</h2>
            <svg></svg>

            <div className="absolute inset-0 w-full bg-white h-20 translate-y-1/2 z-5">

            </div>
          </div>

        </div>
      </div>

      {/* Second decorative absolute background div */}
      <div className="w-full h-[120%] overflow-hidden bg-[#f7f6f4] absolute top-0 left-0 -translate-x-[50%] -translate-y-[10%] rounded-full z-20 flex flex-col">
        {/* First div */}
        <button onClick={()=>setActiveDiv(1)} className={`w-full grow hover:cursor-pointer overflow-hidden  bg-[#FAC8AD]/30 ${activeDiv === 1 ? 'opacity-100' : 'opacity-20'} `}></button>
        {/* Second div */}
        <button onClick={()=>setActiveDiv(2)} className={`w-full grow hover:cursor-pointer overflow-hidden bg-[#F8CC96] ${activeDiv === 2 ? 'opacity-100' :'opacity-20'}`}></button>
        {/* Third div */}
        <button onClick={()=>setActiveDiv(3)} className={`w-full grow hover:cursor-pointer overflow-hidden  bg-[#D9D9D9] ${activeDiv === 3 ? 'opacity-100' : 'opacity-20'} `}></button>
      </div>

      {/* Inner div */}
      <div className="w-[50%] flex flex-col justify-center items-center relative z-30">
        {/* Heading */}
        <h2
          className="font-medium text-[35px] leading-[100%] tracking-[10%] uppercase pb-[38px]"
          style={{
            background: "linear-gradient(to top, #000000 0%, #B58561 49%, #000000 88%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {shopItems[activeDiv-1].name}
        </h2>

        {/* Image */}
        <img
          src={shopItems[activeDiv-1].img}
          alt={shopItems[activeDiv-1].name}
          className="object-contain aspect-[480/177]"
        />

        {/* Paragraph */}
        <p className="pt-[30px] text-[24px] leading-[19.5px] text-[#000000] pb-[38px]">
          Engagement Ring
        </p>

        {/* Button */}
        <button className="w-[50%] bg-white/40 border border-white/10 px-[34px] py-[12px] uppercase text-[#000000]">
          View More
        </button>
      </div>
    </div>
  );
}
