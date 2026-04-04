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

    let visibleSections = new Set<HTMLElement>();
    let frameId: number;

    // Get visible sections
    const getVisibleSections = () => {
      return sections.filter((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
    };

    // Resolve theme
    const resolveTheme = (list: HTMLElement[]) => {
      if (!list.length) return;

      const sorted = list.sort(
        (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
      );

      const selected =
        position === "top" ? sorted[0] : sorted[sorted.length - 1];

      const t = selected.dataset.theme as Theme;

      if (t) {
        setTheme((prev) => (prev !== t ? t : prev));
      }
    };

    // INITIAL DETECTION 
    let attempts = 0;

    const detectInitial = () => {
      const visible = getVisibleSections();

      if (visible.length > 0) {
        resolveTheme(visible);
        isInitialized.current = true;
        return;
      }

      if (attempts < 10) {
        attempts++;
        frameId = requestAnimationFrame(detectInitial);
      } else {
        // fallback
        const first = sections[0];
        if (first) {
          const t = first.dataset.theme as Theme;
          if (t) setTheme(t);
          isInitialized.current = true;
        }
      }
    };

    detectInitial(); 

    // INTERSECTION OBSERVER
    const observer = new IntersectionObserver(
      (entries) => {
        // Safari recovery
        if (!isInitialized.current && entries.some((e) => e.isIntersecting)) {
          isInitialized.current = true;
        }

        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            visibleSections.add(el);
          } else {
            visibleSections.delete(el);
          }
        });

        if (visibleSections.size > 0) {
          resolveTheme(Array.from(visibleSections));
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px", //improves detection
      }
    );

    sections.forEach((section) => observer.observe(section));

    // LOAD EVENT
    const handleLoad = () => {
      const visible = getVisibleSections();
      if (visible.length > 0) {
        resolveTheme(visible);
        isInitialized.current = true;
      }
    };

    window.addEventListener("load", handleLoad);

    // CLEANUP
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("load", handleLoad);
      isInitialized.current = false;
    };
  }, [pathname, position]);

  return theme;
};