"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || sectionIds.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      sectionIds.forEach((id) => {
        try {
          const element = document.getElementById(id);
          if (element) observer.unobserve(element);
        } catch {
          // Element may already be removed
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}
