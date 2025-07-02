"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 *
 * This component displays the bg image of the Hero's image in home page
 *
 * @returns JSX
 */
const ImageBg = () => {
  return (
    <motion.div className="absolute top-[-150px] left-[-200px] hidden md:flex">
      <Image
        src={"/vectors/ma_one_vectors.svg"}
        alt="MA background circuit vectors"
        width={70}
        height={70}
        priority
        className="w-full opacity-75"
      />
    </motion.div>
  );
};

export default ImageBg;
