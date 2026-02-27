"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Creation() {
  const contentJSON = [
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage.jpg",
      overlayText:'The Diamond Seed',
      contentText: [
        { text: "Every lab grown diamond used at " },
        { text: "Dia Diamonds", bold: true },
        { text: " begins with a microscopic slice of real diamond called a seed. This seed acts as the foundation where pure carbon atoms attach and grow." }
      ]
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage1.jpg",
      overlayText:'Growth Proccess',
      contentText: [
        { text: "" },
        { text: "Lab Grown Diamonds", bold: true },
        { text: " are created using High Pressure High Temperature (HPHT) or Chemical Vapor Deposition (CVD) where carbon atoms crystallize under controlled conditions." }
      ]
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage2.jpg",
      overlayText:'Final Creation',
      contentText: [
        { text: "Over several weeks, the diamond grows into a rough crystal, monitored for clarity and structure before being cut and polished into brilliance." }
      ]
    }
  ];

  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentJSON.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentContent((prev) => (prev + 1) % contentJSON.length);
  };

  const handleSelect = (index) => {
    setCurrentContent(index);
  };

  if (!contentJSON[currentContent]) return null;

  return (
    <div className="relative w-full h-auto bg-white overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-[-20%] w-[70%] h-full bg-[#7C3C3C]/10 rounded-full z-10" />
      <div className="absolute top-0 right-[-30%] w-[70%] h-full bg-[#F2F2F2] md:bg-[#ccc9c9] rounded-full z-0" />

      <div className="relative z-20 w-full h-full flex flex-col">

        {/* Title */}
        <div className="pt-[5%] text-center shrink-0 md:w-[40%] mx-auto">
          <h2>
            designed for you <br />
            cherished forever.
          </h2>
        </div>

        {/* Card Section */}
        <div className="w-full h-full flex-grow flex items-center justify-center px-4 py-[2%]">
          <ContainerLayout>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              
              {/* Image */}
              <AnimatePresence mode="wait" className='relative'>
                <motion.img
                  key={currentContent}
                  src={contentJSON[currentContent].imageLeft}
                  alt="Diamond Process"
                  className="w-full md:w-[40%] aspect-[4/3] rounded-[20px] object-cover cursor-pointer"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  onClick={handleNext}
                />
                <motion.p
                 initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                className="m-0 absolute bottom-4 left-4 text-[#FFFFFF] text-[16px]">{contentJSON[currentContent].overlayText}</motion.p>
              </AnimatePresence>

              {/* Text */}
              <div className="relative w-full md:w-[45%] min-h-[150px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentContent + "-text"}
                    className="absolute w-full"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <div className="border-l-[3px] border-l-[#5a5a5a] pl-6 md:pl-8">
                      <p className="text-sm md:text-[24px] 2xl:text-[40px] leading-[140%]">
                        {contentJSON[currentContent].contentText.map((part, index) => (
                          <span
                            key={index}
                            className={part.bold ? "font-semibold" : ""}
                          >
                            {part.text}
                          </span>
                        ))}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </ContainerLayout>
        </div>

        {/* Progress Buttons */}
        <div className="w-full flex justify-center items-center gap-3 pb-[10%]">
          {contentJSON.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentContent === index
                  ? "w-8 bg-[#431a1a]"
                  : "w-4 bg-black/20"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}