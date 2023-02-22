import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import Model from './Model';


export default function MichelAngelos(): JSX.Element {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
    }
  });

  // Animation
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      // Timeline
      const timeline = gsap.timeline({ paused: true });
      // x-axis motion
      timeline.to(ballRef.current, {
        x: 1,
        duration: 2,
        ease: 'power2.out',
      });

      // y-axis motion
      timeline.to(ballRef.current, {
        y: 0.5,
        duration: 1,
        ease: 'bounce.out',
      }, '<');

      // Play
      timeline.play();
    }
  }, [ballRef.current]);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />

      {/* Car */}
      <Model />

      {/* Floor */}
      <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={['#ffffff', 0.25]} />

      {/* Spotlight light */}
      <spotLight args={['#ffffff', 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />

      {/* Environmnet */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}

export const angleToRadians = (angleInDeg: number) => (Math.PI / 180) * angleInDeg;
