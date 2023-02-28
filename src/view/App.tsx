import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

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
                <div className="Description">
                  <span className="HelloDescription">Hello.</span>
                  <TypeAnimation
                    className="ImDescription"
                    sequence={[
                      2000,
                      'I\'m Filip',
                      1000,
                      'I\'m Developer',
                      2000,
                      'I\'m Designer',
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: 'calc(90px + 2vmin)' }}
                  />
                </div>
                <Canvas id="three-canvas-container" shadows>
                  <MichelAngelos />
                </Canvas>
              </div>
            </div>
            <main>
              <div>
                <img src="" alt="" />
              </div>
              <section className="techStack">
                <h3>Most often i work with</h3>
                <ul>
                </ul>
                <h3>Familiar with/worked with</h3>
                <ul>
                </ul>
                <h3>During learning/wants to learn</h3>
                <ul>
                </ul>
              </section>
              <section className="about">
                <h3>About me</h3>
              </section>
              <section className="contact">
                <h3>Let's connect</h3>
              </section>
            </main>
            <footer></footer>
          </div>
      }
    </div>
  );
}
