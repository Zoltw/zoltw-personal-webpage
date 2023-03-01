import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Model from './Model';


export default function MichelAngelos(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const animationRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (animationRef.current.rotation.y += 0.01));

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 35]} />

      <mesh ref={animationRef}>
        <Model position={[0, 11, 0]}/>
      </mesh>

      <ambientLight args={['#61dbfb', 0.3]} />

      <spotLight args={['#ffffff', 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />
    </>
  );
}

const angleToRadians = (angleInDeg: number) => (Math.PI / 180) * angleInDeg;
