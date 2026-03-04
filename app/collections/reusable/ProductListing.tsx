"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductItems from "./ProductItems";


import { ParamValue } from "next/dist/server/request/params";


type BaseItem = {
  img: string;
  color: string;
  name: string;
  type: string;
  id:number;
  tagType:string;
};

type CategoryData = {
  [key: string]: BaseItem[] ;
};

type ProductListingProps = {
  data: CategoryData,
  item: ParamValue;
};



export default function ProductListing({data, item}:ProductListingProps){

    const [isLeftDropDownClicked, setIsLeftDropDownClicked] = useState<boolean>(false);
    const [isRightDropDownClicked, setIsRightDropDownClicked] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<string>('default');
    const [solitaireVariety, setSolitaireVariety] = useState<string>('default');
    const [ItemData, setItemData] = useState<string>('normal');
    let dataItem;

    if(item == "rings"){
        switch(ItemData){
            case "normal":
                dataItem = data.normal;
                break;
            case "roundBrilliant":
                dataItem = data.roundBrilliant;
                break;
            case "cushionCut":
                dataItem = data.cushionCut;
                break;
            case "emeraldRound":
                dataItem = data.emeraldRound;
                break;
            case "princessCut":
                dataItem = data.princessCut;
                break;
            case "marquiseCut":
                dataItem = data.marquiseCut;
                break;
            default:
                dataItem = data.normal;
        }
    } else {
        dataItem = data.normal;
    }
   
    
    

    return(
        <section className="w-full">

            {/* Top Menu of Product Listing */}

            {/* Mobile Version */}

            <div className="w-[100%] md:hidden flex items-center justify-between px-[4.32%]  ">

                <div  className="relative w-[10.49%] aspect-square">

                    <div onClick={()=>setIsLeftDropDownClicked(!isLeftDropDownClicked)}>
                        <div className="w-[66.669%] aspect-16/5 bg-[#431A1A] border-[#431A1A] mb-[16.67%]"></div>
                    <div className="w-[66.669%] aspect-16/5 border-[#431A1A] border-[1px]"></div>
                    </div>
                    


                    <div className={`${isLeftDropDownClicked ? 'absolute' : 'hidden'}  top-[100%] w-[300%] h-20 bg-black`}>

                        <div  className="w-full bg-[#F7F6F4] py-[11.21%] px-[12.07%] pointer-events-none">
                            <h3 className="text-[12px] uppercase text-[#000000]">SORT BY</h3>
                        </div>
                        <div  onClick={()=>setSortBy("recommended")} className={`${sortBy == "recommended" ? 'border-[1px] ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                            <h3 className={`text-[13px] ${sortBy == "recommended" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `} >Recommended</h3>
                        </div>
                        <div  onClick={()=>setSortBy("new arrival")} className={`${sortBy == "new arrival" ? 'border-[1px] ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                            <h3 className={`text-[13px] ${sortBy == "new arrival" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>New arrival</h3>
                        </div>
                        <div  onClick={()=>setSortBy("new collection")} className={`${sortBy == "new collection" ? 'border-[1px] ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                            <h3 className={`text-[13px] ${sortBy == "new collection" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>New collection</h3>
                        </div>
                        <div className="w-full bg-[#F7F6F4] py-[11.21%] px-[12.07%] pointer-events-none">
                            <h3 className="text-[12px] uppercase text-[#000000]" >SOLITAIRE VARIETY</h3>
                        </div>
                        <div  onClick={()=>{setSolitaireVariety("round brilliant"),
                            setItemData('roundBrilliant')
                        }} className={`${solitaireVariety == "round brilliant" ? 'border-[1px] ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                            <h3 className={`text-[13px] ${solitaireVariety == "round brilliant" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>Round Brilliant</h3>
                        </div>
                        <div  onClick={()=>{setSolitaireVariety("cushion cut"),
                            setItemData('cushionCut')
                        }} className={`${solitaireVariety == "cushion cut" ? 'border-[1px] ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                            <h3 className={`text-[13px] ${solitaireVariety == "cushion cut" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>Cushion Cut</h3>
                        </div>
                        <div  onClick={()=>{setSolitaireVariety("emerald & round cut"),
                            setItemData('emeraldRound')
                        }} className={`${solitaireVariety == "emerald & round cut" ? 'border-[1px] ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                            <h3 className={`text-[13px] ${solitaireVariety == "emerald & round cut" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>Emerald & Round cut</h3>
                        </div>
                        <div  onClick={()=>{setSolitaireVariety("princess cut"),
                            setItemData('princessCut')
                        }} className={`${solitaireVariety == "emerald & round cut" ? 'border-[1px] ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                            <h3 className={`text-[13px] ${solitaireVariety == "princess cut" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>Princess cut</h3>
                        </div>
                        <div  onClick={()=>{setSolitaireVariety("marquise cut"),
                            setItemData('marquiseCut')
                        }} className={`${solitaireVariety == "emerald & round cut" ? 'border-[1px] ': 'border-[0.5px]'} w-full bg-[#FFFFFF] py-[11.21%] px-[12.07%] border-[#F5F5F5]`} >
                            <h3 className={`text-[13px] ${solitaireVariety == "marquise cut" ? 'text-[#000000]/80' : 'text-[#000000]/40'} `}>Marquise cut</h3>
                        </div>

                    </div>

                </div>

                {/* Main Title */}
                <div className="flex flex-col justify-center items-center md:gap-[14px] ">

                    <h3 className="font-medium md:text-[36px] md:leading-[16px] md:tracking-[0.88px] uppercase text-[#000000] pb-[3.64%] md:pb-[1.03%] text-center">{item}</h3>


                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0113 1.875C10.1771 1.875 10.336 1.94085 10.4532 2.05806C10.5704 2.17527 10.6363 2.33424 10.6363 2.5L10.6263 15.9917L15.393 11.235C15.4502 11.1737 15.5193 11.1245 15.596 11.0904C15.6727 11.0563 15.7555 11.038 15.8394 11.0366C15.9233 11.0352 16.0066 11.0507 16.0844 11.0822C16.1622 11.1137 16.2329 11.1606 16.2922 11.22C16.3515 11.2794 16.3982 11.3501 16.4295 11.428C16.4609 11.5058 16.4763 11.5892 16.4747 11.6731C16.4731 11.757 16.4547 11.8398 16.4205 11.9164C16.3862 11.9931 16.3369 12.062 16.2755 12.1192L10.4421 17.9425C10.3249 18.0595 10.1661 18.1253 10.0005 18.1253C9.83483 18.1253 9.67598 18.0595 9.55879 17.9425L3.72546 12.1192C3.61155 12.0013 3.54848 11.8435 3.54983 11.6796C3.55117 11.5157 3.61683 11.359 3.73265 11.243C3.84848 11.1271 4.00521 11.0613 4.16908 11.0598C4.33295 11.0583 4.49086 11.1212 4.60879 11.235L9.37629 15.9933L9.38546 2.5C9.38546 2.41785 9.40165 2.33651 9.43311 2.26063C9.46457 2.18475 9.51068 2.11581 9.56881 2.05776C9.62694 1.99972 9.69593 1.9537 9.77186 1.92234C9.84778 1.89098 9.92914 1.87489 10.0113 1.875Z" fill="black" fill-opacity="0.5"/></svg>

                </div>

                <div className="w-[10.49%] aspect-square opacity-0 pointer-events-none">

                    <div className="w-[66.669%] aspect-16/5 bg-[#431A1A] border-[#431A1A] mb-[16.67%]"></div>
                    <div className="w-[66.669%] aspect-16/5 border-[#431A1A] border-[1px]"></div>

                </div>

            </div>

            {/* Desktop Version */}
            <div className="hidden md:flex w-full md:mt-[8.33%]  px-[3.88%] md:px-[3.19%] flex justify-between items-start">

                {/* Left Button */}
                <button onClick={()=>setIsLeftDropDownClicked(!isLeftDropDownClicked)} className="relative md:px-[2.72%] md:py-[1.76%] flex items-center bg-[#431A1A] border-0 rounded-[14px] shrink-0 md:gap-[9px] cursor-pointer">

                    <h3 className="font-semibold md:text-[13px] md:leading-[16px] md:tracking-[0.88px] uppercase text-[#FFFFFF] shrink-0">SORT BY</h3>

                    <svg className={`${isLeftDropDownClicked ? 'rotate-180': 'rotate-0'}`} width="9" height="24" viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="6" transform="translate(0 9)" fill="#431A1A"/><g clip-path="url(#clip0_276_1730)"><path d="M4.31563 9.99997L7.80664 14.0078L0.806658 13.9921L4.31563 9.99997Z" fill="white"/></g><defs><clipPath id="clip0_276_1730"><rect width="8" height="24" fill="white" transform="translate(0.310547)"/></clipPath></defs></svg>

                    <motion.div
                    initial={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
                    animate={{clipPath: isLeftDropDownClicked ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
                    transition={{duration:0.5, delay:0.1, ease:"easeInOut"}}
                    
                    className="w-full absolute top-[95%] left-0 flex flex-col justify-center items-center">

                        <div onClick={()=>setSortBy("recommended")} className={`w-full md:py-[6.37%] text-center  md:text-[16px] md:leading-[100%] ${sortBy == "recommended" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'}  cursor-pointer`}>Recommended</div>

                        <div onClick={()=>setSortBy("new arrival")} className={`w-full md:py-[6.37%] text-center  md:text-[16px] md:leading-[100%] ${sortBy == "new arrival" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'}  cursor-pointer`}>New Arrival</div>

                        <div onClick={()=>setSortBy("new collection")} className={`w-full md:py-[6.37%] text-center  md:text-[16px] md:leading-[100%] ${sortBy == "new collection" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'}  cursor-pointer rounded-b-[14px]`}>New Collections</div>


                    </motion.div>
                </button>

                {/* Main Title */}
                <div className="flex flex-col justify-center items-center md:gap-[14px] ">

                    <h3 className="font-medium md:text-[36px] md:leading-[16px] md:tracking-[0.88px] uppercase text-[#000000] md:pb-[1.03%]">{item}</h3>

                    <p className="font-normal m-0 md:text-[13px] md:leading-[16px] md:tracking-[-0.24px] text-[#000000]">Scroll to discover</p>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0113 1.875C10.1771 1.875 10.336 1.94085 10.4532 2.05806C10.5704 2.17527 10.6363 2.33424 10.6363 2.5L10.6263 15.9917L15.393 11.235C15.4502 11.1737 15.5193 11.1245 15.596 11.0904C15.6727 11.0563 15.7555 11.038 15.8394 11.0366C15.9233 11.0352 16.0066 11.0507 16.0844 11.0822C16.1622 11.1137 16.2329 11.1606 16.2922 11.22C16.3515 11.2794 16.3982 11.3501 16.4295 11.428C16.4609 11.5058 16.4763 11.5892 16.4747 11.6731C16.4731 11.757 16.4547 11.8398 16.4205 11.9164C16.3862 11.9931 16.3369 12.062 16.2755 12.1192L10.4421 17.9425C10.3249 18.0595 10.1661 18.1253 10.0005 18.1253C9.83483 18.1253 9.67598 18.0595 9.55879 17.9425L3.72546 12.1192C3.61155 12.0013 3.54848 11.8435 3.54983 11.6796C3.55117 11.5157 3.61683 11.359 3.73265 11.243C3.84848 11.1271 4.00521 11.0613 4.16908 11.0598C4.33295 11.0583 4.49086 11.1212 4.60879 11.235L9.37629 15.9933L9.38546 2.5C9.38546 2.41785 9.40165 2.33651 9.43311 2.26063C9.46457 2.18475 9.51068 2.11581 9.56881 2.05776C9.62694 1.99972 9.69593 1.9537 9.77186 1.92234C9.84778 1.89098 9.92914 1.87489 10.0113 1.875Z" fill="black" fill-opacity="0.5"/></svg>

                </div>

                {/* Right Button */}
                <button onClick={()=>{setIsRightDropDownClicked(!isRightDropDownClicked)}} className={`${item != 'rings' ? 'opacity-0 pointer-events-none' : 'opacity-[100%]'} relative md:px-[2.72%]  md:py-[1.76%] flex md:gap-[9px] items-center bg-[#431A1A] border-0 rounded-[14px] shrink-0 cursor-pointer`}>

                    <h3 className="font-semibold md:text-[13px] md:leading-[16px] md:tracking-[0.88px] uppercase text-[#FFFFFF] shrink-0">SOLITAIRE VARIETY</h3>

                    <svg className={`${isRightDropDownClicked ? 'rotate-180' : 'rotate-0'}`} width="9" height="24" viewBox="0 0 9 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="8" height="6" transform="translate(0 9)" fill="#431A1A"/><g clip-path="url(#clip0_276_1730)"><path d="M4.31563 9.99997L7.80664 14.0078L0.806658 13.9921L4.31563 9.99997Z" fill="white"/></g><defs><clipPath id="clip0_276_1730"><rect width="8" height="24" fill="white" transform="translate(0.310547)"/></clipPath></defs></svg>

                    <motion.div
                    
                    initial={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
                    animate={{clipPath: isRightDropDownClicked ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
                    transition={{duration:0.5, delay:0.1, ease:"easeInOut"}}
                    
                    className="w-full absolute top-[95%] left-0 flex flex-col justify-center items-center">

                        <div onClick={()=>{
                            setSolitaireVariety("round brilliant"),
                            setItemData('roundBrilliant')
                            }} className={`w-full md:py-[6.37%] text-center  md:text-[16px] md:leading-[100%] ${solitaireVariety == "round brilliant" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'}  cursor-pointer`}>Round Brilliant</div>

                        <div onClick={()=>{setSolitaireVariety("cushion cut"), 
                            setItemData('cushionCut')
                        }} className={`w-full md:py-[6.37%] text-center  md:text-[16px] md:leading-[100%] ${solitaireVariety == "cushion cut" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'}  cursor-pointer`}>Cushion Cut</div>

                        <div onClick={()=>{setSolitaireVariety("emerald & round cut"),
                            setItemData('emeraldRound')
                        }} className={`w-full md:py-[6.37%] text-center  md:text-[16px] md:leading-[100%] ${solitaireVariety == "emerald & round cut" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'}  cursor-pointer`}>Emerald & Round cut</div>

                        <div onClick={()=>{setSolitaireVariety("princess cut"),
                        setItemData('princessCut')
                        }} className={`w-full md:py-[6.37%] text-center  md:text-[16px] md:leading-[100%] ${solitaireVariety == "princess cut" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'}  cursor-pointer`}>Princess cut</div>

                        <div onClick={()=>{setSolitaireVariety("marquise cut"),
                        setItemData('marquiseCut')
                        }} className={`w-full md:py-[6.37%] text-center  md:text-[16px] md:leading-[100%] ${solitaireVariety == "marquise cut" ? 'text-[#000000] bg-[#F7F6F4]' : 'text-[#000000]/40 bg-[#FFFFFF] border-[0.5px] border-[#F5F5F5]'}  cursor-pointer rounded-b-[14px]`}>Marquise cut</div>


                    </motion.div>

                </button>

            </div>

            {/* THE PRODUCTS GRID */}

            <div className="w-full px-[3.64%] md:px-[2.78%] py-[16.02%] md:py-[2.15%] md:pb- grid grid-cols-2 md:grid-cols-3 md:gap-[1.32%] ">


                {dataItem.map((data, _)=>(
                    
                <ProductItems key={data.id} id={data.id}  data={data} sortTag={sortBy} />

                ))}
                

                

            </div>


        </section>
    )
}