import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";

/**
 *
 * This component displays the credit of the plane.
 *
 * @returns JSX
 */

interface Props {
  setOpen: (open: boolean) => void;
}

const PlaneCredit = ({ setOpen }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut" }}
      className="absolute flex flex-col gap-2 top-3 right-3 p-4 bg-extra/95 backdrop-blur-md rounded-md shadow-onRest z-20"
    >
      <button
        onClick={() => setOpen(false)}
        className="group cursor-pointer w-fit ml-auto"
      >
        <FaTimes className="icon group-hover:text-primary anim-transition" />
      </button>
      <small className="w-full text-center text-nowrap">
        &ldquo;Stylized WW1 Plane&rdquo; by{" "}
        <Link href={"https://skfb.ly/6ZFnM"} target="_" className="underline">
          AntijnvanderGun
        </Link>
        , CC BY.
      </small>
    </motion.div>
  );
};

export default PlaneCredit;
