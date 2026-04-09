"use client";

import PrimaryBtn from "../Reusable/PrimaryBtn";
import brandValueImg from "@/public/assets/img/BrandValue/BrandValue.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BrandValue() {
  const router = useRouter();

  return (
    <section
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={brandValueImg}
        alt="Rings Image"
        fill
        priority
        className="
          object-cover 
           object-[50%_0%]
           md:object-[65%_75%]
          lg:object-[35%_78%]  
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute right-0 bottom-[30%] md:bottom-[20%] 
          flex flex-col justify-end 
          md:flex-row md:items-center md:justify-end 
          px-2 sm:px-6 md:px-0 lg:px-8 lg:right-10 xl:right-[8%]
          pb-4 sm:pb-12 md:pb-0
        "
      >
        {/* Content */}
        <div
          className="
            w-full md:py-10
            max-w-[250px]
            md:max-w-lg
            flex flex-col
            gap-2 md:gap-4 
            text-left
          "
        >
          {/* Heading */}
          <h2
            className="
              text-xl lg:text-2xl xl:text-3xl
              leading-tight font-medium tracking-tight text-black
            "
          >
            Thoughtfully curated for you
          </h2>

          {/* Paragraph */}
          <p
            className="text-[14px] font-light md:text-sm lg:text-base xl:text-lg
              leading-snug text-black/70
            "
          >
            Your diamond journey starts here. Where brilliance meets craftsmanship, and every sparkle tells your story.
          </p>

          {/* Button */}
          <div >
            <PrimaryBtn
              onClick={() => router.push("/collections/rings")}
              text="LEARN MORE"
              mode="light"
              className="border-white/80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}