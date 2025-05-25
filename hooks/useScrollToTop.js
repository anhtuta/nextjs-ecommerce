import { useState, useEffect, useCallback } from "react";

/**
 * Contains the reusable logic for scroll detection.
 * Ref: Gemini
 */
export function useScrollToTop(scrollThreshold = 400) {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!isVisible && window.pageYOffset > scrollThreshold) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= scrollThreshold) {
      setIsVisible(false);
    }
  }, [isVisible, scrollThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { isVisible, scrollToTop };
}
