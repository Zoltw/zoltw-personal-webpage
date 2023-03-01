import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import './App.css';
import UpperBar from '@components/Navbar/Upperbar/UpperBar';
import BottomBar from '@components/Navbar/Bottombar/BottomBar';
import MichelAngelos from '@components/MichelAngelos/MichelAngelos';
import Loading from '@components/Loading/Loading';
import TextArea from '@components/TextArea/TextArea';
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
    <div>
      {
        loading ?
          <Loading /> :
          // Main wrap
          <div id="MainWrap">
            {/* Header */}
            <header id="header">
              <UpperBar className="UpperBar"/>
            </header>
            {/* Main content*/}
            <div className="MainPage">
              <div className="Description">
                <span className="HelloDescription">Hello.</span>
              </div>
              <Canvas id="three-canvas-container" shadows>
                <MichelAngelos />
              </Canvas>
            </div>
            <TypeAnimation
              className="ImDescription"
              sequence={[
                2000,
                'I\'m Filip',
                1500,
                'I\'m Developer',
                1500,
                'I\'m Designer',
                1500,
                'I\'m Enthusiast',
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: 'calc(90px + 2vmin)' }}
            />
            <div className="line-page">
              <a href="#a">
                <img className="down-arrow" src="assets/img/arrow-down.svg" alt="" />
              </a>
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
              <h3 className="tech-title">Familiar/worked with</h3>
              <ul className="familiar-learn-grid">
                <TechStackBox src={'assets/img/techStack/python.svg'} text={'python'}/>
                <TechStackBox src={'assets/img/techStack/php-logo.svg'} text={'php'}/>
                <TechStackBox src={'assets/img/techStack/threejs-logo.svg'} text={'three.js'}/>
                <TechStackBox src={'assets/img/techStack/postgresql.svg'} text={'postgreSQL'}/>
                <TechStackBox src={'assets/img/techStack/mysql-logo.svg'} text={'mySQL'}/>
                <TechStackBox src={'assets/img/techStack/webpack.svg'} text={'webpack'}/>
                <TechStackBox src={'assets/img/techStack/esbuild.svg'} text={'esbuild'}/>
                <TechStackBox src={'assets/img/techStack/arduino.svg'} text={'embedded'}/>
                <TechStackBox src={'assets/img/techStack/adobe-photoshop.svg'} text={'photoshop'}/>
                <TechStackBox src={'assets/img/techStack/sass.svg'} text={'SCSS'}/>
              </ul>
              <h3 className="tech-title">During learning/want to learn</h3>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat elementum tincidunt.
                Donec non nunc non mauris ultricies ullamcorper. Aenean hendrerit turpis eu lectus tincidunt fermentum.</p>
            </section>
            <section className="contact">
              <h3>Let's connect</h3>
            </section>
            <footer>
              <BottomBar />
            </footer>
          </div>
      }
    </div>
  );
}
