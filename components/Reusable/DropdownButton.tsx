
import { motion } from "framer-motion";

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
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label, options, selected, isOpen,
  onToggle, onSelect, animationDelay = 0.1,
}) => (
  <button
    onClick={onToggle}
    className="relative px-[2.57%] py-[1.67%] flex items-center bg-[#431A1A] rounded-[14px] gap-[20px] cursor-pointer border-0"
  >
    <h3 className="font-semibold text-[13px] leading-[16px] tracking-[0.88px] uppercase text-white shrink-0">
      {label}
    </h3>
    <ChevronIcon isOpen={isOpen} />

    <motion.div
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      animate={{
        clipPath: isOpen
          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          : "polygon(0 0, 100% 0, 100% 0, 0 0)",
      }}
      transition={{ duration: 0.5, delay: animationDelay, ease: "easeInOut" }}
      className="w-full absolute top-[95%] left-0 flex flex-col shadow-md"
    >
      {options.map((option, index) => (
        <div
          key={option.value}
          onClick={(e) => {
            e.stopPropagation(); // prevent button onClick firing again
            onSelect(option.value);
          }}
          className={`w-full py-[6.37%] text-center text-[16px] leading-[100%] cursor-pointer
            ${selected === option.value
              ? "text-black bg-[#F7F6F4]"
              : "text-black/40 bg-white border-[0.5px] border-[#F5F5F5]"}
            ${index === options.length - 1 ? "rounded-b-[14px]" : ""}
          `}
        >
          {option.label}
        </div>
      ))}
    </motion.div>
  </button>
);

// Small isolated icon — easy to swap later
const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
    width="9" height="24" viewBox="0 0 9 24"
    fill="none" xmlns="http://www.w3.org/2000/svg"
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