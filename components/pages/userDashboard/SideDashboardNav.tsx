"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DASHBOARD_NAV } from "@/utils/links";
import { signOut } from "next-auth/react";
import ContentLandAnim from "@/components/animations/ContentLandAnim";

/**
 *
 * This component holds the navigation of the signed-in user
 *
 * @returns JSX
 */
const SideDashboardNav = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname.split("/").pop() === href.split("/").pop();
  };

  return (
    <div className="flex flex-col min-w-[250px] gap-5 p-5">
      <ContentLandAnim>
        <ul>
          {DASHBOARD_NAV.map((option, index) =>
            option.type === "action" ? (
              <button
                onClick={() => signOut()}
                key={index}
                className="cursor-pointer w-full group flex items-center gap-5 py-5 px-2 border-b-2 border-secondary/25 flex-1"
              >
                <option.icon className="icon group-hover:text-primary anim-transition" />
                <small className="group-hover:text-primary anim-transition">
                  {option.text}
                </small>
              </button>
            ) : (
              <Link
                href={option.href!}
                className="group flex items-center gap-5 py-5 px-2 border-b-2 border-secondary/25 flex-1"
                key={index}
              >
                <option.icon
                  className={`icon group-hover:text-primary anim-transition  ${
                    isActive(option.href!) && "text-primary"
                  }`}
                />
                <small
                  className={`group-hover:text-primary anim-transition  ${
                    isActive(option.href!) && "text-primary"
                  }`}
                >
                  {option.text}
                </small>
              </Link>
            )
          )}
        </ul>
      </ContentLandAnim>
    </div>
  );
};

export default SideDashboardNav;
