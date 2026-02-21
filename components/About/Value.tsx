export default function Value() {

    const BgImage = '/assets/img/About/Value/BgImage.png';
  return (
    <div className="w-full h-[100vh] relative ">
      {/* Background image */}
      <img
        src={BgImage}
        alt="Value Background"
        className="w-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 w-full flex justify-center items-center">
        <p className="md:w-[70%] text-[24px] leading-[100%] text-center text-[#FFFFFF]">
          “Designed to capture light, crafted to capture hearts — Dia Diamonds brings brilliance to every chapter of your story.”
        </p>
      </div>
    </div>
  );
}