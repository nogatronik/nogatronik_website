import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "@/hooks/useClickOutside";
import { FaTimes } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { CustomSession } from "@/lib/types";

interface Props {
  Component: React.ComponentType<{ userID: string }> | null;
  setComp: React.Dispatch<
    React.SetStateAction<React.ComponentType<{ userID: string }> | null>
  >;
}

/**
 *
 * This component shows the side panel related to shopping page
 *
 * @param Component - React Component
 * @param setComp - the set function to change the side panel
 * @returns - JSX
 */
const UserSidebar = ({ Component, setComp }: Props) => {
  // Variables
  const sidebar = useClickOutside(() => setComp(null));
  const { data } = useSession();
  const session = data as CustomSession;

  return (
    <AnimatePresence mode="wait">
      {Component && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.15 } }}
          className="fixed top-0 left-0 z-30 w-full h-full bg-secondary/50 backdrop-blur-[2px]"
        >
          <motion.div
            ref={sidebar}
            initial={{ x: 870 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.15,
                type: "spring",
                stiffness: 120,
                damping: 12,
              },
            }}
            exit={{ x: 870 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] p-5 bg-background shadow-onRest"
          >
            <button
              onClick={() => setComp(null)}
              className="cursor-pointer group absolute top-2 right-2"
            >
              <FaTimes className="icon button-child group-hover:text-primary" />
            </button>
            <Component userID={session?.userID} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserSidebar;
