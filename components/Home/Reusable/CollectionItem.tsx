"use client";

import { JSX } from "react";
import { useState } from "react";

interface CollectionItemProp{
  name:string,
  color:string,
  bgImage:string,
}

export default function CollectionItem({name, color, bgImage}:CollectionItemProp):JSX.Element {

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <div className="w-[45%] md:w-[23%] md:grow shrink-0" >
      
      {/* First inner div */}
      <div className="w-full aspect-square bg-[#f9f9f9] pb-[13px] relative rounded-[20px] overflow-hidden">
        <img 
          src={bgImage} 
          alt={name} 
          className="w-full aspect-square object-contain hover:scale-110 delay-75 duration-100 ease-in-out"
        />

        {/* Absolute overlay */}
        <div className="absolute  top-0 right-0 px-9 py-9 ">
            <button onClick={()=>setIsFavourite(!isFavourite)} className="w-10 h-10 rounded-full flex justify-center items-center bg-[#FFFFFF] ml-auto hover:cursor-pointer  hover:scale-110 active:scale-100 ">
              {
                isFavourite ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75965 0.0713213C4.42625 -0.0548527 5.10984 -0.013231 5.76003 0.193118C6.41022 0.399468 7.01043 0.765284 7.51643 1.2636L7.54429 1.29121L7.5699 1.26611C8.05283 0.795304 8.62058 0.444313 9.23528 0.236553C9.84998 0.0287922 10.4975 -0.0309603 11.1346 0.0612812L11.3199 0.091402C12.123 0.245444 12.8737 0.63789 13.4924 1.22718C14.1111 1.81647 14.5748 2.58067 14.8345 3.43885C15.0942 4.29703 15.1401 5.21725 14.9674 6.10206C14.7947 6.98686 14.4098 7.80332 13.8535 8.46497L13.718 8.61976L13.6818 8.65406L8.07076 14.828C7.94127 14.9704 7.76972 15.0558 7.58789 15.0684C7.40606 15.081 7.22628 15.02 7.08185 14.8966L7.01106 14.828L1.36761 8.61809C0.769764 7.97188 0.344588 7.15445 0.13917 6.25634C-0.0662479 5.35823 -0.0438921 4.41448 0.203762 3.52962C0.451415 2.64475 0.914702 1.8533 1.54231 1.24291C2.16993 0.632525 2.93737 0.227026 3.75965 0.0713213Z" fill="#7C3C3C"/></svg> : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.61001 12.7699L7.53467 12.852L7.45179 12.7699C3.87282 9.23048 1.50693 6.89001 1.50693 4.51669C1.50693 2.87426 2.63713 1.64243 4.14407 1.64243C5.30441 1.64243 6.43461 2.46365 6.83394 3.58051H8.23539C8.63473 2.46365 9.76493 1.64243 10.9253 1.64243C12.4322 1.64243 13.5624 2.87426 13.5624 4.51669C13.5624 6.89001 11.1965 9.23048 7.61001 12.7699ZM10.9253 0C9.61424 0 8.35595 0.665186 7.53467 1.70813C6.71339 0.665186 5.4551 0 4.14407 0C1.82339 0 0 1.97913 0 4.51669C0 7.61268 2.56179 10.1502 6.44214 13.9853L7.53467 15.0693L8.62719 13.9853C12.5075 10.1502 15.0693 7.61268 15.0693 4.51669C15.0693 1.97913 13.2459 0 10.9253 0Z" fill="#7C3C3C"/></svg>
              }
              

            </button>
        </div>
      </div>

      {/* Second inner div */}
      <div className="px-4 py-3.5">
        <p className="text-[13px] leading-[19.6px] text-[#606060]">
            {color}
        </p>
        <h2 className="text-[24px] font-[Baskerville] leading-[19.5px] text-[#000000]">
            {name}
        </h2>
      </div>

    </div>
  );
}