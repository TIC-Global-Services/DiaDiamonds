import Image from "next/image";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import bgImage from '@/public/assets/img/Contact/bgImage.png'

export default function Hero() {
  return (
    <section data-theme="dark" className="relative w-full min-h-screen md:h-auto sm:aspect-[1440/960] md:aspect-[1440/960] overflow-hidden">

      <Image
        src={bgImage}
        alt="bgImage"
        fill
        priority
        quality={100}
        className="object-cover md:object-fill object-[30%_50%]"
      />

      <div className="absolute top-[64.6%] md:top-[38.75%] md:left-[23.82%] w-full md:w-[52.36%] flex flex-col justify-center items-center sm:px-8 md:px-0 overflow-hidden">
        <h2 className="text-white text-center h2 leading-[100%] md:leading-[46px] tracking-tight uppercase m-0 pb-2 sm:pb-3 md:pb-[1.86%]">
          Discover timeless elegance
        </h2>

        <p className="text-white p text-center m-0 md:mx-auto pb-4 sm:pb-5 md:pb-[2.45%]">
          Exquisite Diamond Jewellery of Unparalleled Brilliance
        </p>

        <PrimaryBtn text="SHOP NOW" />
      </div>

    </section>
  );
}