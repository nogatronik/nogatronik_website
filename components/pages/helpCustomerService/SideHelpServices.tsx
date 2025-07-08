import ContentLandAnim from "@/components/animations/ContentLandAnim";
import { HELP_SERVICES_LINKS } from "@/utils/links";
import Link from "next/link";
import React from "react";

export const SideHelpServices = () => {
  return (
    <div className="flex flex-col min-w-[250px] gap-5 p-5">
      <ContentLandAnim>
        <ul>
          {HELP_SERVICES_LINKS.map((option, index) => (
            <Link
              href={option.href!}
              className="group flex items-center gap-5 py-5 px-2 border-b-2 border-secondary/25 flex-1"
              key={index}
            >
              <option.icon className="icon group-hover:text-primary anim-transition" />
              <small className="group-hover:text-primary anim-transition">
                {option.text}
              </small>
            </Link>
          ))}
        </ul>
      </ContentLandAnim>
    </div>
  );
};
