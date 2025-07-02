"use client";

import { useEffect, useRef } from "react";

/**
 *
 * @param callback - a set function to close container
 *
 * This hook listens to see if user clicks outside of container. If yes, close
 * container
 *
 * @returns ref of container
 */
const useClickOutside = (callback: () => void) => {
  // Variables
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback]);

  return ref;
};

export default useClickOutside;
