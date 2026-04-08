"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

export const useSectionTheme = (position: "top" | "bottom") => {
  const [theme, setTheme] = useState<Theme>("dark");
  const pathname = usePathname();


  const sectionsRef = useRef<HTMLElement[]>([]);
  const ticking = useRef(false);

  useLayoutEffect(() => {
    sectionsRef.current = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-theme]")
    );

    if (!sectionsRef.current.length) return;

    const getTriggerY = () => {
      return position === "top"
        ? 80
        : window.innerHeight - 80;
    };

    const detectTheme = () => {
      const sections = sectionsRef.current;
      if (!sections.length) return;

      const triggerY = getTriggerY();

      // (no flicker, no override)
      if (window.scrollY <= 5) {
        const first = sections[0];
        const t = first?.dataset.theme as Theme;
        if (t) {
          setTheme(t);
        }
        return;
      }

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          const t = section.dataset.theme as Theme;
          if (t) {
            setTheme((prev) => (prev !== t ? t : prev));
          }
          return;
        }
      }
    };

    // initially
    detectTheme();

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          detectTheme();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", detectTheme);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", detectTheme);
    };
  }, [pathname, position]);

  return theme;
};