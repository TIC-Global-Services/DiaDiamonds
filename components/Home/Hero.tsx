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
      className="hero-section relative w-full h-[130vh] overflow-hidden"
      data-theme="dark"
    >
      {/* Background Image with Parallax */}
      <div className="hero-bg absolute inset-0">
      <Parallax speed={-20} className="absolute inset-0">
        <Image
          src={heroImage}
          alt="heroImage"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </Parallax>
      </div>

      <div className="hero-blur-overlay absolute inset-0 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col gap-7 md:gap-[14px]  justify-center items-center md:items-start md:justify-end px-6 sm:px-[34px] md:px-10 lg:px-[56px] xl:px-[64px] 2xl:px-20 py-8 md:py-22">

        <h1 className="text-center md:text-left font-medium text-[30px] md:text-[44px] md:leading-[46px] uppercase md:pb-[14px] text-white w-[90%] md:w-full">
          Crafted to last forever
        </h1>

        <p className="w-full text-center md:w-[40%] md:text-left md:text-[22px] md:leading-[24px] text-white md:pb-[12px]">
          Iconic Brand Feel Designed to Shine Today And Endure Forever
        </p>

        <div onClick={() => router.push("/collections/rings")}>
          <PrimaryBtn text="DISCOVER MORE" textColor="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;