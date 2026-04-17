"use client";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import { useRouter } from "next/navigation";
import Container from "@/components/layouts/Container";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="w-full h-screen relative">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/video/diahero.mp4" type="video/mp4" />
          <source src="/assets/video/diahero.webm" type="video/webm" />
        </video>
      </div>

    {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <Container className="relative z-10 flex h-screen pt-8 items-center md:items-center lg:items-end">
        <div className="flex flex-col gap-4 pb-28 md:pb-0 lg:pb-[6vh] text-center md:text-left items-center md:items-start max-w-[700px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[110%] tracking-tight text-white uppercase">
            Crafted to last forever
          </h1>

          <p className="text-[14px] sm:text-base md:text-lg text-white/80 max-w-[500px]">
            Iconic Brand Feel Designed to Shine Today And Endure Forever
          </p>

          <PrimaryBtn
            onClick={() => router.push("/collections/rings")}
            className="px-3 py-3 md:px-8 md:py-2 text-[11px] md:text-sm tracking-widest uppercase"
          >
            Discover More
          </PrimaryBtn>
        </div>
      </Container>
    </section>
  );
};

export default Hero;