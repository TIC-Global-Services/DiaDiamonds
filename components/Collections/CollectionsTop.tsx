"use client";
import { ParamValue } from "next/dist/server/request/params";

import { useState } from "react";

type CollectionsTopProps = {
  item: ParamValue;
  setItem: React.Dispatch<React.SetStateAction<string>>;
};

export default function CollectionsTop({item, setItem}:CollectionsTopProps){


    const textStyle = "text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#000000]";

    const pictureMenuItems = [
        {
            title : 'rings',
            img : '/assets/img/Collections/CollectionsTop/collectionMenuItem1.jpg'
        },

        {
            title : 'earrings',
            img : '/assets/img/Collections/CollectionsTop/collectionMenuItem2.png'
        },

        {
            title : 'bracelets',
            img : '/assets/img/Collections/CollectionsTop/collectionMenuItem3.png'
        },

        {
            title : 'necklaces',
            img : '/assets/img/Collections/CollectionsTop/collectionMenuItem4.png'
        },

        {
            title : 'pendants',
            img : '/assets/img/Collections/CollectionsTop/collectionMenuItem5.png'
        },
    ]

    return(
        <section data-theme="dark" className="w-full mt-[25.49%] md:mt-[6.53%]"> 
            
            {/* Title Menu */}
            <div className="w-full py-[3.64%] md:py-[2.5%] flex justify-center items-center gap-[3.1%] md:gap-[0.56%] border-y border-[#000000]/10">

                <a href="" className={textStyle}>HOME</a>

                <span className={`${textStyle} text-[#6C757D]`}>/</span>

                <a href="" className={textStyle}>COLLECTIONS</a>

                <span className={`${textStyle} text-[#6C757D]`}>/</span>

                <a href="" className={textStyle}>RINGS</a>

            </div>

            {/* Picture Menu */}
            <div className="w-full flex gap-[3.88%] md:gap-[2.6%] px-[3.88%] md:px-[3.19%] overflow-scroll md:overflow-hidden" style={{scrollbarWidth:'none'}}>

                {
                    pictureMenuItems.map((data, id)=>(
                        <div className="flex flex-col justify-center items-center w-[28.88%] md:w-[17.7%] shrink-0">

                            <img onClick={()=>setItem(data.title)} src={data.img} alt={data.title} className={`${item == data.title ? 'border-[0.5px] border-[#431A1A]/30': ''} w-full md:aspect-119/150 md:aspect-240/224 overflow-hidden cursor-pointer`}/>

                            <p onClick={()=>setItem(data.title)} className={` $iItem == data.title ? 'text-[#431A1A] underline' : 'text-[#000000]'} font-semibold mt-[3.79%] md:mt-[14.17%] text-[11px] md:text-[13px] leading-[16px] tracking-[1.2px] uppercase cursor-pointer` }>{data.title}</p>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}