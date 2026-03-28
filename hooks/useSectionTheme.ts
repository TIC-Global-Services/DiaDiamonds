"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

export const useSectionTheme = (position: "top" | "bottom") => {
  const [theme, setTheme] = useState<Theme>("light");
  const pathname = usePathname();

  const isInitialized = useRef(false);

  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-theme]")
    );

    if (!sections.length) return;

    let visibleSections: HTMLElement[] = [];
    let frameId: number;

    const getVisibleSections = () => {
      return sections.filter((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
    };

    const resolveTheme = (list: HTMLElement[]) => {
      if (!list.length) return;

      const sorted = list.sort(
        (a, b) =>
          a.getBoundingClientRect().top - b.getBoundingClientRect().top
      );

      const selected =
        position === "top"
          ? sorted[0]
          : sorted[sorted.length - 1];

      const t = selected.dataset.theme as Theme;

      if (t) {
        setTheme((prev) => (prev !== t ? t : prev));
      }
    };

    //INITIAL DETECTION
    let attempts = 0;

    const detectInitial = () => {
      const visible = getVisibleSections();

      if (visible.length > 0) {
        resolveTheme(visible);
        isInitialized.current = true; // 🔒 LOCK
        return;
      }

      if (attempts < 10) {
        attempts++;
        frameId = requestAnimationFrame(detectInitial);
      }
    };

    detectInitial();

    {/* Observer - InterSection */}
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isInitialized.current) return; //prevent flicker

        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            if (!visibleSections.includes(el)) {
              visibleSections.push(el);
            }
          } else {
            visibleSections = visibleSections.filter((s) => s !== el);
          }
        });

        if (visibleSections.length > 0) {
          resolveTheme(visibleSections);
        }
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      isInitialized.current = false;
    };
  }, [pathname, position]);

  return theme;
};