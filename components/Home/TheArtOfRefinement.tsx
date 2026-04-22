"use client";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";


export default function TheArtOfRefinement() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-black overflow-hidden">
      {/* 1. STABLE BACKGROUND GRADIENT */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* 2. TEXT CONTENT CONTAINER */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-[8%] pt-20 pb-10 md:py-0">
        <div className=" space-y-6">
          <h2 className="text-[32px] md:text-[48px] font-medium text-white uppercase leading-[1.1] tracking-tight">
            The Art of Radiant <br className="hidden md:block" /> Refinement
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/50 leading-relaxed max-w-[480px]">
            Trust begins with transparency. Every diamond at Dia Diamonds is independently certified by internationally recognised gemological laboratories, ensuring verified quality, authenticity, and ethical standards. We prioritise conflict-free sourcing and sustainable practices, so you can wear your diamond with pride.
          </p>
          <PrimaryBtn
            mode="dark"
            text="VIEW MORE"
            onClick={() => router.push("/collections/necklaces")}
            className="mt-4 w-fit px-10 py-4 uppercase border border-white/20 hover:bg-white hover:text-black transition-all"
          />
        </div>
      </div>

      {/* 3. PANTHER COTAINER */}
      <div className="w-full md:w-[40%] h-screen flex items-end justify-end overflow-hidden">
        <video
          src="/assets/video/pantherVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="
          w-full
          md:max-w-[70vh]
          object-contain object-center
        "
        />
      </div>
    </section>
  );
}