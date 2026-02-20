"use client";
import { useState } from "react";
import Search from "../Home/Search";

export default function Navbar() {

  const [navMenuClick, setNavMenuClick ] = useState<boolean>(false); 
  const [collectionClick, setCollectionClick] = useState<boolean>(false);
  const [isSearch , setIsSearh] = useState<boolean>(false);

  const logo = '/assets/img/DiaDiamondLogo.png';
  const diamond = '/assets/img/Diamond.png';

  return (
    <div className="absolute inset-0 z-50">
      
      {/* NAV MENU */}
      <div className={`w-full lg:w-[595px] h-[100svh] bg-[#ffffff] absolute right-0 top-0 ${navMenuClick ? 'block' : 'hidden'}`}>
        
        <div className="flex items-center justify-end ml-auto pt-8 pr-10 " onClick={()=>setNavMenuClick(false)}>
          <svg className="hover:cursor-pointer hover:rotate-360 delay-100 duration-300"   width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.63369 2.36958C5.00606 1.6552 5.56715 1.05657 6.25597 0.638796C6.94479 0.221018 7.73496 7.8517e-05 8.54056 0H27.4992C28.3048 7.8517e-05 29.095 0.221018 29.7838 0.638796C30.4726 1.05657 31.0337 1.6552 31.4061 2.36958L35.5401 10.291C35.9468 11.0699 36.1113 11.9526 36.0126 12.8257C35.9138 13.6988 35.5563 14.5224 34.9859 15.1908L19.1371 33.7558C18.9992 33.917 18.828 34.0465 18.6353 34.1352C18.4426 34.224 18.233 34.27 18.0209 34.27C17.8087 34.27 17.5991 34.224 17.4064 34.1352C17.2137 34.0465 17.0425 33.917 16.9046 33.7558L1.05581 15.1908C0.485115 14.5226 0.127223 13.6991 0.0281178 12.826C-0.0709872 11.9529 0.0932212 11.0701 0.499647 10.291L4.63369 2.36958ZM8.11952 2.99821L12.2085 9.80733L16.3347 2.9375H8.54056C8.39811 2.9385 8.25646 2.95892 8.11952 2.99821ZM14.8053 11.188H21.2345L18.0189 5.83583L14.8053 11.188ZM24.9299 14.1255L21.1366 26.8899L32.0327 14.1255H24.9299ZM14.9032 26.8899L11.1119 14.1255H4.00702L14.9032 26.8899ZM14.1747 14.1255L18.0209 27.0642L21.8651 14.1255H14.1747ZM29.7826 5.60671L26.4299 11.188H32.6946L29.7826 5.60671ZM27.4972 2.9375H19.7031L23.8293 9.80733L27.9202 2.99821C27.7827 2.95875 27.6403 2.93832 27.4972 2.9375ZM9.60981 11.188L6.25715 5.60671L3.3451 11.188H9.60981Z" fill="#431A1A"/></svg>
          <p className='text-[11px] text-[#000000] uppercase hover:cursor-pointer '>[CLOSE]</p>
        </div>

        <ul className="w-full pt-[63px] pl-10 pr-10">
          <li className={`w-full flex justify-between items-center text-[32px] leading-[110%] text-[#000000] uppercase ${collectionClick ? '' : 'pb-10'}`}>
            <p className={`${collectionClick ? 'underline' : ''} hover:cursor-pointer `} onClick={()=>setCollectionClick(!collectionClick)}>Collection</p>
            <div onClick={()=>setCollectionClick(false)} className={`${collectionClick ? 'block' : 'hidden'} hover:underline w-4 border-t-2 border-[#000000] hover:cursor-pointer hover:scale-110 active:scale-100`}></div>
          </li>
          <ul className={`pt-[30px] pb-10 ${collectionClick ? 'block' : 'hidden'}`}>
              <li className="pb-[14px] text-2xl leading-[100%] ">
                <p className="hover:cursor-pointer hover:underline">Rings</p>
              </li>
              <li className="pb-[14px] text-2xl leading-[100%]">
                <p className="hover:cursor-pointer hover:underline">Pendants</p>
              </li>
              <li className="pb-[14px] text-2xl leading-[100%]">
                <p className="hover:cursor-pointer hover:underline">Necklaces</p>
              </li>
              <li className="pb-[14px] text-2xl leading-[100%]">
                <p className="hover:cursor-pointer hover:underline">Bracelets</p>
              </li>
              <li className="pb-[14px] text-2xl leading-[100%]">
                <p className="hover:cursor-pointer hover:underline">Earrings</p>
              </li>
            </ul>
          <li className="text-[32px] leading-[110%] pb-10 text-[#000000] uppercase hover:cursor-pointer hover:underline">
            About Us
          </li>
          <li className="text-[32px] leading-[110%] pb-10 text-[#000000] uppercase hover:cursor-pointer hover:underline">
            Precision
          </li>
          <li className="text-[32px] leading-[110%] pb-10 text-[#000000] uppercase hover:cursor-pointer hover:underline ">
            Contact Us
          </li>
        </ul>

      </div>

      {/* NAVBAR */}
      <nav className="w-full h-[94px] bg-transparent flex justify-between items-center px-10 border rounded-br-xl rounded-bl-xl">
        
        <button className="w-[37px] aspect-square hover:cursor-pointer " onClick={()=>setIsSearh(true)}>
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.4031 26.4575L21.5294 20.425C23.2638 18.2637 24.3506 15.5325 24.3506 12.5163C24.3506 5.62875 18.8931 0 12.1638 0C5.43438 0 0 5.58125 0 12.4925C0 15.812 1.28397 18.9956 3.56945 21.3428C5.85494 23.6901 8.95471 25.0087 12.1869 25.0087C15.1237 25.0087 17.7831 23.8925 19.8875 22.1112L25.7613 28.1437C25.8659 28.2558 25.9916 28.345 26.1307 28.4059C26.2698 28.4668 26.4194 28.4982 26.5706 28.4982C26.7218 28.4982 26.8715 28.4668 27.0106 28.4059C27.1497 28.345 27.2753 28.2558 27.38 28.1437C27.8425 27.6687 27.8425 26.9325 27.38 26.4575H27.4031ZM2.3125 12.4925C2.3125 6.91125 6.72938 2.35125 12.1869 2.35125C17.6444 2.35125 22.0613 6.8875 22.0613 12.4925C22.0613 18.0975 17.6444 22.6337 12.1869 22.6337C6.72938 22.6337 2.3125 18.0975 2.3125 12.4925Z" fill="white"/>
          </svg>
        </button>

        <div className="flex items-center justify-center gap-2">
          <img src={diamond} alt="diamond" className="w-10 aspect-square" />
          <img src={logo} alt="logo" className="w-[59px] h-[37px]" />
        </div>

        <div onClick={()=>setNavMenuClick(true)} className={`w-5 h-[13px] border-t-2 border-b-2 border-[#ffffff] hover:cursor-pointer   `}>
          <div className="flex mx-auto w-4 h-[6px] border-b-2 border-[#ffffff]"></div>
        </div>

      </nav>

      <Search isSearch={isSearch} setIsSearch={setIsSearh} />
    </div>
  )
}
