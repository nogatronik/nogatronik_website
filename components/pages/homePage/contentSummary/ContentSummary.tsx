"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { IoIosArrowForward } from "react-icons/io";

import { CONTENT_SUMMARY } from "@/utils/homeSectionsInfo";

import ScrollIntoAnim from "@/components/animations/ScrollIntoAnim";
import Link from "next/link";

/**
 *
 * This component displays the services' summary of the web app
 * @returns JSX
 */
const ContentSummary = () => {
  // Variables
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollIntoAnim
      ref={contentRef}
      id="website-services"
      customStyle="mx-auto flex flex-col w-full gap-10 max-w-7xl my-20 p-5"
    >
      <h2 className="mx-auto text-primary">
        What To Expect From Nogatronik Engineering
      </h2>

      <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-10">
        {CONTENT_SUMMARY.map((comp, index) => (
          <ScrollIntoAnim key={index} customStyle="flex-1 flex flex-col gap-5">
            <div className="relative w-full h-[250px] ">
              <Image
                src={comp.image}
                alt="articles can be accessed"
                fill
                style={{
                  filter:
                    "drop-shadow(0px 2px 5px rgba(50, 50, 93, 0.15)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.005))",
                }}
                className="drop-shadow-sm"
              />
            </div>
            <p className="font-bold uppercase text-primary drop-shadow-md">
              {comp.title}
            </p>
            <p> {comp.explanation} </p>
            <Link
              href={comp.link}
              className="group flex gap-2 items-center w-fit"
            >
              <small className="link-child anim-transition">Visit</small>
              <IoIosArrowForward className="icon link-child anim-transition group-hover:translate-x-1" />
            </Link>
          </ScrollIntoAnim>
        ))}
      </div>
    </ScrollIntoAnim>
  );
};

export default ContentSummary;
