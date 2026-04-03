"use client";

import { Parallax } from "react-scroll-parallax";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import Image from "next/image";
import heroImage from "@/public/assets/img/Hero/HeroImage.jpg";
import { useRouter } from "next/navigation";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";

const Hero = () => {
  const router = useRouter();

  return (
    <Section variant="hero" className="relative overflow-hidden" data-theme="dark">

      {/* Background */}
      <div className="absolute inset-0">
        <Parallax speed={-20} className="w-full h-[120%] md:h-[140%] relative">
          <Image
            src={heroImage}
            alt="heroImage"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="
            object-cover 
            object-[15%_85%]   
            md:object-[55%_95%]"
            
          />
        </Parallax>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-blur-overlay pointer-events-none" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen py-3 items-end justify-center md:justify-start md:items-end lg:justify-start lg:items-end">
        <div className="flex flex-col gap-3 pb-40 md:pb-[8vh] lg:pb-[6vh] text-center md:text-left items-center md:items-start">

          <h2 className="h2 text-white max-w-[700px]">
            Crafted to last forever
          </h2>

          <p className="p md:text-lg text-white/90 max-w-[500px]">
            Iconic Brand Feel Designed to Shine Today And Endure Forever
          </p>

          <div onClick={() => router.push("/collections/rings")}>
            <PrimaryBtn
              text="DISCOVER MORE"
              textColor="text-white"
              className="btn-text tracking-widest"
            />
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Hero;