"use client";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PantherImage from "@/public/assets/img/TheArtOfRefinement/panther_img.png";


export default function TheArtOfRefinement() {
  const router = useRouter();

  return (
    <section
      className="w-full min-h-screen pt-4 bg-[linear-gradient(180deg,#000000_0%,#140808_90.37%,#200C0C_99.95%,#140808_99.96%)]"
    >

      {/* MOBILE */}
      <div className="flex flex-col md:hidden">

        {/* Text content */}
        <div className="flex flex-col gap-4 items-center text-center px-6 pt-10 pb-20">
          <h2 className="text-[24px] font-medium tracking-tight text-white leading-[120%] uppercase">
            The Art of Radiant Refinement
          </h2>
          <p className="text-[14px] font-normal tracking-normal leading-[120%] text-white/50">
            Trust begins with transparency. Every diamond at Dia Diamonds is
            independently certified by internationally recognised gemological
            laboratories, ensuring verified quality, authenticity, and ethical
            standards. We prioritise conflict-free sourcing and sustainable
            practices, so you can wear your diamond with pride.
          </p>
          <PrimaryBtn
            mode="dark"
            text="View More"
            onClick={() => router.push("/collections/necklaces")}
            className="uppercase"
          />
        </div>

        {/* Image bottom */}
        <div className="relative w-full h-[565px]">
          <Image
            src={PantherImage}
            alt="panther_image"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="relative hidden md:flex h-[100dvh] overflow-hidden">

        {/* Panther */}
        <div className="absolute inset-y-0 md:w-[40%] lg:w-[45%] right-0 h-full">
          <Image
            src={PantherImage}
            alt="panther_image"
            fill
            className="object-contain object-right"
            sizes="50vw"
            priority
          />
        </div>


        {/* Left content */}
        <div className="absolute top-[15%] lg:left-[8%] w-[592px] flex flex-col gap-5 items-start justify-center md:px-10">
          <h2 className="text-[40px] font-medium tracking-tight text-white leading-[120%] uppercase">
            The Art of Radiant Refinement
          </h2>
          <p className="text-[20px] font-normal tracking-tight leading-[120%] text-white/50">
            Trust begins with transparency. Every diamond at Dia Diamonds is
            independently certified by internationally recognised gemological
            laboratories, ensuring verified quality, authenticity, and ethical
            standards. We prioritise conflict-free sourcing and sustainable
            practices, so you can wear your diamond with pride.
          </p>
          <PrimaryBtn
            mode="dark"
            text="View More"
            onClick={() => router.push("/collections/necklaces")}
            className="uppercase mt-2"
          />
        </div>
      </div>
    </section >
  );
}