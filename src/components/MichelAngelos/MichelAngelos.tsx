import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Model from './Model';


export default function MichelAngelos(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const animationRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (animationRef.current.rotation.y += 0.005));
  // useFrame((state, delta) => (animationRef.current.rotation.x += 0.005));
  // useFrame((state, delta) => (animationRef.current.rotation.z += 0.005));

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 15] } />

      <mesh rotation={[0, 0, -0.7]}>
        <mesh ref={animationRef}>
          <Model position={[0, 9, 0]} />
        </mesh>
      </mesh>

      <ambientLight args={['#61dbfb', 0.05]} />
      {/* <rectAreaLight args={['#fff', 1]} /> */}
      <directionalLight args={['#61dbfb', 0.4]} />
      {/* <directionalLight args={['#fff', 0.2]} /> */}
      <pointLight args={['#fff', 0.1]} position={[0, 0, 4]} />
      <pointLight args={['#fff', 0.5]} position={[0, 0, 1]} />

      {/* <spotLight args={['#ffffff', 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow /> */}
    </>
  );
}

const angleToRadians = (angleInDeg: number) => (Math.PI / 180) * angleInDeg;
