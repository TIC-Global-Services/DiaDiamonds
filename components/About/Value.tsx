export default function Value() {

    const BgImage = '/assets/img/About/Value/BgImage.png';
  return (
    <div className="w-full h-[100vh] md:h-[100svh]  relative overflow-hidden">
      {/* Background image */}
      <img
        src={BgImage}
        alt="Value Background"
        className="object-cover h-[100vh] md:h-auto  md:object-contain md:-translate-y-[20%] "
      />

      {/* Overlay content */}
      <div className="absolute inset-0 w-full flex justify-center items-center bg-[#000000]/30">
        <p className="w-[80%] md:w-[70%] text-[20px] md:text-[24px] leading-[140%] text-center text-[#FFFFFF]">
          Designed to capture light, crafted to capture hearts — Dia Diamonds brings brilliance to every chapter of your story.
        </p>
      </div>
    </div>
  );
}