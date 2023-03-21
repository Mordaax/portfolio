/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF(props.file);
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0
    })
  }, [])
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ObjObject.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>

  );
}

useGLTF.preload("/gameboy.glb");