"use client";

import React, { useRef } from "react";

// import ImageComp from "./comps/ImageComp";
// import TextComp from "./comps/TextComp";
import ScrollIntoAnim from "@/components/animations/ScrollIntoAnim";
import dynamic from "next/dynamic";

const ImageComp = dynamic(() => import("./comps/ImageComp"), {
  ssr: false,
});
const TextComp = dynamic(() => import("./comps/TextComp"), {
  ssr: false,
});

/**
 *
 * Displays Image and text of Website Background
 *
 * @returns JSX - This returns the components of the Website Background section in
 * home page
 */
const WebsiteBg = () => {
  // Variables
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={contentRef}
      id="website-background-container"
      className="h-fit md:min-h-screen w-full max-w-7xl mx-auto p-5 flex items-center justify-center"
    >
      <ScrollIntoAnim
        id="website-background-container"
        customStyle="flex flex-col md:flex-row gap-5 w-full h-full"
      >
        <ImageComp />
        <TextComp />
      </ScrollIntoAnim>
    </div>
  );
};

export default WebsiteBg;
