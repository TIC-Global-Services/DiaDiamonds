// PrimaryBtn.tsx
"use client";
import React from "react";

type PrimaryBtnProps = {
  text: string;
  textColor?: string;
  hoverTextColor?: string; 
  rippleColor?: string;
  animated?: boolean;
  hoverColor?: string;
  className?: string;
};

export default function PrimaryBtn({
  text,
  textColor = "text-white",
  hoverTextColor = "#ffffff",
  rippleColor = "white",
  animated = true,
  hoverColor = "rgba(255,255,255,0.15)",
  className = "",
}: PrimaryBtnProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={{
        "--ripple-color": rippleColor,
        backgroundColor: isHovered ? hoverColor : "rgba(255,255,255,0.05)",
        transition: "background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
         group relative
        px-2 py-2 md:px-10 md:py-4 text-xs md:text-[13px] tracking-widest
        rounded-full backdrop-blur-md bg-black/20
        border border-black/20
        shadow-[inset_1px_4px_4px_0pxrgba(0,0,0,0.5)]
        overflow-hidden hover:border-white/40 hover:text-black
        ${animated ? "BtnAnimation" : ""}
        isolate cursor-pointer
      `}
    >
      {/* Inner top highlight */}
      <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent z-[2]" />
      {/* Inner bottom shadow */}
      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-black/50 to-transparent z-[2]" />
      {/* Glow border top */}
      <span className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3),transparent_60%)] z-[3]" />
      {/* Shimmer sweep */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12 z-[4]"
        style={{ background: `linear-gradient(to right, transparent, ${hoverColor}, transparent)` }}
      />

      <span
        className={`relative z-[5] tracking-widest text-sm md:text-base font-light transition-colors duration-500 ${textColor} ${className}`}
        style={{ color: isHovered ? hoverTextColor : undefined }}
      >
        {text}
      </span>
    </button>
  );
}