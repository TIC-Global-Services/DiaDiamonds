"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

export const useSectionTheme = (position: "top" | "bottom") => {
  const [theme, setTheme] = useState<Theme | null>(null); 
  const pathname = usePathname();
  const ticking = useRef(false);

  useEffect(() => {
    let sections: HTMLElement[] = [];

    const updateSections = () => {
      sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[data-theme]")
      );
    };

    const getTriggerY = () =>
      position === "top" ? 80 : window.innerHeight - 80;

    const detectTheme = () => {
      if (!sections.length) return;

      const triggerY = getTriggerY();

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

    const rafDetect = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          detectTheme();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    const init = () => {
      updateSections();

      //SAFE initial theme (client only)
      if (sections.length > 0) {
        const firstTheme = sections[0].dataset.theme as Theme;
        if (firstTheme) {
          setTheme(firstTheme);
        }
      }

      requestAnimationFrame(detectTheme);
    };

    init();

    window.addEventListener("scroll", rafDetect, { passive: true });
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("scroll", rafDetect);
      window.removeEventListener("resize", init);
    };
  }, [pathname, position]);

  return theme ?? "dark";
};