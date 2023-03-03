import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    meshNode_Material_u1_v1_0: THREE.Mesh
    meshNode_Material_u1_v1_0_1: THREE.Mesh
  }
  materials: {
    Material_u1_v1: THREE.MeshStandardMaterial
  }
};

export default function Model(props: JSX.IntrinsicElements['group']): JSX.Element {
  const { nodes, materials } = useGLTF('assets/models/michel_angelos.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[2.23, -22.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 14, 0]}>
          <group position={[0, 16.79, 0.13]} rotation={[-Math.PI / 2, 0, 0]} scale={126.29}>
            <mesh geometry={nodes.meshNode_Material_u1_v1_0.geometry} material={materials.Material_u1_v1} />
            <mesh geometry={nodes.meshNode_Material_u1_v1_0_1.geometry} material={materials.Material_u1_v1} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('assets/models/michel_angelos.glb');
