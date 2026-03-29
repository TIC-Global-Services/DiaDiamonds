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
      className="hero-section relative w-full h-screen overflow-hidden"
      data-theme="dark"
    >
      {/* Background Image with Parallax */}
      <div className="hero-bg absolute inset-0 top-0 bottom-0">
      <Parallax speed={-20} className="absolute inset-0">
        <Image
          src={heroImage}
          alt="heroImage"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="h-[100dvh] object-cover object-[20%_0%] md:object-center"
        />
      </Parallax>
      </div>

      <div className="hero-blur-overlay absolute inset-0 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col gap-7 md:gap-[14px] justify-center items-center md:items-start md:justify-end px-6 sm:px-[34px] md:px-0 lg:px-[0px] xl:px-[64px] 2xl:px-20 py-8 md:py-2">

        <h1 className="text-center md:text-left font-medium text-[30px] md:text-[44px] md:leading-[46px] uppercase md:pb-[0] text-white w-[90%] md:w-full">
          Crafted to last forever
        </h1>

        <p className="w-full text-center font-normal md:w-[40%] md:text-left md:text-[22px] md:leading-[24px] text-white md:pb-[0px]">
          Iconic Brand Feel Designed to Shine Today And Endure Forever
        </p>

        <div onClick={() => router.push("/collections/rings")} className="pb-0">
          <PrimaryBtn text="DISCOVER MORE" textColor="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;