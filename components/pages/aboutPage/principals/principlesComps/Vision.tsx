"use client";

import React, { useRef } from "react";
import Image from "next/image";

import ScrollIntoAnim from "@/components/animations/ScrollIntoAnim";

/**
 *
 * This component displays the Vision of Nogatrink
 *
 * @returns JSX
 */
const Vision = () => {
  const VisionRef = useRef<HTMLDivElement>(null);
  return (
    <ScrollIntoAnim ref={VisionRef}>
      <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-5 py-5  ">
        <div className="w-1/2 flex justify-center">
          <Image
            src={"/principalsImgs/vision_icon.svg"}
            alt="mission icon"
            width={150}
            height={70}
            priority
            quality={100}
            style={{ height: "auto" }}
            className="drop-shadow-md w-[150px] h-auto"
          />
        </div>
        <p className="text-justify break-normal w-full md:max-w-[600px]">
          Our <strong className="uppercase">vision</strong> is to become a global reference in science
          and technology outreach—recognized for our excellence, innovation, and
          passion for knowledge. We aim to build a vibrant domestic and
          international community of enthusiasts, professionals, and makers who
          collaborate, share ideas, and drive progress. Through creativity and
          collective learning, we seek to empower the next generation of
          innovators and contribute meaningfully to the future of technology
        </p>
      </div>

      <div className="relative w-full">
        <hr className="line-break" />
      </div>
    </ScrollIntoAnim>
  );
};

export default Vision;
