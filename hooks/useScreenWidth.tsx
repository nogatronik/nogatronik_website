"use client";

import { useState, useEffect } from "react";


/**
 * This hook tracks the width of the screen
 * 
 * @returns width of screen
 */
export default function useScreenWidth() {
  // Variables
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    // Set width after component mounts
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
