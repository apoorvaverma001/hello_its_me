import { useState, useEffect } from 'react';

/**
 * useScrollSpy — Custom hook for tracking the active section in viewport.
 * 
 * HOW IT WORKS:
 * 1. Takes an array of section IDs (e.g., ["hero", "about", "projects"])
 * 2. Creates an Intersection Observer that watches each section
 * 3. When a section enters the viewport (at least 20% visible), it becomes "active"
 * 4. Returns the ID of the currently active section
 * 
 * WHY Intersection Observer instead of scroll events?
 * - Scroll events fire on EVERY pixel of scroll (60+ times/second) → expensive
 * - Intersection Observer only fires when visibility changes → much more efficient
 * - The browser handles the observation natively, off the main thread
 * 
 * @param sectionIds - Array of HTML element IDs to observe
 * @param offset - Pixel offset from top (accounts for fixed header height)
 * @returns The ID of the currently visible section
 */
export function useScrollSpy(sectionIds: string[], offset: number = 80): string {
  // State to track which section is currently in view
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    // Create the observer with configuration:
    // - rootMargin: negative top margin pushes the detection zone down
    //   by the header height, so sections aren't "active" while hidden
    //   behind the sticky header
    // - threshold: 0.2 means the section needs to be at least 20% visible
    //   before it's considered "active"
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update when a section ENTERS the viewport (not when it leaves)
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0.2,
      }
    );

    // Find each section element by ID and start observing it
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup: stop observing when the component unmounts
    // This prevents memory leaks
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeSection;
}
