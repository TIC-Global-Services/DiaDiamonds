"use client";

import React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
        absolute
        bg-white/10
        backdrop-blur-md
        border border-white/30
        rounded-2xl
        shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]
        p-4 md:p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;