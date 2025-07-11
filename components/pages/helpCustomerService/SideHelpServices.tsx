"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { HELP_SERVICES_LINKS } from "@/utils/links";

import ContentLandAnim from "@/components/animations/ContentLandAnim";

export const SideHelpServices = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname.split("/").pop() === href.split("/").pop();
  };

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
              <option.icon
                className={`icon group-hover:text-primary anim-transition ${
                  isActive(option.href) && "text-primary"
                }`}
              />
              <small
                className={`group-hover:text-primary anim-transition ${
                  isActive(option.href) && "text-primary"
                }`}
              >
                {option.text}
              </small>
            </Link>
          ))}
        </ul>
      </ContentLandAnim>
    </div>
  );
};
