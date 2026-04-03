"use client";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import brandValueImg from "@/public/assets/img/BrandValue/BrandValue.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BrandValue() {
  const router = useRouter();

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      data-theme="dark"
    >
      {/* Background */}
      <Image
        src={brandValueImg}
        alt="Rings Image"
        fill
        priority
        className="w-full object-cover object-[55%_50%] md:object-[60%_70%] lg:object-[50%_80%] xl:object-[65%_80%]"
      />

      {/* Overlay */}
      <div className="
        absolute inset-0 
        flex flex-col justify-end 
        md:flex-row md:items-center md:justify-end lg:items-center xl:items-center
        px-5 sm:px-6 md:px-10 lg:px-16
        pb-10 sm:pb-12 md:pb-0
      ">

        {/* Content */}
        <div className="
          w-full
          max-w-[260px] 
          sm:max-w-[320px]
          md:max-w-[500px]
          lg:max-w-[680px]
          xl:max-w-[700px]
          flex flex-col
          gap-2 sm:gap-4 md:gap-2 lg:gap-4 xl:gap-4
          text-left py-26 ml-22 md:justify-end md:mt-14 md:ml-30 lg:px-26 xl:px-26
        ">

          {/* Heading */}
          <h2 className="text-[10px] md:text-[24px] lg:text-[30px] xl:text-[30px] leading-normal font-medium tracking-tight text-black">
            Thoughtfully curated for you
          </h2>

          {/* Paragraph */}
          <p className="text-[8px] md:text-[12px] lg:text-[14px] xl:text-[18px] leading-none font-normal tracking-tight text-black/70">
            Your diamond journey starts here. Where brilliance meets craftsmanship, and every sparkle tells your story.
          </p>

          {/* Button */}
          <div onClick={() => router.push("/collections/rings")}>
            <PrimaryBtn
              text="LEARN MORE"
              textColor="black"
              hoverColor="#D7E0E1"
              hoverTextColor="black"
              className="btn-text md:px-4 md:py-2"
            />
          </div>

        </div>
      </div>
    </section>
  );
}