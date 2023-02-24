import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import './App.css';
import UpperBar from '@components/Navbar/Upperbar/UpperBar';
import BottomBar from '@components/Navbar/Bottombar/BottomBar';
import MichelAngelos from '@components/MichelAngelos/MichelAngelos';


export default function App(): JSX.Element {
  return (
    <div className="App">
      <header className="AppHeader">
        <Canvas id="three-canvas-container" shadows>
          <MichelAngelos />
        </Canvas>
        <p>Hello on my webpage guys.</p>
      </header>
    </div>
  );
}
