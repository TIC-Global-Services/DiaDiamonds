import { JSX } from "react";

interface CollectionItemProp{
  name:string,
  color:string,
  bgImage:string,
}

export default function CollectionItem({name, color, bgImage}:CollectionItemProp):JSX.Element {
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
            <button className="w-10 h-10 rounded-full flex justify-center items-center bg-[#FFFFFF] ml-auto hover:cursor-pointer  hover:scale-110 active:scale-100 ">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.61001 12.7699L7.53467 12.852L7.45179 12.7699C3.87282 9.23048 1.50693 6.89001 1.50693 4.51669C1.50693 2.87426 2.63713 1.64243 4.14407 1.64243C5.30441 1.64243 6.43461 2.46365 6.83394 3.58051H8.23539C8.63473 2.46365 9.76493 1.64243 10.9253 1.64243C12.4322 1.64243 13.5624 2.87426 13.5624 4.51669C13.5624 6.89001 11.1965 9.23048 7.61001 12.7699ZM10.9253 0C9.61424 0 8.35595 0.665186 7.53467 1.70813C6.71339 0.665186 5.4551 0 4.14407 0C1.82339 0 0 1.97913 0 4.51669C0 7.61268 2.56179 10.1502 6.44214 13.9853L7.53467 15.0693L8.62719 13.9853C12.5075 10.1502 15.0693 7.61268 15.0693 4.51669C15.0693 1.97913 13.2459 0 10.9253 0Z" fill="#7C3C3C"/></svg>

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