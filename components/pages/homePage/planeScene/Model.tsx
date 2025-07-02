"use client";

import React, { useEffect, useRef } from "react";
import {
  useGLTF,
  useAnimations,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { Group } from "three";

useGLTF.preload("/plane_model.glb");

/**
 *
 * This component displays the model of the plane
 *
 * @returns JSX
 */
const Model = () => {
  // Variables
  const cameraGroup = useRef<Group>(null);
  const modelRef = useRef(null);
  const { animations, scene } = useGLTF("/plane_model.glb");
  const { actions } = useAnimations(animations, modelRef);

  // Animation of plane
  useEffect(() => {
    actions["Take 001"]!.play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <PerspectiveCamera makeDefault position={[-5, 2, 10]} fov={6} />
      <group ref={cameraGroup}>
        <primitive object={scene} ref={modelRef} />
      </group>
    </>
  );
};

export default Model;
