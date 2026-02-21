"use client";
import { useState } from "react";

export default function Shop() {

  const [activeDiv, setActiveDiv] = useState(1); 
  const [isDropDownClicked, setIsDropDownClicked] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

 const shopItems = [
  // Rings
  [
    { name: "Engagement Ring", image: "/assets/img/Shop/ShopItem1.png", color: "ROSE GOLD" },
    { name: "Engagement Ring", image: "/assets/img/Shop/ShopItem2.png", color: "YELLOW GOLD" },
    { name: "Engagement Ring", image: "/assets/img/Shop/ShopItem3.jpg", color: "PLATINUM / SILVER TONE" },
  ],

  // Bracelets
  [
    { name: "Charm Diamond Bracelet", image: "/assets/img/Shop/ShopItem4.jpg", color: "ROSE GOLD" },
    { name: "Charm Diamond Bracelet", image: "/assets/img/Shop/ShopItem5.jpg", color: "YELLOW GOLD" },
    { name: "Charm Diamond Bracelet", image: "/assets/img/Shop/ShopItem6.jpg", color: "PLATINUM / SILVER TONE" },
  ],

  // Necklaces
  [
    { name: "Aurora Layered Necklace", image: "/assets/img/Shop/ShopItem7.png", color: "ROSE GOLD" },
    { name: "Aurora Layered Necklace", image: "/assets/img/Shop/ShopItem8.png", color: "YELLOW GOLD" },
    { name: "Aurora Layered Necklace", image: "/assets/img/Shop/ShopItem9.png", color: "PLATINUM / SILVER TONE" },
  ],

  // Pendants
  [
    { name: "Pure Brilliance Pendant", image: "/assets/img/Shop/ShopItem10.png", color: "ROSE GOLD" },
    { name: "Pure Brilliance Pendant", image: "/assets/img/Shop/ShopItem11.png", color: "YELLOW GOLD" },
    { name: "Pure Brilliance Pendant", image: "/assets/img/Shop/ShopItem12.png", color: "PLATINUM / SILVER TONE" },
  ],

  // Earrings
  [
    { name: "Imperial Clover Studs", image: "/assets/img/Shop/ShopItem13.png", color: "ROSE GOLD" },
    { name: "Imperial Clover Studs", image: "/assets/img/Shop/ShopItem14.png", color: "YELLOW GOLD" },
    { name: "Imperial Clover Studs", image: "/assets/img/Shop/ShopItem15.png", color: "PLATINUM / SILVER TONE" },
  ],
];
  

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
          <p onClick={()=>{setCurrentCategory(0)}} className="text-[20px] leading-[120%] text-[#ffffff]/90 pb-5">
            Choose Category
          </p>
          {/*  Drop Down div below */}
          <div className="relative w-[70%]">
            <div  className="flex justify-between items-center gap-[10px] relative w-full border bg-[#431A1A] border-[#000000]/10 backdrop-blur-xs px-6 py-[7px] text-center rounded-full z-20 cursor-pointer " >
            <h2 onClick={()=>{setCurrentCategory(0)}} className="text-[16px] leading-[142%] text-[#FFFFFF]/50">Rings</h2>
            <svg onClick={()=>setIsDropDownClicked(!isDropDownClicked)} className={`${isDropDownClicked ? 'rotate-180 delay-100 duration-300' : ''}`}  width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.327681 1.71L3.19027 4.3C3.62132 4.69 4.31763 4.69 4.74867 4.3L7.61127 1.71C8.30757 1.08 7.81021 0 6.82654 0H1.10135C0.117684 0 -0.368625 1.08 0.327681 1.71Z" fill="white" fill-opacity="0.5"/></svg>


            </div>
            <div className={`${isDropDownClicked ? '' : 'hidden'} absolute top-0 left-0 right-0 translate-y-[15%] mx-auto w-[90%]  flex flex-col bg-white  py-[15px] border-b border-t-0 rounded-[10px] z-10`}>
                <button onClick={()=>{setCurrentCategory(1)}} className={`px-[17px] py-[9px] text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 1 ? 'text-[#000000/80] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Bracelets</button>
                <button onClick={()=>{setCurrentCategory(2)}} className={`px-[17px] py-[9px] text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 2 ? 'text-[#000000/80] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Necklaces</button>
                <button onClick={()=>{setCurrentCategory(3)}} className={`px-[17px] py-[9px] text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 3 ? 'text-[#000000/80] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Pendants</button>
                <button onClick={()=>{setCurrentCategory(4)}} className={`px-[17px] py-[9px] text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 4 ? 'text-[#000000/80] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Earrings</button>
                
            </div>

          </div>

        </div>
      </div>

      {/* Second decorative absolute background div */}
      <div className="w-full h-[120%] overflow-hidden bg-[#f7f6f4] absolute top-0 left-0 -translate-x-[50%] -translate-y-[10%] rounded-full z-20 flex flex-col">
        {/* First div */}
        <button onMouseEnter={()=>{
          setActiveDiv(1);
          setIsHovered(true);}
          }
          onMouseLeave={()=>setIsHovered(false)}
          className={`w-full grow hover:cursor-pointer overflow-hidden  bg-[#FAC8AD]/30 ${activeDiv === 1 ? 'opacity-100' : 'opacity-20'} `}></button>
        {/* Second div */}
        <button onMouseEnter={()=>{
          setActiveDiv(2);
          setIsHovered(true);
          }}
          onMouseLeave={()=>setIsHovered(false)}
          className={`w-full grow hover:cursor-pointer overflow-hidden bg-[#F8CC96] ${activeDiv === 2 ? 'opacity-100' :'opacity-20'}`}></button>
        {/* Third div */}
        <button onMouseEnter={
          ()=>{
            setActiveDiv(3);
            setIsHovered(true);
          }
          }
          onMouseLeave={()=>{setIsHovered(false)}}
          className={`w-full grow hover:cursor-pointer overflow-hidden  bg-[#D9D9D9] ${activeDiv === 3 ? 'opacity-100' : 'opacity-20'} `}></button>
      </div>

      {/* Inner div */}
      <div className="w-[50%] flex flex-col justify-center items-center relative z-30">
        {/* Heading */}
        <h2
          className={`font-medium text-[35px] leading-[100%] tracking-[10%] uppercase pb-[38px]`}
          style={{
            background: "linear-gradient(to top, #000000 0%, #B58561 49%, #000000 88%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {shopItems[currentCategory][activeDiv-1].color}
        </h2>

        {/* Image */}
        <img
          src={shopItems[currentCategory][activeDiv-1].image}
          alt={shopItems[currentCategory][activeDiv-1].name}
          className={`object-contain aspect-[480/177] ${isHovered ? 'scale-110 delay-100 duration-200 ease-in-out' : 'scale-100'}`}
        />

        {/* Paragraph */}
        <p className="pt-[30px] text-[24px] leading-[19.5px] text-[#000000] pb-[38px]">
          {shopItems[currentCategory][activeDiv-1].name}
        </p>
        {/* Button */}
        <button className=" bg-white/40 bg-[#ffffff]/40 px-[18px] py-[7.6px]  border-[#FFFFFF]/10  tracking-[0.166rem] border-[5.3px]    border rounded-full backdrop-blur-sm px-8 py-[12px] uppercase text-[#000000]">
          View More
        </button>
      </div>
    </div>
  );
}
