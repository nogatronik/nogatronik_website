"use client";
import React, { Suspense } from "react";
// import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

/**
 *
 * This component displays the canvas of the plane model
 *
 * @returns JSX
 */
const Scene = () => {
  return (
    <Canvas className="cursor-grabbing h-full w-full">
      <ambientLight intensity={2} />
      <directionalLight position={[2, 1, 1]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
