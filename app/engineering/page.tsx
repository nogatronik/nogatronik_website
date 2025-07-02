import React from "react";
import Link from "next/link";

import { SUBNAV } from "@/utils/links";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import Image from "next/image";

/**
 *
 * This component displays the Engineering Page
 *
 * @returns JSX
 */
const EngPage = () => {
  return (
    <main className=" min-h-[calc(100vh-105px)] flex flex-col items-center justify-center">
      <ContentLandAnim style="flex flex-col md:flex-row gap-5 p-5">
        {SUBNAV.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group flex flex-col min-w-[250px] min-h-[300px] rounded-md bg-extra hover:shadow-onHover anim-transition"
          >
            <div className="relative flex-1 max-w-[250px] overflow-hidden flex items-center justify-center p-2">
              <div className="absolute-center p-5 w-[95%] h-[95%]">
                <Image
                  src={link.image}
                  alt="image background"
                  fill
                  className="opacity-10 object-cover z-0 group-hover:scale-110 anim-transition"
                  priority
                />
              </div>
              <p className="z-10 text-center">{link.description}</p>
            </div>
            <small
              className="z-10 text-center rounded-none rounded-b
          -md py-5 m-2 group-hover:bg-primary group-hover:text-extra anim-transition"
            >
              {link.text}
            </small>
          </Link>
        ))}
      </ContentLandAnim>
    </main>
  );
};

export default EngPage;
