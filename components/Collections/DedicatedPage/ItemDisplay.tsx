"use client";

import { useState } from "react";
import { ItemData } from "@/app/collections/[ItemType]/[id]/data"
import { SetStateAction } from "react";

type Variant = "YG" | "RG" | "S";

type Size = "XS" | "S" | "M";


type ItemDisplayProps = {
    id:number,
    currentVariant:Variant,
    setCurrentVariant:React. Dispatch<SetStateAction<Variant>>,
    currentSize:Size,
    setCurrentSize:React.Dispatch<SetStateAction<Size>>,
}



export default function ItemDisplay({id, currentVariant, setCurrentVariant, currentSize, setCurrentSize}:ItemDisplayProps){

    const currentItem = ItemData[Number(id)];


    console.log(currentItem);

    return(
        <section className="w-full md:px-[6.67%] flex justify-between">

            {/* Left Info & Options */}
            <div className="w-full md:w-[39.74%] pl-[4.37%] md:pl-0 md:pb-[18.96%]">

                    <h3 className="md:pt-[7.47%] text-[24px] leading-[32px] tracking-[-0.72px] uppercase text-[#000000]">{currentItem.name}</h3>
                <p className="md:pt-[1.61%] md:pb-[3.23%] text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000]">{currentItem.miniDes[currentVariant]}</p>
                <p className="md:pb-[4.91%] font-baskerville text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000]">{currentItem.type}</p>


                {/* Mobile Image */}
                <div className="md:hidden w-[67.72%] aspect-[279/177] overflow-hidden mx-auto">

                    <img src={currentItem.variantImg[currentVariant]}  alt="ring1" className="w-full h-full object-cover" />

                </div>

                {/* Mobile Size options */}
                <div className=" md:hidden w-full border-t-[1px] border-l-0 border-r-0 border-b-0 border-[#0000001F] py-[4.37%] md:py-[3.57%] flex gap-[2.67%] md:gap-[2.27%] md:mb-[6.81%]">

                    <h3 className="md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000]/40 md:pt-[3.91%]">Size:</h3>
                    <button className="w-[6.07%] md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">{currentItem.size[0]}</button>
                    <button className="w-[6.07%] md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">{currentItem.size[1]}</button>
                    <button className="w-[6.07%] md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">{currentItem.size[2]}</button>

                </div>

                <div className="flex md:gap-[5.46%] md:pb-[9.71%]">

                    <div className="md:w-[24.48%] aspect-square ">

                        <div onClick={()=>setCurrentVariant("YG")} className={`w-full h-auto overflow-hidden cursor-pointer ${currentVariant === "YG" ? ' border-b-[1px] border-t-0 border-x-0 border-[#000000]': ''}`}>

                        <img src={currentItem.variants[0].YG.img}  alt="" className="w-full object-cover" />
                        
                        </div>

                        <h3 onClick={()=>setCurrentVariant("YG")} className="text-center cursor-pointer pt-[1.21%] md:pt-[5.50%]">{currentItem.variants[0].YG.text}</h3>

                    </div>

                    <div className="md:w-[24.48%] aspect-square ">

                        <div onClick={()=>setCurrentVariant("RG")} className={`w-full h-auto cursor-pointer overflow-hidden ${currentVariant === "RG" ? ' border-b-[1px] border-t-0 border-x-0 border-[#000000]': ''}`}>

                        <img src={currentItem.variants[0].RG.img}  alt="" className="w-full object-cover" />
                        
                        </div>

                        <h3 onClick={()=>setCurrentVariant("RG")} className="text-center cursor-pointer pt-[1.21%] md:pt-[5.50%]">{currentItem.variants[0].RG.text}</h3>

                    </div>
                    
                    <div className="md:w-[24.48%] aspect-square ">

                        <div onClick={()=>setCurrentVariant("S")} className={`w-full h-auto  cursor-pointer overflow-hidden ${currentVariant === "S" ? ' border-b-[1px] border-t-0 border-x-0 border-[#000000]': ''}`}>

                        <img src={currentItem.variants[0].S.img}  alt="" className="w-full object-cover" />
                        
                        </div>

                        <h3 onClick={()=>setCurrentVariant("S")} className="text-center cursor-pointer pt-[1.21%] md:pt-[5.50%]">{currentItem.variants[0].S.text}</h3>

                    </div>

                    


                </div>


                <div className="hidden md:flex w-full border-t-[1px] border-l-0 border-r-0 border-b-0 border-[#0000001F] md:py-[3.57%] flex md:gap-[2.27%] md:mb-[6.81%]">

                    <h3 className="md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000]/40 md:pt-[3.91%]">Size:</h3>
                    <button className={`md:w-[5.06%] aspect-square  flex justify-center items-center rounded-full md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000] bg-[#D9D9D900]  md:mt-[3.91%] cursor-pointer ${currentSize == "XS" ? 'border-[#0000001A] border-[0.5px]' : ''}`} onClick={()=>setCurrentSize('XS')}>{currentItem.size[0]}</button>
                    <button className={`md:w-[5.06%] aspect-square  flex justify-center items-center rounded-full md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000] bg-[#D9D9D900]  md:mt-[3.91%] cursor-pointer ${currentSize == "S" ? 'border-[#0000001A] border-[0.5px]' : ''}`} onClick={()=>setCurrentSize('S')}>{currentItem.size[1]}</button>
                    <button className={`md:w-[5.06%] aspect-square  flex justify-center items-center rounded-full md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000] bg-[#D9D9D900]  md:mt-[3.91%] cursor-pointer ${currentSize == "M" ? 'border-[#0000001A] border-[0.5px]' : ''}`} onClick={()=>setCurrentSize('M')}>{currentItem.size[2]}</button>

                </div>

                <button className="block w-[76.36%] mt-[11.65%] md:mt-0 md:w-[90.55%] mx-auto py-[5.72%] md:py-[4.65%]  bg-[#F4F0EA0A] border-[1px] border-[#FFFFFF] rounded-[30px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] font-semibold text-[10.3px] leading-[16px] tracking-[0.88px] uppercase text-[#000000] cursor-pointer ">CONTACT STORE</button>

            </div>

            <div className="hidden md:block md:w-[47.15%] md:aspect-square overflow-hidden">

                <img src={currentItem.variantImg[currentVariant]} alt="" className="w-full object-cover" />

            </div>

        </section>
    )
}