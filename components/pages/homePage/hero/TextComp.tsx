"use client";

import AnimatedText from "@/components/animations/AnimatedText";
import ContentLandAnim from "@/components/animations/ContentLandAnim";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useLenis } from "lenis/react";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

/**
 *
 * This component displays the text portion of the Hero in home page
 *
 * @returns JSX
 */
const TextComp = () => {
  const width = useScreenWidth();
  const lenis = useLenis();

  return (
    <div
      className={`flex-1 flex flex-col justify-center gap-5 p-5 ${
        width! <= 767 && "items-center"
      }`}
    >
      <AnimatedText
        text="Nogatronik Engineering"
        el="h1"
        style="text-3xl md:text-6xl"
      />
      <AnimatedText
        text="Where science, technology, and innovation are invoked to inspire the future"
        el="h2"
        style={`text-lg md:text-5xl text-secondary ${
          width! <= 767 && "text-center"
        }`}
        delay={0.5}
      />

      <ContentLandAnim delay={4}>
        <button
          onClick={() => lenis?.scrollTo("#website-services", { offset: -125 })}
          className="button"
        >
          <small>Learn more</small>
          <FaArrowDown className="icon" />
        </button>
      </ContentLandAnim>
    </div>
  );
};

export default TextComp;
