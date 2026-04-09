export default function Value() {

    const BgImage = '/assets/img/About/Value/BgImage.png';
  return (
    <section className="w-full h-[100svh] md:h-auto  relative overflow-hidden">
      {/* Background image */}
      <img
        src={BgImage}
        alt="Value Background"
        className="object-cover md:object-fill w-full h-[100vh] md:h-auto"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 w-full flex justify-center items-center bg-[#000000]/30">
        <p className="w-[85%] md:w-[70%] text-base md:text-[24px] leading-[150%] md:leading-[140%] text-center text-[#FFFFFF]">
          Designed to capture light, crafted to capture hearts — Dia Diamonds brings brilliance to every chapter of your story.
        </p>
      </div>
    </section>
  );
}