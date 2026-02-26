"use client";

import { useState } from "react";

type QAProps = {
  question: string;
  answer: string;
};

export default function QA({ question, answer }: QAProps) {
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  return (
    <div className="w-full pt-[30px]">
      
      {/* Question Row */}
      <div className="w-full md:w-[90%] flex justify-between items-center flex-nowrap">
        
        <p
          className="text-[14px] md:text-[20px] leading-none text-[#000000] shrink md:shrink-0 pl-4 cursor-pointer"
          onClick={() => setIsAnswer(!isAnswer)}
        >
          {question}
        </p>

        <button
          onClick={() => setIsAnswer(!isAnswer)}
          className={`${isAnswer ? "rotate-180" : ""} flex items-center justify-center transition-transform duration-200`}
        >
          <svg
            className="block w-[10px] h-[5px]"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L5 5L10 0H0Z" fill="black" />
          </svg>
        </button>
      </div>

      {/* Answer Section */}
      <div className={`${isAnswer ? "block" : "hidden"} w-full pt-4`}>
        <p className="text-[12px] md:text-[16px] leading-[150%] text-[#000000] pl-4">
          {answer}
        </p>
      </div>

      <div className="w-full border-b border-[#000000]/50 pt-[30px]"></div>
    </div>
  );
}