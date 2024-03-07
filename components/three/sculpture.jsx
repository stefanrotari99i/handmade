"use client";

import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export function Model(props) {
  const { nodes, materials } = useGLTF("/scene.glb");

  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 12, opacity: 1, transition: { duration: 1 } },
  }
  return (
    <motion.group {...props} dispose={null} variants={variants} initial="hidden" animate="visible"
    transition={{ duration: 1, delay: .3, type: "spring", stiffness: 120, damping: 10, mass: 0.5 }}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}

      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_1.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_2.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_3.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_4.geometry}
          material={materials.tex_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.model_tex_u1_v1_0_5.geometry}
          material={materials.tex_u1_v1}
        />
      </group>
    </motion.group>
  );
}

useGLTF.preload("/scene.glb");
