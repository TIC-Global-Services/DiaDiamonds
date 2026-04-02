"use client";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import brandValueImg from '@/public/assets/img/BrandValue/BrandValue.png'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BrandValue() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src={brandValueImg}
        alt="Rings Image"
        fill
        priority
        className="w-full h-full object-cover object-[60%_10%] md:object-[70%_80%]"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center translate-y-20 translate-x-10 md:translate-y-6 md:translate-x-20 md:items-center justify-center md:justify-end px-7 md:px-[9%] pb-10 md:pt-0">
        
        <div className="w-[90%] max-w-[100%] md:max-w-[60%] text-left">

          <h2 className="text-[24px] md:text-[40px] font-medium tracking-tight leading-[100%]">
            Thoughtfully curated for you
          </h2>

          <p className="text-[8px] md:text-[18px] font-light md:font-normal md:text-base mt-2 leading-[100%] md:leading-[100%]">
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