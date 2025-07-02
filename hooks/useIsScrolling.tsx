"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

/**
 *
 * This hook tracks if there is scroll
 *
 * @returns scroll value
 */
export default function useIsScrolling() {
  // Variables
  const { scrollY } = useScroll();
  const [scrolled, setScroll] = useState<number>();

  // Gets the value of scroll, anything above 0 is scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  return scrolled;
}
