import React from "react";
import ImageComp from "./ImageComp";
import TextComp from "./TextComp";

/**
 *
 * This component displays the Hero in home page
 *
 * @returns JSX
 */
const Hero = () => {
  return (
    <div className="h-fit md:min-h-[calc(100vh-105px)] flex flex-col md:flex-row md:gap-5">
      <ImageComp />
      <TextComp />
    </div>
  );
};

export default Hero;
