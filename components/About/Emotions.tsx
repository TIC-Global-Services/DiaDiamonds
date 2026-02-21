import ContainerLayout from "@/layout/ContainerLayout";

export default function Emotions() {

    const BgImage = '/assets/img/About/Emotions/BgImage.png';
    const diamond = '/assets/img/Diamond.png';
    const logo = '/assets/img/DiaDiamondLogo.png';

return (
    <div className="w-full h-[100vh] overflow-hidden relative">
  
      {/* Background image */}
      <img
        src={BgImage}
        alt="Emotions"
        className="w-full"
      />

      {/* First absolute overlay */}
      <div className="w-full absolute inset-0 h-full">
        <ContainerLayout>
          <h2 className="font-medium text-[40px] leading-[100%] text-[#FFFFFF] w-[25%] uppercase">
            Emotion Embraces Techniques
          </h2>
        </ContainerLayout>
      </div>

      {/* Second absolute overlay */}
      <div className="w-full h-full absolute inset-0 flex justify-end items-end px-6 xl:px-[105px] lg:px-[50px] py-8 md:py-10">

        <div>
          <div className="flex gap-2">
            <img src={diamond} alt="diamond" className="w-10 aspect-square"/>
            <img src={logo} alt="logo" className="w-10 aspect-square"/>
          </div>
          <p className="text-[20px] leading-[100%] text-[#FFFFFF]">
            Where Brilliance Meets Beauty
          </p>
        </div>
          
      </div>
    </div>
  );
}