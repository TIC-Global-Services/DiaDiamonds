"use client";

import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type PrimaryBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  text?: string;
  textColor?: string;
  hoverTextColor?: string;
  animated?: boolean;
  hoverColor?: string;
  bgColor?: string;
};

export default function PrimaryBtn({text, children,
  textColor = "text-black",
  hoverTextColor = "text-black",
  animated = true,
  hoverColor = "rgba(135,136,138,0.3)",
  className,
  bgColor,
  ...props
}: PrimaryBtnProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered
          ? hoverColor
          : undefined,
        transition:
          "background-color 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
      }}
      className={twMerge(
        clsx(
          `
          group relative
          px-4 py-2 md:px-6 md:py-3
          flex items-center justify-center
          rounded-full
          backdrop-blur-md
        border-white
          overflow-hidden isolate cursor-pointer
          bg-white/40
          text-[10px] md:text-[13px] tracking-wide font-medium
          shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.25),inset_1px_-2px_2px_1px_rgba(255,255,255,0.2),1px_2px_2px_1px_rgba(0,0,0,0.1)]

          transition-all duration-300
          `
        ),
        className
      )}
    >
      {/* Shimmer Animation */}
      {animated && (
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12 z-[2]"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)",
          }}
        ></span>
      )}

      {/* Text */}
      <span
        className={twMerge(
          clsx(
            "relative z-[3] transition-colors duration-300",
            isHovered ? hoverTextColor : textColor
          )
        )}
      >
      {children ?? text ?? bgColor}
      </span>
    </button>
  );
}