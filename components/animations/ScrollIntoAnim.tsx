"use client";

import React, { useEffect, useRef } from "react";
import { forwardRef } from "react";

import { motion, useInView } from "framer-motion";

interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  customStyle?: string;
  id?: string;
}

/**
 *
 * @param customStyle - string
 * @param id - string
 * @param children - React.ReactNode
 *
 * This component displays and animates, when on view,  the components that is wrapping
 *
 * @returns JSX
 */
const ScrollIntoAnim = forwardRef<HTMLDivElement, Props>(
  ({ customStyle, id, children }, ref) => {
    // Variables
    const innerRef = useRef<HTMLDivElement>(null);

    // Handles the assignation of the container's ref to be animated
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(innerRef.current);
      } else {
        (ref as React.RefObject<HTMLDivElement | null>).current =
          innerRef.current;
      }
    }, [ref]);

    const isInView = useInView(innerRef, { amount: 0.45 });
    return (
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 100 }}
        animate={
          isInView && {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 150, damping: 12 },
          }
        }
        ref={innerRef}
        className={customStyle}
      >
        {children}
      </motion.div>
    );
  }
);

ScrollIntoAnim.displayName = "ScrollIntoView";

export default ScrollIntoAnim;
