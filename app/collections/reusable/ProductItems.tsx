"use client";

import { useState } from "react";

type DataProps = {
    img:string,
    name:string,
    color:string,
    type:string,
    id:number,
    tagType:string
}

type ProductItemsPropsType = {
    id:Number
    data: DataProps,
    sortTag:string,
}

export default function ProductItems({id, data, sortTag}:ProductItemsPropsType){

    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    let validItem = true;
    
    if (sortTag !== "default") {
        validItem = sortTag === data.tagType;
    }

    return(
        <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}  className={`${validItem == false ? 'hidden' : ''} flex flex-col justify-center items-center aspect-[441/603] md:gap-[18.37%] md:pt-[8.62%] md:pb-[10%] hover:border-0 hover:rounded-[10px] hover:bg-[#F7F6F4] hover:shadow-[0_4px_10px_0_rgba(0, 0, 0, 0.1)]`}>

                    <div className="w-full flex">

                        <div className={`min-w-[6.43%] md:min-w-[25.85%] px-0  md:px-[2%] aspect-69/18 md:aspect-114/30 md:ml-[6.36%] bg-[#431A1A]/25 flex justify-center items-center rounded-[20px] ${sortTag == 'default' ? 'hidden' : '' }`}>
                            <h3 className={``}>
                                {sortTag != 'default' ? data.tagType : ''}
                            </h3>
                        </div>
                        

                        <button onClick={()=>{setIsFavourite(!isFavourite)}} className={`${isHovered ? 'md:opacity-[100%] md:pointer-events-auto' : 'md:opacity-0 md:pointer-event-none'} cursor-pointer bg-[#FFFFFF] md:w-[9.3%] ml-auto mr-[8.2%] md:mr-[6%] mt-[20%] md:mt-0 aspect-412/529 flex justify-center items-center aspect-square rounded-full`}>
                            {isFavourite ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75965 0.0713213C4.42625 -0.0548527 5.10984 -0.013231 5.76003 0.193118C6.41022 0.399468 7.01043 0.765284 7.51643 1.2636L7.54429 1.29121L7.5699 1.26611C8.05283 0.795304 8.62058 0.444313 9.23528 0.236553C9.84998 0.0287922 10.4975 -0.0309603 11.1346 0.0612812L11.3199 0.091402C12.123 0.245444 12.8737 0.63789 13.4924 1.22718C14.1111 1.81647 14.5748 2.58067 14.8345 3.43885C15.0942 4.29703 15.1401 5.21725 14.9674 6.10206C14.7947 6.98686 14.4098 7.80332 13.8535 8.46497L13.718 8.61976L13.6818 8.65406L8.07076 14.828C7.94127 14.9704 7.76972 15.0558 7.58789 15.0684C7.40606 15.081 7.22628 15.02 7.08185 14.8966L7.01106 14.828L1.36761 8.61809C0.769764 7.97188 0.344588 7.15445 0.13917 6.25634C-0.0662479 5.35823 -0.0438921 4.41448 0.203762 3.52962C0.451415 2.64475 0.914702 1.8533 1.54231 1.24291C2.16993 0.632525 2.93737 0.227026 3.75965 0.0713213Z" fill="#7C3C3C"/></svg> :                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.61001 12.7699L7.53467 12.852L7.45179 12.7699C3.87282 9.23048 1.50693 6.89001 1.50693 4.51669C1.50693 2.87426 2.63713 1.64243 4.14407 1.64243C5.30441 1.64243 6.43461 2.46365 6.83394 3.58051H8.23539C8.63473 2.46365 9.76493 1.64243 10.9253 1.64243C12.4322 1.64243 13.5624 2.87426 13.5624 4.51669C13.5624 6.89001 11.1965 9.23048 7.61001 12.7699ZM10.9253 0C9.61424 0 8.35595 0.665186 7.53467 1.70813C6.71339 0.665186 5.4551 0 4.14407 0C1.82339 0 0 1.97913 0 4.51669C0 7.61268 2.56179 10.1502 6.44214 13.9853L7.53467 15.0693L8.62719 13.9853C12.5075 10.1502 15.0693 7.61268 15.0693 4.51669C15.0693 1.97913 13.2459 0 10.9253 0Z" fill="#7C3C3C"/></svg>
                        }</button>

                    </div>
                    

                    <img className="md:w-[82.5%] mx-auto md:aspect-[82.31/60.2]  object-cover" src={data.img} alt={data.name} />

                    <div className="flex flex-col justify-center items-center md:gap-[9px]">

                        <p className="text-[10px] md:text-[13px] leading-[19.6px] tracking-[0%] text-[#6E6E6E] m-0">{data.color}</p>

                        <h3 className="font-baskerville text-[13px] md:text-[24px] leading-[14px] md:leading-[19.52px] tracking-[0%] text-[#000000] uppercase text-center">{data.name}</h3>

                        {
                            data.type == "none" ? "" : <p className="font-baskerville text-[10px] md:text-[16px] leading-[20px] tracking-[0%] text-[#000000] m-0">{data.type}</p> 
                        }
                        

                    </div>
        </div>
    )
}