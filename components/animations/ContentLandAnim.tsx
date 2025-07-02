"use client";

import React from "react";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  style?: string;
  delay?: number;
}

/**
 *
 * @param children - React.ReactNode
 * @param style - string
 * @param delay - number
 *
 * This component displays and animates the components that is wrapping
 *
 * @returns JSX
 */
const ContentLandAnim = ({ children, style, delay = 0 }: Props) => {
  return (
    <motion.div
      className={style}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ContentLandAnim;
