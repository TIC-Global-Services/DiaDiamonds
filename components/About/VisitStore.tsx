import ContainerLayout from "@/layout/ContainerLayout";

export default function VisitStore() {

    const ImageRight = '/assets/img/About/VisitStore/ImageRight.jpg';

  return (
    <div className="w-full">
      <ContainerLayout>
        <div className="w-full flex justify-center items-center flex-wrap md:flex-nowrap gap-0">
          {/* First div */}
          <div className="flex flex-col w-full">
            <h2 className="font-medium text-[40px] leading-[100%] uppercase text-[#000000] pb-4">
              Visit Our Store
            </h2>

            <p className="text-[20px] leading-[100%] text-[#000000] pb-4">
              {/* Placeholder content */}
              Step into our boutique to experience Dia Diamonds as it’s meant to be.
            </p>

            <label className="font-medium text-[16px] leading-[100%] text-[#000000] pb-2">
              Enter email
            </label>

            <div className="flex gap-[30px] items-center">
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-[80%] px-[25px] py-[14px] rounded-full border border-[#000000]/20 backdrop-blur-sm bg-[#000000]/10"
              />

              <button className=" BtnAnimation border-0 rounded-[50px] border border-[#000000] bg-[#000000] text-[#FFFFFF] px-[40px] py-[14px]">
                Book
              </button>
            </div>
          </div>

          {/* Second div */}
          <div className="w-full overflow-hidden">
            <img
              src={ImageRight}
              alt="Visit Store"
              className="w-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out delay-100"
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}