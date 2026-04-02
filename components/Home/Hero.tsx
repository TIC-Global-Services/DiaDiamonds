"use client";

import { Parallax } from "react-scroll-parallax";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import Image from "next/image";
import heroImage from "@/public/assets/img/Hero/HeroImage.jpg";
import { useRouter } from "next/navigation";
import ContainerLayout from "@/layout/ContainerLayout";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="hero-section relative w-full min-h-screen overflow-hidden" data-theme="dark">
      {/* Background Image with Parallax */}
      <div className="hero-bg absolute inset-0 flex items-start md:items-center justify-center w-full h-full">
        <Parallax
          speed={-20}
          className="w-full h-[155%] -top-[20%] relative"
        >
          <Image
            src={heroImage}
            alt="heroImage"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[25%_45%] md:object-[20%_65%]"
          />
        </Parallax>
      </div>

      {/* Blur overlay */}
      <div className="hero-blur-overlay absolute inset-0 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col gap-3 justify-center md:justify-end items-center md:items-start
          text-center md:text-left px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-[16vh] sm:pb-[12vh] md:pb-[8vh] lg:pb-[10vh]">

        <h2 className="h2 text-center md:text-start text-white w-full md:w-[100%] lg:w-[60%]">
          Crafted to last forever
        </h2>

        <p className="p text-center md:text-start text-white/90 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-xl">
          Iconic Brand Feel Designed to Shine Today And Endure Forever
        </p>

        <div onClick={() => router.push("/collections/rings")} >
          <PrimaryBtn text="DISCOVER MORE" textColor="text-white" className="text-[8px] font-normal md:text-[16px] tracking-widest"/>
        </div>
      </div>
    </section>

  );
};

export default Hero;