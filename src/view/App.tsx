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
          // Main wrap
          <div className="MainWrap">
            {/* Header */}
            <header id="header">
              <UpperBar className="UpperBar"/>
              <BottomBar />
            </header>
            {/* Main content*/}
            <div className="MainPage">
              <div className="WelocomeSection">
                <span className="HelloDescription">He_<br />llo.</span>
                <Canvas id="three-canvas-container" shadows>
                  <MichelAngelos />
                </Canvas>
                <span className="ImDescription">I'm<br />Filip</span>
              </div>
            </div>
          </div>
      }
    </div>
  );
}
