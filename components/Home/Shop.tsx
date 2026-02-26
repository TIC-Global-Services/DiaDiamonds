"use client";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function Shop() {

  const [activeDiv, setActiveDiv] = useState(1); 
  const [isDropDownClicked, setIsDropDownClicked] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<number | null>(null);
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
    <div className="w-full h-screen md:min-h-screen overflow-hidden md:px-[110px] flex justify-end items-center relative bg-[#EFFFFSFF]">
      {/* First decorative absolute background div */}
      <div className="w-full h-[100%] bg-[#431a1a] absolute top-0 left-0 -translate-y-[75%] md:-translate-x-[70%] md:-translate-y-0 rounded-full z-50 flex flex-col md:flex-row justify-end items-center px-10">
        {/* Inner content div */}
        <div className="mb-14">
          {/* H3 tag */}
          <h3 className="text-[30px] md:text-[40px] font-medium leading-[92%] uppercase text-[#ffffff] pb-[14px] md:pb-5 text-center md:text-left">
            Shop By Colors
          </h3>
          {/* Paragraph tag */}
          <p onClick={()=>{setCurrentCategory(0)}} className="text-center md:text-left text-[12px] md:text-[20px] leading-[120%] text-[#ffffff]/50 md:text-[#ffffff]/90 pb-[10px] md:pb-5">
            Choose Category
          </p>
          {/*  Drop Down div below */}
          <div  className="relative w-[45%] md:w-[70%] mx-auto md:mx-0">
            <div onClick={()=>setIsDropDownClicked(!isDropDownClicked)} className="flex justify-between items-center gap-[10px] relative w-full bg-[#FFFFFF]/4 border bg-[#431A1A] border-[#FFFFFF]/1 shadow-[0_4px_4px_0_rgba(0,0,0,0,.10)] md:border-[#000000]/10 backdrop-blur-xs px-6 py-[7px] text-center rounded-full z-20 cursor-pointer " >
            <h3 className="text-[12px] md:text-[16px] leading-[142%] text-[#FFFFFF]/50 bg-transparent backdrop-blur-[4px]">Select</h3>
            <svg  className={`${isDropDownClicked ? 'rotate-180 delay-100 duration-300' : ''}`}  width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.327681 1.71L3.19027 4.3C3.62132 4.69 4.31763 4.69 4.74867 4.3L7.61127 1.71C8.30757 1.08 7.81021 0 6.82654 0H1.10135C0.117684 0 -0.368625 1.08 0.327681 1.71Z" fill="white" fill-opacity="0.5"/></svg>


            </div>
            <div className={`${isDropDownClicked ? '' : 'hidden'} absolute top-0 left-0 right-0 translate-y-[15%] mx-auto w-[90%]  flex flex-col bg-white  py-[15px] border-b border-t-0 rounded-[10px] z-10`}>
              <button onClick={()=>{setCurrentCategory(0)}} className={`text-sm px-[27px] py-[9px] text-left text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 0 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Rings</button>
                <button onClick={()=>{setCurrentCategory(1)}} className={`text-sm px-[27px] py-[9px] text-left text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 1 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Bracelets</button>
                <button onClick={()=>{setCurrentCategory(2)}} className={`text-sm px-[27px] py-[9px] text-left text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 2 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Necklaces</button>
                <button onClick={()=>{setCurrentCategory(3)}} className={`text-sm px-[27px] py-[9px] text-left text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 3 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Pendants</button>
                <button onClick={()=>{setCurrentCategory(4)}} className={`text-sm px-[27px] py-[9px] text-left text-[#000000]/40 bg-[#FFFFFF] hover:cursor-pointer border-0 ${currentCategory == 4 ? 'text-[#000000]/80 bg-[#dddcdb]' : 'text-[#000000]/40 bg-[#FFFFFF]' } `}>Earrings</button>
                
            </div>

          </div>

        </div>
      </div>

      {/* Second decorative absolute background div */}
      <div className="w-[120%] md:w-full h-full md:h-[120%] overflow-hidden bg-[#f7f6f4] absolute top-0 left-0 -translate-y-[60%] -translate-x-[10%]  md:-translate-x-[50%] md:-translate-y-[10%] rounded-full z-20 flex md:flex-col">
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
      <div className="w-full mt-auto pb-20 md:w-[50%]  flex flex-col justify-end items-center relative z-30">
        {/* Heading */}
        <h2
          className={`font-medium text-[24px]  md:text-[35px] md:leading-[100%] tracking-[10%] uppercase md:pb-[38px]`}
          style={{
            background: "linear-gradient(to top, #000000 0%, #B58561 49%, #000000 88%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {currentCategory != null ? shopItems[currentCategory][activeDiv-1].color : shopItems[0][activeDiv-1].color}
        </h2>

        {/* Image */}
        <div className="w-[50%] md:w-[40%] aspect-[480/177] ">
        <img
          src={currentCategory != null ? shopItems[currentCategory][activeDiv-1].image : shopItems[0][activeDiv-1].image}
          alt={currentCategory != null ? shopItems[currentCategory][activeDiv-1].name : shopItems[0][activeDiv-1].name}
          className={`w-full object-cover md:object-contain overflow-auto  ${isHovered ? 'scale-110 delay-100 duration-200 ease-in-out' : 'scale-100'}`}
        />
        </div>

        {/* Paragraph */}
        <p className="pt-[30px] text-[20px] md:text-[24px] leading-[19.5px] text-[#000000] pb-[38px] font-baskerville">
          {currentCategory != null ? shopItems[currentCategory][activeDiv-1].name : shopItems[0][activeDiv-1].name}
        </p>
        {/* Button */}
        <button className="BtnAnimation bg-[#87888A]/20 md:bg-white/40 text-[#431a1a] text-[10px] px-[18px] py-[7.6px]  border-[#FFFFFF]/1  tracking-[0.166rem] border-[5.3px]    border rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.5)] px-8 py-[12px] uppercase text-[#000000]">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}
