"use client";

import { Environment, OrbitControls } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { Model } from "./sculpture";

export default function Scene() {
  return (
    <div className="w-full h-screen relative ">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
        className="bg-yellow-900/5 aspect-square w-full  rounded-full absolute top-10 -left-5 z-0"
      ></motion.div>
      <Suspense fallback={null}>
        <Canvas>
          <OrbitControls
            autoRotate
            enableZoom={false}
            autoRotateSpeed={0.5}
            rotateSpeed={0.5}
          />
          <Environment preset="sunset" />
          <directionalLight intensity={0.5} />
          <Model scale={12} position={[0, -1.5, 0]} />
        </Canvas>
      </Suspense>
    </div>
  );
}
