"use client";

import React, { useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
});
const PlaneCredit = dynamic(() => import("./PlaneCredit"), {
  ssr: false,
});
// import Scene from "./Scene";
// import PlaneCredit from "./PlaneCredit";
import dynamic from "next/dynamic";

gsap.registerPlugin(useGSAP);

/**
 *
 * This component displays the scene of the plane going across the screen
 *
 * @returns JSX
 */
const PlaneScene = () => {
  // Variables
  const [openCredit, setOpenCredit] = useState<boolean>(false);
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const isInView = useInView(mainRef, { amount: 0.95 });

  // GSAP animation to handle to scrolling translation across the screen
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      sceneRef.current,
      { x: "-300vh", y: -400 },
      {
        y: 300,
        x: "100vw",
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={
        isInView && {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 150, damping: 12 },
        }
      }
      ref={mainRef}
      className="relative h-[350px] w-full flex flex-col justify-center fade-out-border overflow-hidden"
    >
      <div className="rounded-md bg-extra/75 backdrop-blur-[2px] w-fit p-2 shadow-onRest z-10">
        <h1 className="text-xl md:text-5xl p-5">Explore, Create, and Fly</h1>
        <p className="text-base md:text-2xl p-5 drop-shadow-md md:w-[550px]">
          Discover cutting-edge tech insights, download assets, and shop
          top-tier products — all in one place!
        </p>
      </div>

      <div ref={sceneRef} className="absolute top-0 left-0 w-full h-full">
        <Scene />
      </div>

      <button
        onClick={() => setOpenCredit(true)}
        className="group w-fit button absolute top-5 right-5"
      >
        <small className="button-child">Model</small>
      </button>

      <AnimatePresence mode="popLayout">
        {openCredit && <PlaneCredit setOpen={setOpenCredit} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlaneScene;
