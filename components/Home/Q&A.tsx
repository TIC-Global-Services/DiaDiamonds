"use client";

import { useState } from "react";
import QA from "../Reusable/QA";
import { Parallax } from "react-scroll-parallax";
import QAImageLeft from '@/public/assets/img/Q&A/QAImage.png'
import Image from "next/image";

const questions = [
  { question: "Are all your diamonds certified?", answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Do you offer natural and lab-grown diamonds?", answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Can I personalise or customise my jewellery?", answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Is lifetime care or servicing included?", answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "What are Solitaire Rings?", answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "What is your return or exchange policy?", answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
];

export default function QandA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section data-theme="light" className="w-full relative">

      {/* Non-absolute content container */}
      <div className="relative z-20 w-full py-[10%] px-2 flex justify-end items-center gap-[60px] flex-wrap md:flex-nowrap">

        <div className="relative w-[50%] md:w-[30%] mx-auto md:mx-0 aspect-[157/234] md:aspect-[448/673] overflow-hidden">
          <Parallax speed={-10} className="h-full">
            <Image
              src={QAImageLeft}
              alt="Q&A visual"
              fill
              className="object-contain scale-110 md:scale-100 hover:scale-110 transition duration-300"
              quality={100}
            />
          </Parallax>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-[55%]">
          <h2 className="md:font-medium text-base font-medium tracking-tight md:text-[40px] leading-[100%] text-[#000000] uppercase pb-10 mx-auto md:mx-0">
            Popular Questions
          </h2>

          <div className="w-full text-xs font-[clash-Display, sans] font-medium border-t border-[#000000]/50" />

          {questions.map((q, idx) => (
            <QA
              key={idx}
              question={q.question}
              answer={q.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>

      {/* Absolute background container */}
      <div className="absolute inset-0 w-full h-full flex z-10 flex-col md:flex-row">
        <div className="bg-[#EAE3D9] md:w-[42%] w-full aspect-[412/240] md:aspect-auto"></div>
        <div className="bg-[#F9F9F9] w-full"></div>
      </div>
    </section>
  );
}