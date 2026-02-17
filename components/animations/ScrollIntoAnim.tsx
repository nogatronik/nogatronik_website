"use client";

import React from "react";
import { forwardRef } from "react";

import { motion } from "framer-motion";

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
    return (
      <motion.div
        id={id}
        ref={ref}
        className={customStyle}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 150, damping: 12 },
        }}
        viewport={{ amount: 0.25, once: true }}
      >
        {children}
      </motion.div>
    );
  },
);

ScrollIntoAnim.displayName = "ScrollIntoView";

export default ScrollIntoAnim;
