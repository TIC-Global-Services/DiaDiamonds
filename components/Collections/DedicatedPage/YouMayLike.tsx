"use client";

import { useState } from "react";

export default function YouMayLike(){
    
    const [ scrollLevel, setScrollLevel] = useState<number>(0);

    const scrollPercentage:Record<number, string> = {
        0:"-translate-x-[0%] duration-200 delay-70 ease",
        1:"-translate-x-[33%] duration-200 delay-70 ease",
        2:"-translate-x-[66%] duration-200 delay-70 ease",
        3:"-translate-x-[100%] duration-200 delay-70 ease"
    }

    const scrollBarPosition:Record<number, string> = {
        0:"",
        1:"justify-start",
        2:"justify-center",
        3:"justify-end"
    }

    const recommendedCollections = [
        {
            productImg:'/assets/img/Collections/DedicatedPage/YouMayLike/collection1.png',
            productName:'Celeste Halo Bracelet',
        },
        {
            productImg:'/assets/img/Collections/DedicatedPage/YouMayLike/collection2.png',
            productName:'Frost Bloom Bracelet',
        },
        {
            productImg:'/assets/img/Collections/DedicatedPage/YouMayLike/collection3.png',
            productName:'Curved Curl Studs',
        },
        {
            productImg:'/assets/img/Collections/DedicatedPage/YouMayLike/collection1.png',
            productName:'Celeste Halo Bracelet',
        },
        {
            productImg:'/assets/img/Collections/DedicatedPage/YouMayLike/collection2.png',
            productName:'Frost Bloom Bracelet',
        },
        {
            productImg:'/assets/img/Collections/DedicatedPage/YouMayLike/collection2.png',
            productName:'Curved Curl Studs',
        },
        {
            productImg:'/assets/img/Collections/DedicatedPage/YouMayLike/collection3.png',
            productName:'Celeste Halo Bracelet',
        },
    ]

    return(
        <section data-theme="dark" className="w-full md:pb-[4.51%]">

            <h2 className="text-center">You May Also Like</h2>

            <div className="w-full md:w-[94.44%] mx-auto overflow-hidden">

                <div className={`flex md:gap-[5.81%] ${scrollPercentage[scrollLevel]}`}>

                    {
                        recommendedCollections.map((data, id)=>(
                            <div className={`w-full md:w-[24.19%] shrink-0  `}>

                                <div className="md:w-full aspect-square overflow-hidden md:mb-[12.77%]">

                                    <img src={data.productImg} alt={data.productName} className="w-full h-full"/>

                                </div>

                                <p className="text-center">{data.productName}</p>

                            </div>
                        ))
                    }

                </div>


            </div>

             <div className="w-[98%] mx-auto md:justify-center items-center pt-[60px] md:pt-4 relative gap-2 flex-wrap md:flex-nowrap flex">
        {/* First inner div with top border */}
                <div className="w-full border-b-3 border-[#000000]/20 relative shrink">
          {/* Absolute border div inside first inner div */}
                    <div className={`absolute -translate-y-1/4  w-full top-0 left-0 flex ${scrollBarPosition[scrollLevel]}`}>
                          <div className={` border-t-5 border-[#7C3C3C]   md:w-[34%]`}></div>
                    </div>
                </div>

        {/* Second inner div with buttons */}
                <div className=" hidden md:flex items-center gap-2 ">
          {/* First button */}
                    <button onClick={()=>{
                        if(scrollLevel != 0){
                             setScrollLevel(scrollLevel-1)
                        }
                       }} className="w-10 h-10 rounded-[10px] bg-[#F9F9F9] hover:cursor-pointer stroke-black active:stroke-white active:bg-[#7C3C3C] flex justify-center items-center">
                             <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0502 7.07071L9.0857 12.106L14.121 17.0705" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>

          {/* Second button */}
                    <button onClick={()=>{
                        if(scrollLevel !=3){
                            setScrollLevel(scrollLevel+1)
                        }
                        }} className="w-10 h-10 bg-[#F9F9F9] hover:cursor-pointer active:bg-[#7C3C3C] stroke-black active:stroke-white rounded-[10px] flex justify-center items-center">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.581227 10.4997L5.54053 5.45931L0.500164 0.500004"  strokeLinecap="round" strokeLinejoin="round"/></svg>

          </button>
        </div>
      </div>

      <div className="w-full border-b-[1px] ">

      </div>

        </section>
    )
}