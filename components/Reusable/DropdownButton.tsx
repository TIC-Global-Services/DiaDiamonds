"use client";

import { motion } from "framer-motion";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownButtonProps {
  label: string;
  options: readonly Option[];
  selected: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
  animationDelay?: number;
  width?: string;

  // NEW (optional)
  showSelectedLabel?: boolean;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  options,
  selected,
  isOpen,
  onToggle,
  onSelect,
  animationDelay = 0.1,
  width = "min-w-[100%]",
  showSelectedLabel = false,
}) => {

  const handleOptionClick = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect(value);
  };

  // Find selected option
  const selectedOption = options.find(opt => opt.value === selected);

  // Decide label to show
  const displayLabel =
    showSelectedLabel && selectedOption
      ? selectedOption.label
      : label;

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative h-[40px] px-4 flex items-center justify-between bg-[#431A1A] rounded-lg cursor-pointer border-0 ${width}`}
    >
      {/* LABEL */}
      <h3 className="font-semibold text-[13px] leading-[16px] tracking-[0.88px] uppercase text-white shrink-0">
        {displayLabel}
      </h3>

      <ChevronIcon isOpen={isOpen} />

      {/* DROPDOWN */}
      {isOpen && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 0.3, delay: animationDelay, ease: "easeInOut" }}
          className="w-full absolute top-[95%] left-0 flex flex-col shadow-md z-50"
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              role="option"
              aria-selected={selected === option.value}
              onMouseDown={(e) => handleOptionClick(e, option.value)}
              className={`w-full py-[6.37%] text-center text-[16px] leading-[100%] cursor-pointer select-none
                ${
                  selected === option.value
                    ? "text-black bg-[#F7F6F4]"
                    : "text-black/40 bg-white border-[0.5px] border-[#F5F5F5] hover:bg-gray-50"
                }
                ${index === options.length - 1 ? "rounded-b-[14px]" : ""}
              `}
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      )}
    </button>
  );
};

// Chevron Icon
const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
    width="9"
    height="24"
    viewBox="0 0 9 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="6" transform="translate(0 9)" fill="#431A1A" />
    <g clipPath="url(#clip0_276_1730)">
      <path d="M4.31563 9.99997L7.80664 14.0078L0.806658 13.9921L4.31563 9.99997Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_276_1730">
        <rect width="8" height="24" fill="white" transform="translate(0.310547)" />
      </clipPath>
    </defs>
  </svg>
);

export default DropdownButton;