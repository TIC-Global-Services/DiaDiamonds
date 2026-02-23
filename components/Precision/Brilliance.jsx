import ContainerLayout from "@/layout/ContainerLayout";

export default function Brilliance() {
  const BgImage = "/assets/img/Precision/Brilliance/bgImage.png";

  return (
    <div className="w-full bg-[linear-gradient(180deg,#f8cc96_0%,#f8db8b1_0.01%,#f7e7d3_0.02%,#f7ead9_0.03%,#f7f6f4_100%)]">
      
      <div className="w-full flex justify-center pt-19 pb-20">
        <h2>The art of choosing brilliant A or B</h2>
      </div>

      <div className="w-full relative">
        <ContainerLayout>
          <div className="w-full">
            <img
              src={BgImage}
              alt="Brilliance Background"
              className="w-full h-[120svh] object-cover"
            />
          </div>
        </ContainerLayout>

        {/* Absolute overlay */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-start">

          <ContainerLayout>
          {/* First div */}
          <div className="w-full flex justify-start">
          <div className="w-[35%] aspect-[350/165] flex flex-col gap-3 backdrop-blur-[5px] bg-[#000000]/25 p-6 border-0 rounded-[20px]">
            <h2 className="text-[20px]">Luxury That Makes Sense</h2>
            <p className="text-[13px] text-[#5e5e5e]">
              True sophistication is choosing wisely. Lab-grown diamonds combine advanced science with timeless beauty, offering exceptional value today and pride of ownership tomorrow. Its a purchase that feels as good as it looks.
            </p>
          </div>
          </div>

          {/* Second div */}
          <div className="w-full flex justify-end">
          <div className="w-[35%] aspect-[350/165] flex flex-col gap-3 border-0 rounded-[20px] p-6 backdrop-blur-[5px] bg-[#000000]/25 ">
            <h2 className="text-[20px]">Greater Diamond, Greater Value</h2>
            <p className="text-[13px] text-[#5e5e5e]">
              Lab-grown diamonds, your investment goes directly into size, brilliance, and quality, not inflated mining costs. You enjoy a larger, finest diamond for the same budget. Smart buying becomes visible luxury.
            </p>
          </div>
          </div>

          {/* Third div */}
          <div className="w-full">
          <div className="w-[35%]  aspect-[350/165] flex flex-col gap-3 border-0 rounded-[20px] p-6 backdrop-blur-[5px] bg-[#000000]/25 mx-auto">
            <h2 className="text-[20px]">Beauty Without Compromise</h2>
            <p className="text-[13px] text-[#5e5e5e]">
              Every DIA diamond delivers the same fire, strength, and certification as a mined stone. The difference lies only in origin, never in elegance. You gain pure brilliance with modern intelligence behind your choice.
            </p>
          </div>
          </div>
          </ContainerLayout>

        </div>
      </div>

    </div>
  );
}