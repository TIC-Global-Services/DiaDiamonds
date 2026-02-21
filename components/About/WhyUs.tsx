import ContainerLayout from "@/layout/ContainerLayout";

export default function WhyUs() {

    const BgImage = '/assets/img/About/WhyUs/BgImage.png';
    const diamond = '/assets/img/Diamond.png';

  return (
    <div className="w-full h-[100vh] relative overflow-hidden">
      {/* Background image */}
      <img
        src={BgImage}
        alt="WhyUs Background"
        className="w-full object-cover"
      />

      {/* Absolute overlay */}
      <div className="w-full absolute inset-0">
        <ContainerLayout>
          {/* Heading */}
          <div className="flex items-start">
            <h2 className="text-[40px] font-medium leading-[100%] tracking-[5%] uppercase text-[#000000] pb-8">
            Why Dia Diam
          </h2>
          <img src={diamond} alt="diamond logo" className="w-10 aspect-square" />
          <h2 className="text-[40px] font-medium leading-[100%] tracking-[5%] uppercase text-[#000000] pb-8">
            nds?
          </h2>
          </div>

          {/* Paragraph */}
          <p className="text-[20px] leading-[100%] text-[#000000]/50 w-[40%]">
          Because true brilliance is more than sparkle. At Dia Diamonds, every creation is guided by ethics, certified authenticity, and timeless craftsmanship — ensuring jewellery that feels as meaningful as it looks.
          </p>
        </ContainerLayout>
      </div>
    </div>
  );
}