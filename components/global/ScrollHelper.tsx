"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FaArrowAltCircleUp } from "react-icons/fa";

/**
 *
 * This component helps user to scroll to the top if it is below a scroll
 * threshold
 *
 * @returns JSX
 */
const ScrollHelper = () => {
  // Variables
  const [isVisible, setIsVisible] = useState(false);

  // Show helper if user has scrolled below 300
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /**
   * Scroll to top of window
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="fixed bottom-2 right-2"
        >
          <button className="group" onClick={scrollToTop}>
            <FaArrowAltCircleUp className="icon text-3xl group-hover:text-primary group-hover:drop-shadow-onHover anim-transition" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollHelper;
