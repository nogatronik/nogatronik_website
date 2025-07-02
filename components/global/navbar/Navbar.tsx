"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import MainNavLinks from "./navbarComps/MainNavLinks";
import useIsScrolling from "@/hooks/useIsScrolling";
import useScreenWidth from "@/hooks/useScreenWidth";
import ContentLandAnim from "@/components/animations/ContentLandAnim";
import Sidebar from "./navbarComps/userSidebar/Sidebar";
import UserSidebar from "./navbarComps/userSidebar/UserSidebar";
import { usePathname } from "next/navigation";

/**
 *
 * This component displays the navbar of the web app
 *
 * @returns scroll value
 */
const Navbar = () => {
  // Variables
  const [AccSidebarContent, setAccSidebarContent] =
    useState<React.ComponentType<{
      userID: string;
    }> | null>(null);
  const pathname = usePathname();
  const isScrolling = useIsScrolling();
  const width = useScreenWidth();

  // Listens for a change in pathname to close the shopping side panel
  useEffect(() => {
    if (AccSidebarContent) setAccSidebarContent(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <ContentLandAnim style="sticky top-0 z-30">
        <header
          className={`flex items-center justify-between p-5 gap-5 ${
            isScrolling! > 0 && "backdrop-blur-[2px]"
          }`}
        >
          <AnimatePresence>
            {isScrolling! > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 -z-10 dotted-background pointer-events-none"
              />
            )}
          </AnimatePresence>
          <Link href={"/"} className="group flex items-center gap-2">
            <Image
              src={"/logo.svg"}
              alt="nogatronik"
              width={70}
              height={70}
              priority
              quality={100}
              className="logo-resize drop-shadow-md"
            />
            <h1 className="font-[family-name:var(--font-orbitron)] text-secondary text-2xl group-hover:translate-x-1 anim-transition">
              Nogatronik
            </h1>
          </Link>
          {width! >= 769 && <MainNavLinks setComp={setAccSidebarContent} />}
        </header>
      </ContentLandAnim>
      {width! <= 768 && <Sidebar setComp={setAccSidebarContent} />}
      <UserSidebar
        Component={AccSidebarContent}
        setComp={setAccSidebarContent}
      />
    </>
  );
};

export default Navbar;
