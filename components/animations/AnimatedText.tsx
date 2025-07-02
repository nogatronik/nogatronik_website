"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  style?: string;
  delay?: number;
}

/**
 *
 * @param text - string
 * @param style - string
 * @param delay - string
 *
 * This component displays and animates the receiving text
 *
 * @returns JSX
 */
const AnimatedText = ({ text, style, delay }: Props) => {
  const textArray = [text];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.01,
      },
    },
  };

  return (
    <h1 className={style}>
      <span className="sr-only">{text}</span>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        {textArray.map((line, index) => (
          <span key={index} className="block">
            {line.split(" ").map((word, index) => (
              <span key={index} className="inline-block">
                {word.split("").map((char, index) => (
                  <motion.span
                    className="inline-block"
                    variants={itemVariants}
                    key={index}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedText;
