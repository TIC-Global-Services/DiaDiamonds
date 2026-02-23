import ContainerLayout from "@/layout/ContainerLayout";

export default function Showcase() {
  const BGImage =
    "/assets/img/Precision/Showcase/bgImage.png";

  return (
    <div className="w-full h-[90svh] relative">
      <img
        src={BGImage}
        alt="Background Image"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <ContainerLayout>
          <div className="flex w-full h-full">
            <h2 className="text-[#FFFFFF]">
              the intelligent luxury
            </h2>

          </div>
        </ContainerLayout>
      </div>
      <div className="absolute bottom-0 w-full ">
        <ContainerLayout>
          <div className="flex justify-end items-end w-full h-full">

            <h2 className="text-[#FFFFFF] ml-auto mt-auto flex">
              DIA diamond
            </h2>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}