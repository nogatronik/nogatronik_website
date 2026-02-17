import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import useScreenWidth from "@/hooks/useScreenWidth";

import { AnimatePresence, motion } from "framer-motion";

import { RiLogoutBoxFill, RiLoginBoxFill, RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

import { NAVLINKS, SIGNED_USER_SIDE_PANEL_BTNS } from "@/utils/links";

interface Props {
  setComp: React.Dispatch<
    React.SetStateAction<React.ComponentType<{ userID: string }> | null>
  >;
}

/**
 *
 * This component shows the side panel related to shopping page
 *
 * @param setComp - the set function to change the side panel
 * @returns - JSX
 */
const Sidebar = ({ setComp }: Props) => {
  // Variables
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const width = useScreenWidth();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qs = searchParams.toString();
  const callbackUrl = qs ? `${pathname}?${qs}` : pathname;
  const isActive = (href: string) => {
    return pathname.split("/").pop() === href.split("/").pop();
  };

  // Listens for a change in width and/or pathname to close the side panel
  useEffect(() => {
    if (width! >= 769 && open) setOpen(false);
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 right-0 flex flex-col gap-2 items-center justify-center bg-muted/75 backdrop-blur-[2px] w-full h-full z-40"
          >
            <button
              onClick={() => setOpen(false)}
              className="group cursor-pointer absolute top-10 right-5"
            >
              <FaTimes className="icon group-hover:text-primary anim-transition" />
            </button>

            {NAVLINKS.map((link, index) => (
              <div
                key={index}
                className="w-3/4 flex flex-col items-center px-2 border-b-2 border-secondary/25"
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-5 py-4 w-full"
                >
                  <link.icon
                    className={`icon group-hover:text-primary anim-transition ${
                      isActive(link.href) && "text-primary"
                    }`}
                  />
                  <small
                    className={`text-sm group-hover:text-primary anim-transition ${
                      isActive(link.href) && "text-primary"
                    }`}
                  >
                    {link.text}
                  </small>
                </Link>
                {session && link.text === "Shopping" && (
                  <ul className="flex flex-col gap-2 px-4 pb-4 w-full">
                    {SIGNED_USER_SIDE_PANEL_BTNS.map((userOption, index) =>
                      userOption.text === "Account" && !session ? (
                        <Link
                          href={"/login"}
                          key={"sidebar_auth_link"}
                          className="group cursor-pointer flex items-center gap-5"
                        >
                          <RiLoginBoxFill className="icon group-hover:text-primary anim-transition" />
                          <small className="text-sm group-hover:text-primary anim-transition">
                            Login
                          </small>
                        </Link>
                      ) : (
                        <button
                          onClick={() => {
                            setOpen(false);
                            setComp(() => userOption.component);
                          }}
                          key={index}
                          className="group cursor-pointer flex items-center gap-5"
                        >
                          <userOption.icon
                            className={`icon group-hover:text-primary anim-transition ${
                              pathname.split("/").filter(Boolean).at(-2) ===
                                "user-account" &&
                              userOption.text === "Account" &&
                              "text-primary"
                            }`}
                          />
                          <small
                            className={`text-sm group-hover:text-primary anim-transition ${
                              pathname.split("/").filter(Boolean).at(-2) ===
                                "user-account" &&
                              userOption.text === "Account" &&
                              "text-primary"
                            }`}
                          >
                            {userOption.text}
                          </small>
                        </button>
                      ),
                    )}
                  </ul>
                )}
              </div>
            ))}

            {session ? (
              <button
                onClick={() => signOut()}
                className="button absolute bottom-10 right-5"
              >
                <RiLogoutBoxFill className="icon" />
                <small>Sign out</small>
              </button>
            ) : (
              <Link
                href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`}
                className="button absolute bottom-10 right-5"
              >
                <RiLoginBoxFill className="icon" />
                <small className="text-sm">login</small>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {width && (
        <button
          onClick={() => setOpen(true)}
          className="group cursor-pointer fixed top-10 right-5 z-30"
        >
          <RiMenu3Fill className="icon group-hover:text-primary anim-transition" />
        </button>
      )}
    </>
  );
};

export default Sidebar;
