"use client";

type QAProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function QA({ question, answer, isOpen, onToggle }: QAProps) {
  return (
    <div className="w-full pt-[30px]">

      {/* Question Row */}
      <div
        className="w-full md:w-[90%] flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <p className="text-[14px] m-0 md:text-[20px] leading-none text-[#000000] shrink md:shrink-0 pl-4 w-[80%] md:w-auto">
          {question}
        </p>

        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className={`${isOpen ? "rotate-180" : ""} flex items-center mr-4 md:mr-0 justify-center transition-transform cursor-pointer duration-200`}
        >
          <svg className="block w-[10px] h-[5px]" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L5 5L10 0H0Z" fill="black" />
          </svg>
        </button>
      </div>

      {/* Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${isOpen ? "max-h-[200px] opacity-100 pt-4" : "max-h-0 opacity-0"}`}
      >
        <p className="text-[12px] md:text-[16px] leading-[150%] text-[#000000] pl-4">
          {answer}
        </p>
      </div>

      <div className="w-full border-b border-[#000000]/50 pt-[30px]" />
    </div>
  );
}
