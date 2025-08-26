"use client";

import React, { useState } from "react";

import IdeaDesc from "../IdeaDesc";
import { FaCircle } from "react-icons/fa";
import ContentLandAnim from "@/components/animations/ContentLandAnim";
import { ABOUT_LINKS } from "@/utils/links";
import { HomeAboutLink } from "@/lib/types";

/**
 * 
 * This component displays the text part of the About section in home page
 * 
 * @returns JSX
 */
const TextComp = () => {
  // Variables
  const [currPanel, setCurrPanel] = useState<HomeAboutLink>({
    component: IdeaDesc,
    key: "idea",
  });

  return (
    <div className="flex flex-col items-center justify-center gap-5 flex-1">
      <ContentLandAnim
        key={currPanel.key}
        style="min-h-[560px] flex flex-col gap-2 items-center justify-center"
      >
        {<currPanel.component />}
      </ContentLandAnim>

      <div className="flex items-center gap-5 mt-auto">
        {ABOUT_LINKS.map((link, index) => (
          <button
            key={index}
            onClick={() =>
              setCurrPanel({ component: link.component, key: link.key })
            }
            className="group"
          >
            <FaCircle
              className={`icon cursor-pointer group-hover:text-accent anim-transition ${
                currPanel.key === link.key && "text-accent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TextComp;
