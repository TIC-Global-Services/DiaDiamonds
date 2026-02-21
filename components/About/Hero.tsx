import ContainerLayout from "@/layout/ContainerLayout";

export default function Hero() {

    const ImageLeft = '/assets/img/About/Hero/HeroImgLeft.png';
    const ImageRight = '/assets/img/About/Hero/HeroImgRight.png';

  return (
    <ContainerLayout>
      {/* Outer flex container */}
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center h-[100vh]">
        {/* First inner div */}
        <div className="flex flex-col justify-center items-center mx-auto w-full md:w-2/5 gap-6">
          {/* Heading */}
          <h2 className="text-[40px] font-medium leading-[100%] text-[#000000] uppercase">
            ABOUT US
          </h2>

          {/* Paragraph */}
          <p className="text-[20px] leading-[140%] text-[#000000] text-center md:text-left">
            Dia Diamonds is the modern expression of a legacy built on trust, integrity, and exceptional craftsmanship. We create timeless diamond jewellery that blends heritage values with contemporary design, ensuring every piece reflects elegance, authenticity, and superior quality. With a strong commitment to ethical sourcing and meticulous attention to detail.
          </p>
        </div>

        {/* Second inner div */}
        <div className="w-full md:w-3/5 h-full flex items-end relative gap-4">
          {/* First image wrapper */}
          <div className="w-full ">
            <img
              src={ImageLeft}
              alt="Hero Image 1"
              className="w-full aspect-square -translate-y-[10%] translate-x-[50%]  z-20 hover:scale-110 transition delay-100 duration-300 ease-in-out"
            />
          </div>

          {/* Second image wrapper */}
          <div className="overflow-hidden">
            <img
              src={ImageRight}
              alt="Hero Image 2"
              className="w-full aspect-[422/633]  rounded-t-full z-10 hover:scale-110 transition delay-100 duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}