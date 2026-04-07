"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

interface StickyOptions {
  topOffset?: number;
  bottomOffset?: number;
}

export function useStickyProductSidebar<T extends HTMLElement>(
  containerRef: RefObject<HTMLElement | null>,
  options: StickyOptions = {}
): [RefObject<T | null>, boolean] {
  const { topOffset = 100, bottomOffset = 50 } = options;
  const stickyRef = useRef<T | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const stickyEl = stickyRef.current;
    const containerEl = containerRef.current;
    if (!stickyEl || !containerEl) return;

    const handleScroll = () => {
      const containerRect = containerEl.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;
      const stickyHeight = stickyEl.offsetHeight;

      const shouldBeSticky =
        containerTop <= topOffset &&
        containerBottom >= stickyHeight + topOffset + bottomOffset;

      setIsSticky(shouldBeSticky);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
          } else {
            window.removeEventListener('scroll', handleScroll);
            setIsSticky(false);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(containerEl);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, topOffset, bottomOffset]);

  return [stickyRef, isSticky];
}