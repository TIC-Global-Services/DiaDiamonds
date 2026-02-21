export default function Craftsmanship() {
  const imageSrc = "/assets/img/Craftsmanship/CraftManShipImage1.png";
  const bottomImageSrc = "/assets/img/Craftsmanship/CraftManShipImage2.png";

  return (
    <div className="relative w-full md:aspect-[1440/1058] flex gap-0 flex-grow flex-wrap md:flex-nowrap">
      
      {/* First Div */}
      <div className="w-full md:w-1/2 md:h-full relative">
        <img
          src={imageSrc}
          alt="Craftsmanship"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-end mb-8 md:mb-28">
          <button className="BtnAnimation tracking-[0.166rem] border-[5.3px] rounded-full px-[18px] py-[7.6px] border-[#FFFFFF]/10 bg-[#FFFFFF]/40 uppercase">
            View Bracelet Collection
          </button>
        </div>
      </div>

      {/* Second Div */}
      <div className="w-full h-full md:w-1/2   md:h-full flex flex-col ">
        
        {/* Top Half */}
        <div className="w-full h-1/4 md:h-1/2 pl-[13.5px] flex flex-col justify-center md:mt-20 lg:mt-40 py-10 md:py-0">
          <h3 className="font-medium  text-xl lg:text-[24px] leading-[100%] tracking-[0.03em] text-[#000000] pb-[23px]">
            Elegant and Premium
          </h3>

          <p className="md:text-base lg:text-[20px] leading-[140%] text-[#000000]/60 md:pb-[30px] lg:pb-[62px]">
            Every diamond is meticulously selected and expertly set by skilled artisans. From precision cutting to flawless finishing, each piece reflects timeless beauty and uncompromising quality.
          </p>

          <div className="flex gap-2 mx-auto pt-4 md:pt-0">
            <div className="w-3 h-2 bg-[#000000]/10 rounded-full"></div>
            <div className="w-5 h-2 bg-[#431A1A] rounded-full"></div>
            <div className='w-3 h-2 bg-[#000000]/10 rounded-full'></div>
          </div>
        </div>

        {/* Bottom Half */}
        <div className="w-full h-3/4 md:h-1/2">
          <img
            src={bottomImageSrc}
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Absolute Overlay Div */}
      <div className="absolute w-full h-full flex justify-center pt-[60px] lg:pt-[100px] xl:pt-[133px]">
        <h2 className="font-medium text-[40px] leading-[100%] tracking-[0.02em] uppercase text-[#000000]">
          Craftsmanship
        </h2>
      </div>

    </div>
  );
}
