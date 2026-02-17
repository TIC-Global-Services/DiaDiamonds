export default function BrandValue(){

    const BrandValueImg = '/assets/img/BrandValue/BrandValue.png';
    return(
        <div className="w-full h-[100dvh] relative">

            <img 
                src={BrandValueImg} 
                alt="Brand Value" 
                className="w-full h-full object-cover relative"
            />

            <div className="absolute right-0 bottom-0 mb-20  inline-block px-6 xl:px-[105px] lg:px-[50px]">
                <div className="">
                    <h2 className=" font-medium text-[40px] leading-[123%] uppercase text-[#000000]">
                    Thoughtfully curated for you 
                </h2>

                <p className="text-[20px] leading-[100%] text-[#000000]/70 pt-[10px]">
                    Your diamond journey starts here.  Where brilliance meets craftsmanship,<br /> and every sparkle tells your story.
                </p>

                <button className="mt-[22px] bg-[#FFFFFFFF]/50 w-[138px] h-[39px] rounded-full px-[30px] py-[12px] font-medium text-[12px] leading-[100%] text-[#000000] uppercase">
                    Learn More
                </button>
                </div>

            </div>

        </div>
    )
}
