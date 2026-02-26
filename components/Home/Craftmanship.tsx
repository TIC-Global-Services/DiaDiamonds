"use client";

import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

export default function Craftsmanship() {
  const imageSrc = "/assets/img/Craftsmanship/CraftManShipImage1.png";
  const bottomImageSrc = "/assets/img/Craftsmanship/CraftManShipImage2.png";

  const cards = [
    {
      title: "Elegant and Premium",
      content:
        "Every diamond is meticulously selected and expertly set by skilled artisans. From precision cutting to flawless finishing, each piece reflects timeless beauty and uncompromising quality.",
    },
    {
      title: "Lorem Ipsum Dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod orci ut et lobortis. Vivamus at sapien vitae nisi tristique efficitur. Integer vel risus in metus pulvinar congue. Sed ultricies, metus id fermentum luctus, justo lacus convallis sapien, ut cursus leo nulla sed sapien.",
    },
    {
      title: "Consectetur Adipiscing",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Curabitur tempor orci non turpis consequat, at ultricies metus scelerisque. Aenean vehicula tincidunt lacus, vel luctus sapien fermentum nec. Suspendisse potenti.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="relative h-auto md:h-[150vh] w-full flex flex-wrap md:flex-nowrap overflow-hidden">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 md:h-full relative overflow-hidden">
        <Parallax speed={-10}>
          <img
            src={imageSrc}
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 flex justify-center items-end mb-8 md:mb-28">
          <button className="BtnAnimation tracking-[0.166rem] border-[5.3px] rounded-full px-[18px] py-[7.6px] border-[#FFFFFF]/10 bg-[#FFFFFF]/40 uppercase">
            VIEW BRACELET COLLECTION
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col h-auto md:h-full">
        {/* Top Half Cards + Pagination */}
        <div className="w-full md:h-1/2 flex items-center justify-center pl-[13.5px] md:mt-20 lg:mt-40 py-10 md:py-0 order-2 md:order-1 overflow-hidden">
          <div className="flex flex-col gap-10 justify-center w-full">
            {/* Cards */}
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${index === activeIndex ? "block" : "hidden"}`}
              >
                <h3 className="font-medium text-xl lg:text-[24px] leading-[100%] tracking-[0.03em] text-[#000000] pb-[23px]">
                  {card.title}
                </h3>
                <p className="md:text-base lg:text-[20px] leading-[140%] text-[#000000]/60 w-[97%] ">
                  {card.content}
                </p>
              </div>
            ))}

            {/* Pagination dots */}
            <div className="flex gap-2 mx-auto pt-4 md:pt-0">
              {cards.map((_, idx) => (
                <div
                  key={idx}
                  className={`rounded-full transition-all w-3 h-2 ${
                    idx === activeIndex ? "w-5 bg-[#431A1A]" : "bg-[#000000]/10"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Half Image */}
        <div className="w-full md:h-1/2 overflow-hidden order-1 md:order-2">
          <Parallax speed={-10}>
            <img
              src={bottomImageSrc}
              alt="Craftsmanship"
              className="w-full h-full object-cover -translate-y-1/6"
            />
          </Parallax>
        </div>
      </div>

      {/* Absolute Overlay Title */}
      <div className="absolute w-full h-full flex justify-center pt-[60px] lg:pt-[100px] xl:pt-[133px]">
        <h2 className="font-medium text-[40px] leading-[100%] tracking-[0.02em] uppercase text-[#000000]">
          Craftsmanship
        </h2>
      </div>
    </div>
  );
}