"use client";

import ContainerLayout from "@/layout/ContainerLayout";

import { useState } from "react";

export default function Creation() {
  const [currentContent, setCurrentContent] = useState(0);

  const contentJSON = [
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage1.jpg",
      contentText: 'Every lab grown diamond used at Dia Diamonds begins with a microscopic slice of real diamond called a seed. This seed acts as the foundation where pure carbon atoms attach and grow.It is carefully placed inside a controlled growth chamber designed to replicate natural diamond-forming conditions'
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage2.jpg",
      contentText: "Content for second creation item."
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage3.jpg",
      contentText: "Content for third creation item."
    }
  ];

  return (
    <div className="w-full h-[125vh] bg-[#FFFFFF] relative ">
      {/* Background Shape 1 */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#7C3C3C]/13 translate-x-[65%] border-0 rounded-full z-20" />

      {/* Background Shape 2 */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#ccc9c9] translate-x-[55%] border-0 rounded-full z-10" />

      {/* Content Layer */}
      <div className="absolute inset-0 w-full h-full z-30">
        <ContainerLayout>
          {/* First Div */}
          <div className="flex justify-center items-center mb-20">
            <h2>
              designed for you,<br />
              cherished forever.
            </h2>
          </div>

          {/* Second Div */}
          <div className="flex justify-between items-center gap-20">
            {currentContent !== null && (
              <>
                <img
                  src={contentJSON[currentContent].imageLeft}
                  alt="Image Left"
                  className="w-[45%] aspect-[600/450] rounded-[20px] object-cover"
                />

                <div className="border-l border-l-[#FAFAFK] pl-8">
                  <p>
                    {contentJSON[currentContent].contentText}
                  </p>
                </div>
              </>
            )}
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}