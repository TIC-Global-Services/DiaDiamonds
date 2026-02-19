"use client";
import React, { Dispatch } from 'react';
import { useState } from 'react';

type SearchPanelProps = {
    isSearch: boolean,
    setIsSearch: Dispatch<React.SetStateAction<boolean>>,
};


export default function Search({isSearch, setIsSearch}:SearchPanelProps) {

    const [searchState, setSearchState] = useState('Necklace');

    const searchImage1 = '/assets/img/Search/SearchImg1.jpg';
    const searchImage2 = '/assets/img/Search/SearchImg2.jpg';

  return (
    <div className={`absolute inset-0 w-full h-[100dvh] px-10 py-[26px] bg-[#ffffff] z-50 ${isSearch ? 'block' : 'hidden'}`} >
      <button className="pb-[30px] hover:cursor-pointer" onClick={()=>{setIsSearch(false)}}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 0C6.975 0 0 6.975 0 15.75C0 24.525 6.975 31.5 15.75 31.5C24.525 31.5 31.5 24.525 31.5 15.75C31.5 6.975 24.525 0 15.75 0ZM21.825 23.625L15.75 17.55L9.675 23.625L7.875 21.825L13.95 15.75L7.875 9.675L9.675 7.875L15.75 13.95L21.825 7.875L23.625 9.675L17.55 15.75L23.625 21.825L21.825 23.625Z" fill="black" fill-opacity="0.2"/></svg>

      </button>
      
      <div className="pl-[70px]">
        <h2 className="text-[24px] leading-[100%] tracking-[0%] text-[#000000] pb-[11px]">
          Search
        </h2>

        <input className="w-full border-b border-[#000000] border-t-0 border-x-0 px-4 py-2" />

        <h2 className="text-[24px] leading-[100%] tracking-[0%] text-[#000000] pt-6 pb-5">
          Popular
        </h2>

        <div className="flex gap-[10px] w-[40%] pb-[57px]">
          <div onClick={()=>{setSearchState('Necklace')}} className={`flex justify-center items-center ${searchState === 'Necklace' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer`}>
            <p className="text-[16px] leading-[100%] text-[#000000]">
              Heart Necklace
            </p>
          </div>

          <div onClick={()=>{setSearchState('Bracelets')}} className={`flex justify-center items-center ${searchState === 'Bracelets' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer`}>
            <p>
              Bracelets 
            </p>
          </div>

          <div onClick={()=>{setSearchState('Rings')}} className={`flex justify-center items-center ${searchState === 'Rings' ? 'bg-[#F8CC96]/24' : 'bg-[#FBF9F7]'} p-3 hover:cursor-pointer`}>
            <p className="text-[16px] leading-[100%] text-[#000000]">
              Rings
            </p>
          </div>
        </div>

          <h2 className="text-[24px] leading-[100%] tracking-[0%] text-[#000000]">
            Spotlight
          </h2>

          <div className="flex w-[50%] gap-[30px] ">
            <div className="flex flex-col items-center justify-center">
              <img src={searchImage1} alt="search image 1"className='w-[288px] h-[153px] ' />
              <p className="text-[16px] leading-[100%] text-[#000000]">
                Brand New
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img src={searchImage2} alt="search image 2" className='w-[288px] h-[153px] ]'/>
              <p className="text-[16px] leading-[100%] text-[#000000]">
                View Collections
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
