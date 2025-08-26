"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { HOME_SECTIONS_VALUES } from "@/utils/homeSectionsInfo";

import ScrollIntoAnim from "@/components/animations/ScrollIntoAnim";

/**
 *
 * This component displays the Values of Nogatrink
 *
 * @returns JSX
 */
const Values = () => {
  const ValuesRef = useRef<HTMLDivElement>(null);
  return (
    <ScrollIntoAnim ref={ValuesRef}>
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 py-5">
        <div className="w-1/2 flex justify-center">
          <Image
            src={"/principalsImgs/values_icon.svg"}
            alt="mission icon"
            width={150}
            height={70}
            priority
            quality={100}
            style={{ height: "auto" }}
            className="drop-shadow-md w-[150px] h-auto"
          />
        </div>
        <ul className="list-disc w-full md:max-w-[600px] px-5">
          <p>Our <strong className="uppercase">values</strong> are: </p>
          {HOME_SECTIONS_VALUES.map((obj, index) => (
            <li key={index}>
              <p>
                <span className="font-semibold">{obj.title}</span> {obj.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full">
        <hr className="line-break" />
      </div>
    </ScrollIntoAnim>
  );
};

export default Values;
