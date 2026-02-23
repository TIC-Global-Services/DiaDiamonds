import ContainerLayout from "@/layout/ContainerLayout";


export default function Certified() {
  // Variables for images
  const bgImage1 = '/assets/img/precision/Certified/bgimage1.jpg';
  const bgImage2 = '/assets/img/precision/Certified/bgimage2.jpg';
  const logo = '/assets/img/precision/Certified/logo1.png';
  const logo2 = '/assets/img/precision/Certified/logo2.png';

  return (
    <div className="w-full bg-[linear-gradient(180deg,#f7f6f4_0%,#f7edee0_99.97%)]">
      <ContainerLayout>
        {/* First Row */}
        <div className="flex justify-center pt-19 pb-20">
          <h2>SBL certified diamonds.</h2>
        </div>

        <div className="w-full flex relative pb-[120px]">
          {/* First container with image */}
          <ContainerLayout className="h-full z-10">
            <img
              src={bgImage1}
              alt="Certified Diamond 1"
              className="border border-[#FFFFFF]/25 rounded-20"
            />
          </ContainerLayout>

          {/* Second container with content */}
          <ContainerLayout
            className="h-full z-20 bg-[#000000]/25 backdrop-blur-[5px] px-[38px] py-[60px] translate-y-1/5 -translate-x-1/5"
          >
            <div className="flex mx-auto w-full">
              <img src={logo} alt="Logo 1" className="w-full" />
            </div>

            <div className="flex flex-col items-start gap-4 mt-6">
              <h2>Your Heading Here</h2>
              <p>First paragraph placeholder content.</p>
              <p>Second paragraph placeholder content.</p>
            </div>
          </ContainerLayout>
        </div>

        {/* Second Row (Mirrored) */}
        <div className="w-full flex relative pb-[120px]">
          {/* Second container comes first (new bgImage2 and logo2) */}
          <ContainerLayout
            className="h-full z-20 bg-[#000000]/25 backdrop-blur-[5px] px-[38px] py-[60px] translate-y-1/5 -translate-x-1/5"
          >
            <div className="flex mx-auto w-full">
              <img src={logo2} alt="Logo 2" className="w-full" />
            </div>

            <div className="flex flex-col items-start gap-4 mt-6">
              <h2>Your Heading Here</h2>
              <p>First paragraph placeholder content.</p>
              <p>Second paragraph placeholder content.</p>
            </div>
          </ContainerLayout>

          {/* First container comes second */}
          <ContainerLayout className="h-full z-10">
            <img
              src={bgImage2}
              alt="Certified Diamond 2"
              className="border border-[#FFFFFF]/25 rounded-20"
            />
          </ContainerLayout>
        </div>
      </ContainerLayout>
    </div>
  );
}