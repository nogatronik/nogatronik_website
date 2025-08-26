"use client";

import React, { useRef } from "react";
import Image from "next/image";

import ScrollIntoAnim from "@/components/animations/ScrollIntoAnim";
import { HOME_SECTIONS_OBJECTIVES } from "@/utils/homeSectionsInfo";

/**
 *
 * This component displays the Objectives of Nogatrink
 *
 * @returns JSX
 */
const Objectives = () => {
  const ObjRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollIntoAnim ref={ObjRef}>
      <div className="flex flex-col md:flex-row-reverse items-center justify-around gap-5 py-5  ">
        <div className="w-1/2 flex justify-center">
          <Image
            src={"/principalsImgs/obj_icon.svg"}
            alt="mission icon"
            width={150}
            height={70}
            priority
            quality={100}
            style={{ height: "auto" }}
            className="drop-shadow-md w-[150px] h-auto"
          />
        </div>
        <div className="flex flex-col gap-2 md:max-w-[600px]">
        <p>Our <strong className="uppercase">objectives</strong> are: </p>
          <ul className="list-disc px-5">
            {HOME_SECTIONS_OBJECTIVES.map((obj, index) => (
              <li key={index}>
                <p>
                  <span className="font-semibold">{obj.title}</span> {obj.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollIntoAnim>
  );
};

export default Objectives;
