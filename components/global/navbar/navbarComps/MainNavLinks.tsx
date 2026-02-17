import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import { AnimatePresence, motion } from "framer-motion";
import { RiLogoutBoxFill } from "react-icons/ri";

import { NAVLINKS } from "@/utils/links";
// import ShoppingNavLinks from "./ShoppingNavLinks";
import dynamic from "next/dynamic";
const ShoppingNavLinks = dynamic(() => import("./ShoppingNavLinks"), {
  ssr: false,
});

interface Props {
  setComp: React.Dispatch<
    React.SetStateAction<React.ComponentType<{ userID: string }> | null>
  >;
}

/**
 * @param setComp - the set function to change the side panel
 *
 * This component displays the nav links of the web app
 *
 * @returns scroll value
 */
const MainNavLinks = ({ setComp }: Props) => {
  // Variables
  const { data: session } = useSession();
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname.split("/")[1] === href.split("/").pop();
  };
  const textVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "auto", opacity: 1 },
  };

  return (
    <>
      <motion.nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-5 ">
        {NAVLINKS.map((link, index) => (
          <Link key={index} href={link.href}>
            <motion.span
              className="group flex items-center gap-1"
              initial="hidden"
              whileHover="visible"
            >
              <motion.span>
                <link.icon
                  className={`icon link-child ${
                    isActive(link.href) && "text-primary"
                  }`}
                />
              </motion.span>

              <motion.small
                className={`link-child overflow-hidden whitespace-nowrap ${
                  isActive(link.href) && "text-primary"
                }`}
                variants={textVariants}
              >
                {link.text}
              </motion.small>
            </motion.span>
          </Link>
        ))}
      </motion.nav>
      <Suspense>
        <ShoppingNavLinks setComp={setComp} />
      </Suspense>

      <AnimatePresence mode="popLayout">
        {session && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="group flex items-center gap-2 border-l-2 border-l-secondary pl-5"
          >
            <motion.small className="group-hover:hidden">
              Hello, {session.user?.name}
            </motion.small>
            <motion.button
              onClick={() => signOut()}
              className="button h-[20px] hidden group-hover:flex"
            >
              <RiLogoutBoxFill className="icon" />
              <motion.small>Sign out</motion.small>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainNavLinks;
