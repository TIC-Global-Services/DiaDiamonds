// PrimaryBtn.tsx
import React from "react";

type PrimaryBtnProps = {
  text: string;
  textColor?: string;       // Tailwind text color class (e.g., 'text-white')
  rippleColor?: string;     // CSS color string (e.g., 'white', 'rgba(255,255,255,0.2)')
  animated?: boolean;       // Optional: enable/disable animation (default true)
};

export default function PrimaryBtn({
  text,
  textColor = "text-white",
  rippleColor = "white",
  animated = true,
}: PrimaryBtnProps) {
  return (
    <button
      style={{ "--ripple-color": rippleColor } as React.CSSProperties}
      className={`
        relative
        px-[30px] py-[12px]
        rounded-full
        text-[16px]
        uppercase
        bg-[rgba(255,255,255,0)]
        backdrop-blur-[2.5px]
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        overflow-hidden
        btn-glass-border
        ${animated ? "BtnAnimation" : ""}
        isolate
        cursor-pointer
      `}
    >
      <span className={`relative z-10 uppercase ${textColor}`}>
        {text}
      </span>
    </button>
  );
}