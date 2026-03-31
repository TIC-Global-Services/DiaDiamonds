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
      className="hero-section relative w-full h-[100dvh] overflow-hidden"
      data-theme="dark"
    >
      {/* Background Image with Parallax */}
      <div className="hero-bg absolute inset-0 flex justify-center w-full h-full">
        <Parallax
          speed={-20}
          style={{ height: "130%", width: "100%", top: "-20%" }}
        >
          <Image
            src={heroImage}
            alt="heroImage"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[10%_70%] sm:object-center"
          />
        </Parallax>
      </div>

      {/* Blur overlay */}
      <div className="hero-blur-overlay absolute inset-0 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col gap-2 sm:gap-2 md:gap-2 justify-end items-center sm:items-start px-6 pb-[20dvh] sm:px-8 sm:pb-[15dvh] md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <h2 className="text-center sm:text-left text-white px-4 sm:px-0 sm:w-full lg:w-[60%]">
          Crafted to last forever
        </h2>

        <p className="text-center sm:text-left text-white/90 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-xl">
          Iconic Brand Feel Designed to Shine Today And Endure Forever
        </p>

        <div onClick={() => router.push("/collections/rings")} className="mt-2">
          <PrimaryBtn text="DISCOVER MORE" textColor="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;