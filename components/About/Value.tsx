export default function Value() {

    const BgImage = '/assets/img/About/Value/BgImage.png';
  return (
    <section data-theme="light" className="w-full   relative overflow-hidden">
      {/* Background image */}
      <img
        src={BgImage}
        alt="Value Background"
        className="object-fill w-full "
      />

      {/* Overlay content */}
      <div className="absolute inset-0 w-full flex justify-center items-center bg-[#000000]/30">
        <p className="w-[80%] md:w-[70%] text-[20px] md:text-[24px] leading-[140%] text-center text-[#FFFFFF]">
          Designed to capture light, crafted to capture hearts — Dia Diamonds brings brilliance to every chapter of your story.
        </p>
      </div>
    </section>
  );
}