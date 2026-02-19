import QA from "./Reusable/QA";

export default function QandA() {

  const QAImageLeft = '/assets/img/Q&A/QAImage.png';
  

  return (
    <div className="w-full relative">

      {/* Non-absolute content container */}
      <div className="relative z-20 w-full py-20 px-10 flex justify-end items-start gap-[60px] flex-wrap md:flex-nowrap">
        
        <img
          src={QAImageLeft}
          alt="Q&A visual"
          className="w-[30%] aspect-[448/673] object-contain"
        />

        <div className="flex flex-col justify-center items-center w-[55%]">
          <h2 className="font-medium text-[40px] leading-[100%] text-[#000000] uppercase pb-10">
            Popular Questions
          </h2>

          <div className="w-full border-t border-[#000000]/50" />

          <QA question="Are all your diamonds certified?" answer="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <QA question="Do you offer natural and lab-grown diamonds?" answer="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <QA question="Can I personalise or customise my jewellery?" answer="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <QA question="Is lifetime care or servicing included?" answer="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <QA question="What are Solitaire Rings?" answer="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          <QA question="What is your return or exchange policy?" answer="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>

        
      </div>

      {/* Absolute background container */}
      <div className="absolute inset-0 w-full h-full flex z-10">
        
        <div className="bg-[#EAE3D9] w-[42%]">
        </div>

        <div className="bg-[#F9F9F9] w-full">
        </div>

      </div>

    </div>
  );
}
