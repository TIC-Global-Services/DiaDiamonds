"use client";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import brandValueImg from '@/public/assets/img/BrandValue/BrandValue.png'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BrandValue() {
  const router = useRouter();

  return (
    <section className="relative w-full h-[100dvh] md:h-[120dvh] overflow-hidden">

      {/* Background Image */}
      <Image
        src={brandValueImg}
        alt="Rings Image"
        fill
        priority
        className="object-cover object-[60%_10%] md:object-[60%_90%]"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center translate-y-14 translate-x-12 md:items-center justify-center md:justify-end px-7 md:px-[9%] pb-10 md:pt-0 md:-translate-x-[-10%]">
        
        <div className="w-full max-w-[100%] md:max-w-[70%] text-left">

          <h2 className="text-[24px] md:text-[30px] tracking-tight lg:text-[40px]">
            Thoughtfully curated for you
          </h2>

          <p className="text-[8px] font-light md:text-base mt-2 leading-[100%] md:leading-[100%]">
            Your diamond journey starts here. Where brilliance meets craftsmanship, and every sparkle tells your story.
          </p>

          <div className="mt-2 md:mt-6" onClick={() => router.push("/collections/rings")}>
            <PrimaryBtn text="LEARN MORE" textColor="black" hoverColor="#D7EOE1" hoverTextColor="black"/>
          </div>

        </div>
      </div>

    </section>
  );
}