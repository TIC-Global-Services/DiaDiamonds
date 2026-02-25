"use client";
import ContainerLayout from "@/layout/ContainerLayout";


const Hero = () => {

  const heroImage = '/assets/img/Hero/HeroImage.jpg';


  return (
   

        <div className="w-full h-screen relative overflow-scroll pointer-events-" style={{scrollbarWidth:'none'}}>

          
            <img 
              src={heroImage}
              alt="heroImage" 
              className="w-full h-full object-cover object-center scale-110 md:scale-100 md:object-fill"
            />
          
            
            
            <div className="absolute w-full h-full bottom-0 left-0 ">

                <div className="w-full h-full flex flex-col gap-6 justify-center items-center  md:items-start md:justify-end px-6 sm:px-[34px] md:px-10 lg:px-[56px] xl:px-[64px] 2xl:px-20 py-8 md:py-22">

                  <h1 className="text-center md:text-left font-medium text-[44px] leading-[46px] uppercase pb-[14px] text-[#FFFFFF]">
                  Crafted to last forever
                </h1>

                <p className="w-full text-center md:w-[70%] md:text-left text-[22px] leading-[24px] text-[#FFFFFF] pb-[24px]">
                  Iconic Brand Feel Designed to Shine Today And Endure Forever
                </p>

                <button className="BtnAnimation cursor-pointer w-[213px] h-[44px] border border-[1px] tracking-[0.166rem] backdrop-blur-md border-[#FFFFFF]/.1 text-[#e7dfd7] bg-[#87888A]/20 text-[10px] md:text-base tracking-[6px] md:tracking-[3px]  md:bg-[#000000]/10 rounded-full  hover:scale-110 active:scale-100">
                    DISCOVER MORE
                </button>

                </div>
            </div>

            
        </div>
     
  )
}

export default Hero
