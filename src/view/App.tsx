import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import './App.css';
import UpperBar from '@components/Navbar/Upperbar/UpperBar';
import BottomBar from '@components/Navbar/Bottombar/BottomBar';
import MichelAngelos from '@components/MichelAngelos/MichelAngelos';
import Loading from '@components/Loading/Loading';
import { TechStackBox } from '@components/TechStackBox/TechStackBox';


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
                <h3 className="tech-title">Most often i work with</h3>
                <ul className="most-often-grid">
                  <TechStackBox src={'assets/img/techStack/javascript.svg'} text={'javascript'}/>
                  <TechStackBox src={'assets/img/techStack/react.svg'} text={'react.js'}/>
                  <TechStackBox src={'assets/img/techStack/html-5.svg'} text={'HTML5'}/>
                  <TechStackBox src={'assets/img/techStack/css3.svg'} text={'CSS3'}/>
                  <TechStackBox src={'assets/img/techStack/typescript.svg'} text={'typescript'}/>
                  <TechStackBox src={'assets/img/techStack/java.svg'} text={'java'}/>
                  <TechStackBox src={'assets/img/techStack/c++.svg'} text={'c/c++'}/>
                  <TechStackBox src={'assets/img/techStack/git.svg'} text={'git'}/>
                  <TechStackBox src={'assets/img/techStack/github.svg'} text={'github'}/>
                  <TechStackBox src={'assets/img/techStack/figma.svg'} text={'figma'}/>
                  <TechStackBox src={'assets/img/techStack/docker.svg'} text={'docker'}/>
                  <TechStackBox src={'assets/img/techStack/apple-logo.svg'} text={'macOS'}/>
                </ul>
                <h3 className="tech-title">Familiar with/worked with</h3>
                <ul className="familiar-learn-grid">
                  <TechStackBox src={'assets/img/techStack/python.svg'} text={'python'}/>
                  <TechStackBox src={'assets/img/techStack/php-logo.svg'} text={'php'}/>
                  <TechStackBox src={'assets/img/techStack/threejs-logo.svg'} text={'three.js'}/>
                  <TechStackBox src={'assets/img/techStack/postgresql.svg'} text={'postgreSQL'}/>
                  <TechStackBox src={'assets/img/techStack/mysql-logo.svg'} text={'mySQL'}/>
                  <TechStackBox src={'assets/img/techStack/webpack.svg'} text={'webpack'}/>
                  <TechStackBox src={'assets/img/techStack/apple-logo.svg'} text={'esbuild'}/>
                  <TechStackBox src={'assets/img/techStack/arduino.svg'} text={'embedded'}/>
                  <TechStackBox src={'assets/img/techStack/adobe-photoshop.svg'} text={'photoshop'}/>
                  <TechStackBox src={'assets/img/techStack/sass.svg'} text={'SCSS'}/>
                </ul>
                <h3 className="tech-title">During learning/wants to learn</h3>
                <ul className="familiar-learn-grid">
                  <TechStackBox src={'assets/img/techStack/tailwind-css.svg'} text={'tailwindCSS'}/>
                  <TechStackBox src={'assets/img/techStack/next-js.svg'} text={'next.js'}/>
                  <TechStackBox src={'assets/img/techStack/nodejs.svg'} text={'node.js'}/>
                  <TechStackBox src={'assets/img/techStack/express-js.svg'} text={'express.js'}/>
                  <TechStackBox src={'assets/img/techStack/golang.svg'} text={'go'}/>
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
