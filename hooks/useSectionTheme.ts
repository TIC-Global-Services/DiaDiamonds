"use client";

import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

// Safari detection
const isSafari = () => {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.includes("safari") && !ua.includes("chrome") && !ua.includes("crios");
};

const isIOS = () => {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua);
};

export const useSectionTheme = (position: "top" | "bottom") => {
  const [theme, setTheme] = useState<Theme>("light");
  const pathname = usePathname();

  const isInitialized = useRef(false);
  const visibleSectionsRef = useRef<Set<HTMLElement>>(new Set());

  // Memoized getVisibleSections using getBoundingClientRect
  const getVisibleSections = useCallback((sections: HTMLElement[]) => {
    if (!sections.length) return [];
    return sections.filter((section) => {
      const rect = section.getBoundingClientRect();
      // Use window.innerHeight for Safari compatibility
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < viewportHeight && rect.bottom > 0;
    });
  }, []);

  // Memoized resolveTheme
  const resolveTheme = useCallback((list: HTMLElement[]) => {
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
  }, [position]);

  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-theme]")
    );

    if (!sections.length) return;

    // Clear previous visible sections on re-run
    visibleSectionsRef.current.clear();

    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;
    let attempts = 0;
    const maxAttempts = isSafari() || isIOS() ? 30 : 10;

    // Initial detection with Safari-compatible fallback
    const detectInitial = () => {
      const visible = getVisibleSections(sections);

      if (visible.length > 0) {
        resolveTheme(visible);
        isInitialized.current = true;
        return;
      }

      if (attempts < maxAttempts) {
        attempts++;
        // Safari: Use setTimeout as rAF may pause during scroll
        if (isSafari() || isIOS()) {
          timeoutId = setTimeout(detectInitial, 50);
        } else {
          rafId = requestAnimationFrame(detectInitial);
        }
      } else {
        // Final fallback
        const first = sections[0];
        if (first) {
          const t = first.dataset.theme as Theme;
          if (t) setTheme(t);
        }
        isInitialized.current = true;
      }
    };

    // Delay initial detection for Safari to ensure DOM is ready
    if (isSafari() || isIOS()) {
      timeoutId = setTimeout(detectInitial, 100);
    } else {
      detectInitial();
    }

    // INTERSECTION OBSERVER - Safari-compatible config
    const observer = new IntersectionObserver(
      (entries) => {
        // Safari recovery mechanism
        if (!isInitialized.current && entries.some((e) => e.isIntersecting)) {
          isInitialized.current = true;
        }

        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            visibleSectionsRef.current.add(el);
          } else {
            visibleSectionsRef.current.delete(el);
          }
        });

        if (visibleSectionsRef.current.size > 0) {
          resolveTheme(Array.from(visibleSectionsRef.current));
        }
      },
      {
        // Safari: use 0 threshold instead of 0.1 for better reliability
        threshold: 0,
        // Safari: use smaller rootMargin, avoid negative percentages
        rootMargin: "-1px 0px -1px 0px",
        // Safari: use null instead of document
        root: null,
      }
    );

    // Delay observation for Safari to ensure elements are ready
    const observeSections = () => {
      sections.forEach((section) => observer.observe(section));
    };

    if (isSafari() || isIOS()) {
      setTimeout(observeSections, 50);
    } else {
      observeSections();
    }

    // Scroll fallback for Safari (IntersectionObserver can be unreliable)
    const handleScroll = () => {
      if (!isInitialized.current) return;
      const visible = getVisibleSections(sections);
      if (visible.length > 0) {
        resolveTheme(visible);
      }
    };

    // Only add scroll listener for Safari/iOS as fallback
    if (isSafari() || isIOS()) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    // LOAD EVENT
    const handleLoad = () => {
      const visible = getVisibleSections(sections);
      if (visible.length > 0) {
        resolveTheme(visible);
        isInitialized.current = true;
      }
    };

    window.addEventListener("load", handleLoad);

    // CLEANUP
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("load", handleLoad);
      if (isSafari() || isIOS()) {
        window.removeEventListener("scroll", handleScroll);
      }
      isInitialized.current = false;
      visibleSectionsRef.current.clear();
    };
  }, [pathname, position, getVisibleSections, resolveTheme]);

  return theme;
};