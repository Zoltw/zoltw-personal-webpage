import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import './App.css';
import UpperBar from '@components/Navbar/Upperbar/UpperBar';
import BottomBar from '@components/Navbar/Bottombar/BottomBar';
import MichelAngelos from '@components/MichelAngelos/MichelAngelos';
import Loading from '@components/Loading/Loading';


export default function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <div className="BackgroundNoise"></div>
      {
        loading ?

          <Loading /> :

          <header className="AppHeader">
            <Canvas id="three-canvas-container" className="canvas" shadows>
              <MichelAngelos />
            </Canvas>
            <p>Hello on my webpage guys.</p>
          </header>
      }
    </div>
  );
}
