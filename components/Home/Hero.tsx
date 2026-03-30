"use client";

import { Parallax } from "react-scroll-parallax";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import Image from "next/image";
import heroImage from "@/public/assets/img/Hero/HeroImage.jpg";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      className="hero-section relative w-full h-[100svh] md:h-[150svh] overflow-hidden"
      data-theme="dark"
    >
      {/* Background Image with Parallax */}
      <div className="hero-bg absolute inset-0">
        <Parallax speed={-20} className="h-full w-full">
          <div className="relative w-full h-[100svh] md:h-[120svh]">
            <Image
              src={heroImage}
              alt="heroImage"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-[20%_70%] md:object-center"
            />
          </div>
        </Parallax>
      </div>

      <div className="hero-blur-overlay absolute  inset-0 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col gap-4 md:gap-[12px] bottom-[15%] justify-center items-center md:items-start md:justify-end px-6 py-4 sm:px-[34px] md:px-[27px] lg:px-[64px] 2xl:px-20 md:py-15">

        <h1 className="text-center md:text-left font-medium text-3xl md:text-[44px] leading-[140%] md:leading-[46px] uppercase md:pb-[0] text-white w-[100%] md:w-full">
          Crafted to last forever
        </h1>

        <p className="w-[90%] text-center text-sm font-normal leading-[22px] md:w-[40%] md:text-left md:text-[22px] md:leading-[24px] text-white md:pb-[4px]">
          Iconic Brand Feel Designed to Shine Today And Endure Forever
        </p>

        <div onClick={() => router.push("/collections/rings")} className="pb-2 md:mt-2">
          <PrimaryBtn text="DISCOVER MORE" textColor="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;