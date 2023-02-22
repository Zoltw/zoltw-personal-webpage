import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    material_0: THREE.MeshStandardMaterial
  }
};

export default function Model(props: JSX.IntrinsicElements['group']): JSX.Element {
  const { nodes, materials } = useGLTF('public/assets/michelangelos_david.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} position={[7.06, -30.64, 175.62]} rotation={[3.13, -0.08, -0.01]} scale={0} />
    </group>
  );
}

useGLTF.preload('public/assets/michelangelos_david.glb');
