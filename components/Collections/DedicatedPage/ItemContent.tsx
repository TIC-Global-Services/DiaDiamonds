"use client";

import { useState } from "react";
import { ItemData } from "@/app/collections/[ItemType]/[id]/data"
import { SetStateAction } from "react";
import { Parallax } from "react-scroll-parallax";

type ItemDisplayProps = {
    id:number,
    currentVariant:Variant,
    setCurrentVariant:React. Dispatch<SetStateAction<Variant>>,
    currentSize:Size,
    setCurrentSize:React.Dispatch<SetStateAction<Size>>,
}

type Variant = "YG" | "RG" | "S";

type Size = "XS" | "S" | "M";

export default function ItemContent({id, currentVariant, setCurrentVariant, currentSize, setCurrentSize}:ItemDisplayProps){

    const currentItem = ItemData[Number(id)];

    return(
        <section className="w-full px-[3.64%] md:px-0 md:pr-[2.92%] mt-[10%] md:mt-0">

            <div className=" md:w-[57.68%] md:ml-auto md:pb-[9.15%]">

                <p className="md:pb-[6.44%] text-[12px] md:text-[15.5px] leading-[28px] tracking-[-0.32px] text-[#000000]">Dia Diamonds is the modern expression of a legacy built on trust, integrity, and exceptional craftsmanship. We create timeless diamond jewellery that blends heritage values with contemporary design, ensuring every piece reflects elegance, authenticity, and superior quality. With a strong commitment to ethical sourcing and meticulous attention to detail.</p>
                
                <ul className="flex flex-col md:flex-row items-start md:items-center justify-between list-disc pl-5 mb-[11.05%] md:mb-0">

                    <li className=" text-[12px] md:text-[15.5px] leading-[28px] tracking-[-0.32px] text-[#000000]">Yellow gold with diamonds</li>
                    <li className=" text-[12px] md:text-[15.5px] leading-[28px] tracking-[-0.32px] text-[#000000]">Finger size, Small</li>
                    <li className=" text-[12px] md:text-[15.5px] leading-[28px] tracking-[-0.32px] text-[#000000]">Fits Finger up to 0.0"</li>

                </ul>
            </div>

            <div className="w-full md:w-[56.97%] aspect-380/409 md:aspect-auto md:ml-auto overflow-hidden mb-[2.63%] md:mb-[2.86%]">

            <Parallax speed={-20}>
                <img src={currentItem.images.img1} alt="" className="w-full h-full md:h-auto object-cover" />
            </Parallax>

            </div>


            <div className="w-full flex flex-wrap md:gap-[1.43%] md:mb-[2.86%]">
                

                <div className="w-full md:w-[31.95%] md:ml-auto aspect-380/495  md:aspect-447/579 overflow-hidden mb-[2.63%] md:mb-auto">


                    <img src={currentItem.images.img2} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-[23.23%] aspect-376/498  md:aspect-325/579 overflow-hidden mb-[2.63%] md:mb-auto">


                    <img src={currentItem.images.img3} alt="" className="w-full h-full scale-70 object-cover" />

                </div>

            </div>


            <div className="md:w-[56.11%] md:ml-auto aspect-380/584 md:aspect-785/643 overflow-hidden mb-[2.63%] md:mb-[9.72%] ">

            <Parallax speed={-20}>
                    
                    <img src={currentItem.images.img4} alt="" className="w-full h-full object-cover" />

            </Parallax>

            </div>

        </section>
    )
}