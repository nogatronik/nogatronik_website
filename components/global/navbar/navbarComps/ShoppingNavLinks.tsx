import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { RiLoginBoxFill } from "react-icons/ri";
import { SIGNED_USER_SIDE_PANEL_BTNS } from "@/utils/links";

import { useSession } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  setComp: React.Dispatch<
    React.SetStateAction<React.ComponentType<{ userID: string }> | null>
  >;
}

/**
 * @param setComp - the set function to change the side panel
 *
 * This component displays the links related to shopping page
 *
 * @returns scroll value
 */
const ShoppingNavLinks = ({ setComp }: Props) => {
  // Variables
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qs = searchParams.toString();
  const callbackUrl = qs ? `${pathname}?${qs}` : pathname;

  const textVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "auto", opacity: 1 },
  };

  /**
   * This function modifies the SIGNED_USER_SIDE_PANEL_BTNS according to the session.
   *
   *
   * @returns a modified shopping nav options
   */
  const modifyUserSidePanelOptions = () => {
    // If user is signed in, return original list
    if (session) return SIGNED_USER_SIDE_PANEL_BTNS;
    // else return only the options where auth is not required
    else {
      return SIGNED_USER_SIDE_PANEL_BTNS.map((option) =>
        !option.auth ? option : null,
      ).filter(Boolean);
    }
  };

  const USER_SIDE_PANEL_OPTIONS = modifyUserSidePanelOptions();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex justify-end gap-5"
    >
      {!session && (
        <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
          <motion.span
            className="group flex items-center gap-1 cursor-pointer"
            initial="hidden"
            whileHover="visible"
          >
            <motion.span>
              <RiLoginBoxFill className={`icon link-child`} />
            </motion.span>

            <motion.small
              className="link-child overflow-hidden whitespace-nowrap"
              variants={textVariants}
            >
              login
            </motion.small>
          </motion.span>
        </Link>
      )}

      {USER_SIDE_PANEL_OPTIONS.map(
        (link, index) =>
          link && (
            <motion.button
              key={index}
              onClick={() => setComp(() => link.component)}
              className="group flex items-center gap-1 cursor-pointer"
              initial="hidden"
              whileHover="visible"
            >
              <motion.span>
                <link.icon className={`icon link-child`} />
              </motion.span>

              <motion.small
                className="link-child overflow-hidden whitespace-nowrap"
                variants={textVariants}
              >
                {link.text}
              </motion.small>
            </motion.button>
          ),
      )}
    </motion.div>
  );
};

export default ShoppingNavLinks;
