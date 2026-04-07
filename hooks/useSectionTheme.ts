"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

export const useSectionTheme = (position: "top" | "bottom") => {
  const [theme, setTheme] = useState<Theme>("light");
  const pathname = usePathname();

  const sectionsRef = useRef<HTMLElement[]>([]);
  const visibleRef = useRef<Set<HTMLElement>>(new Set());

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-theme]")
    );

    if (!sections.length) return;

    sectionsRef.current = sections;

    const resolveTheme = () => {
      const visible = Array.from(visibleRef.current);

      if (!visible.length) return;

      const sorted = visible.sort(
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            visibleRef.current.add(el);
          } else {
            visibleRef.current.delete(el);
          }
        });

        resolveTheme();
      },
      {
        root: null,
        threshold: 0.01, 
        rootMargin: "0px 0px -70% 0px", 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      visibleRef.current.clear();
    };
  }, [pathname, position]);

  return theme;
};