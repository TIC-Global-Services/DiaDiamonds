"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

export const useSectionTheme = (position: "top" | "bottom") => {
  const [theme, setTheme] = useState<Theme>("dark");
  const pathname = usePathname();
  const ticking = useRef(false);
  const previousTheme = useRef<Theme>("dark");

  useEffect(() => {
    let sections: HTMLElement[] = [];

    const getViewportHeight = () => {
      // Cross-browser viewport height calculation
      return window.visualViewport?.height || window.innerHeight;
    };

    const updateSections = () => {
      sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[data-theme]")
      );
    };

    const getTriggerY = () => {
      const viewportHeight = getViewportHeight();
      return position === "top" 
        ? viewportHeight * 0.1  
        : viewportHeight * 0.9; 
    };

    const isElementInViewport = (element: HTMLElement, triggerY: number) => {
      const rect = element.getBoundingClientRect();
      
      // Special handling for elements with fixed children
      const hasFixedChild = element.querySelector('.fixed, [class*="fixed"]');
      
      if (hasFixedChild && position === "top") {
        // For fixed content, check if any part of the section is visible
        return rect.top <= triggerY && rect.bottom > 0;
      }
      
      return rect.top <= triggerY && rect.bottom >= triggerY;
    };

    const detectTheme = () => {
      if (!sections.length) {
        updateSections();
        if (!sections.length) return;
      }

      const triggerY = getTriggerY();
      let foundTheme: Theme | null = null;

      for (const section of sections) {
        if (isElementInViewport(section, triggerY)) {
          const t = section.dataset.theme as Theme;
          if (t && t !== foundTheme) {
            foundTheme = t;
            break;
          }
        }
      }


      if (position === "top" && window.scrollY < 40) {
        const heroSection = sections.find(s => s.dataset.priority === "hero");
        if (heroSection?.dataset.theme) {
          foundTheme = heroSection.dataset.theme as Theme;
        }
      }

      if (foundTheme && foundTheme !== previousTheme.current) {
        previousTheme.current = foundTheme;
        setTheme(foundTheme);
      } else if (!foundTheme && previousTheme.current !== "dark") {
        // Fallback to dark if no section found
        previousTheme.current = "dark";
        setTheme("dark");
      }
    };

    // Throttled scroll handler with passive option
    const rafDetect = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          detectTheme();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Debounced resize handler for better performance
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSections();
        detectTheme();
      }, 150);
    };

    // Initial setup with mutation observer for dynamic content
    const setupObserver = () => {
      updateSections();
      detectTheme();

      const observer = new MutationObserver(() => {
        updateSections();
        detectTheme();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["data-theme"]
      });

      return observer;
    };

    const observer = setupObserver();

    // mobile
    window.addEventListener("scroll", rafDetect, { passive: true });
    window.addEventListener("touchmove", rafDetect, { passive: true });
    window.addEventListener("resize", handleResize);
    
    //iOS Safari
    if ('visualViewport' in window) {
      window.visualViewport?.addEventListener('resize', handleResize);
      window.visualViewport?.addEventListener('scroll', rafDetect);
    }

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("scroll", rafDetect);
      window.removeEventListener("touchmove", rafDetect);
      window.removeEventListener("resize", handleResize);
      
      if ('visualViewport' in window) {
        window.visualViewport?.removeEventListener('resize', handleResize);
        window.visualViewport?.removeEventListener('scroll', rafDetect);
      }
      
      observer.disconnect();
    };
  }, [pathname, position]);

  return theme;
};