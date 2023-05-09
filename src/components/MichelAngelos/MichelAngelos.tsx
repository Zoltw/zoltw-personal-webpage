import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Model from './Model';
import { Vector3 } from 'three';


const MichelAngelos = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const animationRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (animationRef.current.rotation.y += 0.005));

  function getWidth(): number {
    if (window.innerWidth) {
      return window.innerWidth;
    }
    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }
    if (document.body) {
      return document.body.clientWidth;
    }
    return 0;
  }

  const cameraPosition = getWidth() < 450 ? new Vector3(0, 1, 26) : new Vector3(0, 1, 15);
  return (
    <>
      <PerspectiveCamera makeDefault position={cameraPosition}/>

      <mesh rotation={[0, 0, -0.7]}>
        <mesh ref={animationRef}>
          <Model position={[0, 9, 0]} />
        </mesh>
      </mesh>

      <ambientLight args={['#61dbfb', 0.05]} />
      <directionalLight args={['#61dbfb', 0.4]} />
      <pointLight args={['#fff', 0.1]} position={[0, 0, 4]} />
      <pointLight args={['#fff', 0.5]} position={[0, 0, 1]} />
    </>
  );
};

export default MichelAngelos;
