"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const router = useRouter();

  const textStyle = "text-[10px] md:text-[12px] leading-[16px] tracking-[-0.26px] uppercase text-[#000000] hover:text-[#7C3C3C] transition-colors cursor-pointer";

  return (
    <section className={`w-full ${className} border-y py-4 border-gray-200`}>
      <div className="relative w-full py-[3.64%] md:py-[1.5%] flex justify-center items-center gap-[4%] md:gap-[1%]">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className={`${textStyle} text-[#6C757D] cursor-default hover:text-[#6C757D]`}>/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className={textStyle}
                onClick={(e) => {
                  if (item.href?.startsWith("#")) {
                    e.preventDefault();
                    router.push(item.href.replace("#", ""));
                  }
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span className={textStyle}>{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
