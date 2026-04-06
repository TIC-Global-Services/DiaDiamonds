"use client";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import Image from "next/image";
import heroImage from "@/public/assets/img/Hero/HeroImage.jpg";
import { useRouter } from "next/navigation";
import Container from "@/components/layouts/Container";

const Hero = () => {
  const router = useRouter();

  return (
    <section data-theme="dark" className="w-full min-h-screen relative overflow-hidden">
      
      {/* Optimized Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          priority
          quality={75} // reduced
          sizes="100vw"
          className="object-cover object-[12%_45%] md:object-[40%_100%]"
        />
      </div>

      {/* Lightweight Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen pt-8 items-center md:items-center lg:items-end">
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