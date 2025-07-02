"use client";
import dynamic from "next/dynamic";

const Mission = dynamic(() => import("./principlesComps/Mission"), {
  ssr: false,
});
const Vision = dynamic(() => import("./principlesComps/Vision"), {
  ssr: false,
});
const Values = dynamic(() => import("./principlesComps/Values"), {
  ssr: false,
});
const Objectives = dynamic(() => import("./principlesComps/Objectives"), {
  ssr: false,
});

/**
 *
 * This component lists all the principals that represent Nogatronik
 *
 * @returns JSX
 */
const Principles = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 p-5">
      <Mission />
      <Vision />
      <Values />
      <Objectives />
    </div>
  );
};

export default Principles;
