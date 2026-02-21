"use client";

import {useState} from "react";
import CollectionItem from "./Reusable/CollectionItem";
import { Parallax } from "react-scroll-parallax";

export default function OurCollection() {

  const [scrollState, setScrollState] = useState<number>(1); 

    const collections = [
    {
        name:'Celestial Swirl Studs',
        color:'Yellow gold',
        img:'/assets/img/CollectionItems/collectionItem1.png',
    },
    {
        name:'Fine Diamond Ring',
        color:'Rose gold',
        img:'/assets/img/CollectionItems/collectionItem2.png',
    },
    {
        name:'Celeste Halo Bracelet',
        color:'Yellow',
        img:'/assets/img/CollectionItems/collectionItem3.png',
    },
    {
        name:'Crescent Aurelia ',
        color:'Rose gold',
        img:'/assets/img/CollectionItems/collectionItem4.png',
    },
    {
        name:'Celestia Solitaire Pendant',
        color:'Rose Gold',
        img:'/assets/img/CollectionItems/collectionItem5.png',
    },
    {
        name:'Daisy Crown Bracelet',
        color:'Rose Gold',
        img:'/assets/img/CollectionItems/collectionItem6.png',
    },
    {
        name:'Chevron Ring',
        color:'Yellow Gold',
        img:'/assets/img/CollectionItems/collectionItem7.png',
    },
    {
        name:'Multi-layer Diamond Necklace',
        color:'Yellow Gold',
        img:'/assets/img/CollectionItems/collectionItem8.png',
    },
    {
        name:'Frost Bloom Bracelet',
        color:'Silver',
        img:'/assets/img/CollectionItems/collectionItem9.png',
    },
    {
        name:'Sunbeam Earring',
        color:'Yellow Gold',
        img:'/assets/img/CollectionItems/collectionItem10.png',
    },
    {
        name:'Floral Crown Ring',
        color:'Rose Gold',
        img:'/assets/img/CollectionItems/collectionItem11.png',
    },
    {
        name:'Infinity Diamond Bracelet',
        color:'Rose Gold',
        img:'/assets/img/CollectionItems/collectionItem12.png',
    },
  ]

  return (
    <Parallax speed={10}>
    <div className="w-full py-21 px-5 overflow-hidden">
      
      {/* Inner flex container */}
      <div className="w-full flex flex-col justify-center items-center pb-20">
        {/* Section heading */}
        <h2 className="text-xl md:text-[40px] font-medium leading-[91%] tracking-[-3%] uppercase text-[#000000]">
          Our Collections
        </h2>

        {/* Section paragraph */}
        <p className="pt-[30px] text-base md:text-[14px] leading-[142%] text-[#000000] text-center">
          Timeless rings for every moment, crafted to shine, made to last
        </p>
      </div>

      {/* Collection items grid */}
      <div className={`w-full flex flex-wrap md:flex-nowrap gap-4 delay-100 duration-300 ease-in-out ${scrollState == 1 ? 'translate-x-0' : ''} ${scrollState ==2 ? '-translate-x-[100%]' : ''} ${scrollState ==3 ? '-translate-x-[200%]':''}`}>
        {collections.map((collection, id) => (
          <CollectionItem 
            key={id} 
            bgImage={collection.img} 
            color={collection.color} 
            name={collection.name} 
          />
        ))}
      </div>

      {/* Large sibling div */}
      <div className="w-full flex justify-center items-center pt-4 relative gap-2 flex-wrap md:flex-nowrap hidden md:block">
        {/* First inner div with top border */}
        <div className="w-full border-b-2 border-[#000000]/20 relative shrink">
          {/* Absolute border div inside first inner div */}
          <div className={`absolute  w-full top-0 left-0 flex ${scrollState == 1 ? 'justify-start' : ''} ${scrollState ==2 ? 'justify-center': ''} ${scrollState ==3 ? 'justify-end': ''}`}>
            <div className=" border-t-5 border-[#7C3C3C] w-[34%]"></div>
          </div>
        </div>

        {/* Second inner div with buttons */}
        <div className=" flex items-center gap-2 ">
          {/* First button */}
          <button onClick={()=>{
            if(scrollState!=1){
              setScrollState(scrollState-1);
            }
          }} className="w-10 h-10 rounded-[10px] bg-[#F9F9F9] hover:cursor-pointer stroke-black active:stroke-white active:bg-[#7C3C3C] flex justify-center items-center">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0502 7.07071L9.0857 12.106L14.121 17.0705" strokeLinecap="round" strokeLinejoin="round"/></svg>

          </button>

          {/* Second button */}
          <button onClick={()=>{
            if(scrollState!=3){
              setScrollState(scrollState+1);
              console.log(scrollState);
            }
          }} className="w-10 h-10 bg-[#F9F9F9] hover:cursor-pointer active:bg-[#7C3C3C] stroke-black active:stroke-white rounded-[10px] flex justify-center items-center">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.581227 10.4997L5.54053 5.45931L0.500164 0.500004"  strokeLinecap="round" strokeLinejoin="round"/></svg>

          </button>
        </div>
      </div>

    </div>
    </Parallax>
  );
}
