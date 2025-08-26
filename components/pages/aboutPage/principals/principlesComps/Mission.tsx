"use client";

import React, { useRef } from "react";
import Image from "next/image";

import ScrollIntoAnim from "@/components/animations/ScrollIntoAnim";

/**
 *
 * This component displays the Mission of Nogatrink
 *
 * @returns JSX
 */
const Mission = () => {
  const MissionRef = useRef<HTMLDivElement>(null);
  return (
    <ScrollIntoAnim ref={MissionRef}>
      <h2 className="text-center mb-10">The Ideals That Shape Our Path</h2>
      <div className="flex flex-col md:flex-row items-center justify-around gap-5 py-5 ">
        <div className="w-1/2 flex justify-center">
          <Image
            src={"/principalsImgs/mission_icon.svg"}
            alt="mission icon"
            width={150}
            height={70}
            priority
            quality={100}
            style={{ height: "auto" }}
            className="drop-shadow-md w-[150px] h-auto"
          />
        </div>
        <p className="text-justify break-normal w-full md:max-w-[600px] ">
          Our <strong className="uppercase">mission</strong> is to unlock and spread knowledge in
          science, technology, and engineering by creating an accessible,
          engaging, and dynamic digital platform. We strive to inspire future
          generations, foster innovation, and cultivate a passion for continuous
          learning through educational, hands-on, and entertaining content.
          Covering topics from fundamental principles to advanced applications,
          we support skill development and problem-solving in fields such as
          electronics, automation, aeromodelling, tech support, and electronic
          repair.
        </p>
      </div>

      <div className="relative w-full">
        <hr className="line-break" />
      </div>
    </ScrollIntoAnim>
  );
};

export default Mission;
