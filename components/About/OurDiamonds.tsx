import ContainerLayout from "@/layout/ContainerLayout";


export default function OurDiamonds() {

    const ImageLeft = '/assets/img/About/OurDiamonds/ImageLeft.png';

  return (
    <div className="w-full h-[100vh] overflow-hidden flex flex-wrap md:flex-nowrap">
      {/* Image container */}
      <div className="w-[40%] h-full overflow-hidden">
        <img
          src={ImageLeft}
          alt="Our Diamonds"
          className="w-full h-full object-cover hover:scale-110 transition-transform delay-100 duration-300 ease-in-out"
        />
      </div>

      {/* Content container */}
      <div className="w-full flex justify-center items-center bg-[#EAE3D9]">
        <ContainerLayout>
          <div className="w-full flex flex-col justify-start items-start gap-9">
            <h2 className="font-medium text-[40px] leading-[100%] uppercase text-[#000000]">
              Our Diamonds
            </h2>

            <p className="font-light text-[20px] leading-[140%] text-[#000000]">
                Each Dia Diamonds creation is shaped by responsible sourcing, global certification, and masterful craftsmanship — resulting in jewellery that reflects integrity as much as brilliance. Each Dia Diamonds creation is shaped by responsible sourcing, global certification, and masterful craftsmanship — resulting in jewellery that reflects integrity as much as brilliance.
            </p>

            <button className="BtnAnimation px-12 py-4 border-5 rounded-full border-[#FFFFFF]/10 backdrop-blur-sm bg-[#000000]/10 text-[16px] font-medium leading-[100%] text-[#000000]">
              Discover Our Craft
            </button>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}