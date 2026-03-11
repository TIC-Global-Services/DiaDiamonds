"use client";

import { useRouter } from "next/navigation";

type TopMiniMenu = {
    item:string | undefined,
}

export default function TopMiniMenu({item}:TopMiniMenu){

    const router = useRouter();

    const textStyle = "text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#000000]";

    return(
        <section data-theme="dark" className="w-full mt-[25.49%] mb-[6.82%] md:mb-0 md:mt-[6.53%]">

             {/* Title Menu */}
            <div className="relative w-full py-[3.64%] md:py-[2.5%] flex justify-center items-center gap-[3.1%] md:gap-[0.56%] border-y border-[#000000]/10">

                <a href="" className={textStyle}>HOME</a>

                <span className={`${textStyle} text-[#6C757D]`}>/</span>

                <a href="" className={textStyle}>COLLECTIONS</a>

                <span className={`${textStyle} text-[#6C757D]`}>/</span>

                <a href="" className={textStyle}>{item}</a>


                <button onClick={()=>router.back()} className="absolute top-[18.75%] md:top-[32.58%] left-[3.64%] md:left-[1.11%] w-[5.35%] md:w-[2.08%] aspect-square rounded-[25px] bg-[#D9D9D980] flex justify-center items-center cursor-pointer">
                    <svg className="w-[6px] md:w-[8px] h-[10px] md:h-[15px]" width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.04375 7.11628L7.55625 12.6288C7.74375 12.8163 7.8345 13.035 7.8285 13.285C7.8225 13.535 7.7255 13.7538 7.5375 13.9413C7.3495 14.1288 7.13075 14.2225 6.88125 14.2225C6.63175 14.2225 6.413 14.1288 6.225 13.9413L0.45 8.18503C0.3 8.03503 0.1875 7.86628 0.1125 7.67878C0.0375 7.49128 0 7.30378 0 7.11628C0 6.92878 0.0375 6.74128 0.1125 6.55378C0.1875 6.36628 0.3 6.19753 0.45 6.04753L6.225 0.272529C6.4125 0.085029 6.6345 -0.00572093 6.891 0.00027907C7.1475 0.00627907 7.36925 0.103279 7.55625 0.291279C7.74325 0.479279 7.837 0.698029 7.8375 0.947529C7.838 1.19703 7.74425 1.41578 7.55625 1.60378L2.04375 7.11628Z" fill="black"/></svg>
                </button>

            </div>

        </section>
    )
}