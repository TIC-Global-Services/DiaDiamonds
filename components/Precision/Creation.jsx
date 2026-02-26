"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Creation() {
  const [currentContent, setCurrentContent] = useState(0);

  const contentJSON = [
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage.jpg",
      contentText:
        "Every lab grown diamond used at Dia Diamonds begins with a microscopic slice of real diamond called a seed. This seed acts as the foundation where pure carbon atoms attach and grow. It is carefully placed inside a controlled growth chamber designed to replicate natural diamond-forming conditions."
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage1.jpg",
      contentText:
        "Lab Grown Diamonds are grown using advanced scientific methods that recreate nature with precision.Through either High Pressure High Temperature (HPHT) or Chemical Vapor Deposition (CVD), carbon atoms crystallize around the seed under extreme heat and controlled energy."
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage2.jpg",
      contentText:
        "Over several weeks, the diamond grows steadily into a rough crystal. Every stage is monitored to ensure clarity, color balance, and structural perfection.At this stage, the diamond is complete in composition and real gemstone in its raw form, ready for refinement."
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage3.jpg",
      contentText:
        "Expert cutters shape and polish the rough crystal to unlock its brilliance. Advanced mapping technology ensures maximum light reflection, sparkle, and symmetry.The finished diamond is graded, certified, and laser-inscribed which is transforming a scientific creation into a timeless piece of fine jewelry."
    }
  ];

  // Auto-change logic every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentJSON.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentContent((prev) => (prev + 1) % contentJSON.length);
  };

  return (
    <div className="w-full h-[100vh] md:h-[135vh] bg-[#FFFFFF] relative">
      {/* Background Shapes */}
      <div className="absolute md:top-0 bottom-25 left-0 w-full h-[23%] -translate-y-[40%] translate-x-[85%] bg-[#7C3C3C]/13 md:translate-y-0 md:h-full md:translate-x-[65%] border-0 rounded-full z-20" />
      <div className="absolute md:top-0 bottom-25 md:left-0 w-full h-[26%] -translate-y-[30%] translate-x-[70%] bg-[#F2F2F2] md:translate-y-0 md:h-full md:bg-[#ccc9c9] md:translate-x-[55%] border-0 rounded-full z-10" />

      {/* Content Layer */}
      <div className="absolute inset-0 w-full h-full z-30 pt-[10%] md:pt-0 md:pb-[10%]">
        <ContainerLayout>
          {/* Heading */}
          <div className="flex justify-center items-center mb-10 md:mb-20">
            <h2 className="text-center md:text-left">
              designed for you,<br />
              cherished forever.
            </h2>
          </div>

          {/* Content with animation */}
          <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-10 md:gap-20 relative ">
            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentContent}
                src={contentJSON[currentContent].imageLeft}
                alt="Image Left"
                className="w-full md:w-[45%] aspect-[600/450] rounded-[20px] object-cover cursor-pointer"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onClick={handleNext}
              />
            </AnimatePresence>

            {/* Text Wrapper */}
            <div className="relative w-full md:w-[45%] flex items-center justify-center h-[450px] -translate-y-[15%] md:translate-y-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentContent + "-text"}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  {/* Border only around text */}
                  <div className="border-0 border-l-[3px] border-l-[#5a5a5a] pl-6 md:pl-8 inline-block">
                    <p>{contentJSON[currentContent].contentText}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}