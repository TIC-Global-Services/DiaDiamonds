"use client";

import { useState } from "react";

type QAProps = {
    question:string,
    answer:string,
}

export default function QA({ question, answer }:QAProps) {

    const [isAnswer, setIsAnswer] = useState<boolean>(false);

  return (
    <div className="w-full pt-[30px]">
      
      {/* Question Row */}
      <div className="w-[90%] flex justify-between flex-nowrap">
        <p className="text-[20px] leading-[100%] text-[#000000] md:shrink-0 pl-4 hover:cursor-pointer" onClick={()=>setIsAnswer(!isAnswer)} >
          {question}
        </p>

        <button onClick={()=>setIsAnswer(!isAnswer)} className={`${isAnswer ? 'rotate-180' : ''} hover:cursor-pointer`}>
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L5 5L10 0H0Z" fill="black"/></svg>
        </button>
      </div>

      {/* Answer Section */}
      <div className={`${isAnswer ? 'block' : 'hidden' } w-full  pt-4 `}>
        <p className="text-[16px] leading-[150%] text-[#000000] pl-4">
          {answer}
        </p>
      </div>
      <div className="w-full border-b border-[#000000]/50 pt-[30px]"></div>

    </div>
  );
}
