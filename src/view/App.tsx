import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import './App.css';
import UpperBar from '@components/Navbars/Upperbar/UpperBar';
import BottomBar from '@components/Navbars/Bottombar/BottomBar';
import MichelAngelos from '@components/MichelAngelos/MichelAngelos';
import Loading from '@components/Loading/Loading';
import { TechStackSection } from '@components/TechStackSection/TechStackSection';
import ContainerBox from '@components/ContainerBox/ContainerBox';
import Input from '@components/Input/Input';
import Textarea from '@components/TextArea/TextArea';
import Button from '@components/Button/Button';
import { About } from '@components/About/About';
import emailjs from '@emailjs/browser';
import FileLoader from '@components/FileLoader/FileLoader';


export default function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [titleValid, setTitleValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const title = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const refForm = useRef(null!);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmail',
        'template',
        refForm.current,
        'key',
      ).then(
        () => {
          alert('Email sent!');
          window.location.reload();
        },
        (e) => {
          alert(e.text);
        },
      );
  };


  useEffect(() => {
    const handleFileLoad = async () => {
      setLoading(true);
      try {
        await fetch('public/assets/models/michel_angelos.glb');
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    if (document.readyState !== 'complete') {
      handleFileLoad();
    }
  }, ['public/assets/models/michel_angelos.glb']);

  // useEffect(() => {
  //   const xhr = new XMLHttpRequest();

  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4) {
  //       setLoading(false);
  //     }
  //   };

  //   xhr.open('GET', 'public/assets/models/michel_angelos.glb');
  //   xhr.send();
  // }, ['public/assets/models/michel_angelos.glb']);

  // useEffect(() => {
  //   const onPageLoad = () => {
  //     setLoading(false);
  //   };

  //   if (document.readyState === 'complete') {
  //     onPageLoad();
  //   } else {
  //     window.addEventListener('load', onPageLoad);
  //     return () => window.removeEventListener('load', onPageLoad);
  //   }
  // }, []);

  useEffect(() => {
    setIsFormValid(titleValid && messageValid && emailValid);
  }, [
    titleValid,
    messageValid,
    emailValid,
  ]);

  return (
    <div >
      {/* <div className="bg-noise"></div> */}
      {/* <FileLoader fileUrl='public/assets/models/michel_angelos.glb'/> */}
      {/* <div onLoad={handleFileLoad}></div> */}
      {
        loading ?
          <Loading /> :
          // Main wrap
          <div id="MainWrap">
            {/* Header */}
            <header id="header">
              <UpperBar className={'UpperBar'}/>
            </header>
            {/* Main content*/}
            <div className="MainPage" id={'home'}>
              <div className="Description">
                <span className="HelloDescription">Hello.</span>
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
              </div>
              <Canvas id="three-canvas-container" shadows>
                <MichelAngelos />
              </Canvas>
              <a href="#t">
                <img className="down-arrow" src="assets/img/arrow-down.svg" alt="" />
              </a>
              <span className={'michel-descript'}>Michelangelo (not me)</span>
            </div>
            <section className="techStack" id={'t'}>
              <TechStackSection className={'tech-section'}/>
            </section>
            <section className="about" id={'about'}>
              <About className={'about-section'}/>
            </section>
            <section className={'cool-stuff'} id={'stuff'}>
              <h3>I'm always</h3>
              <h3>interested</h3>
              <h3>about cool</h3>
              <h3>stuff.</h3>
              <h3>Are you</h3>
              <h3>minding a</h3>
              <h3>project?</h3>
            </section>
            <section className="contact" id={'contact'}>
              <div className={'contact-des'}>
                <h3>Let's connect</h3>
              </div>
              <ContainerBox className={'form-box'}>
                <form className={'form'} ref={refForm} onSubmit={sendEmail}>
                  <Input
                    useRef={email}
                    correctValue={setEmailValid}
                    type={'email'}
                    name={'email'}
                    placeholder={'Your email'}
                    required
                    className={'email'}
                  />
                  <Input
                    useRef={title}
                    correctValue={setTitleValid}
                    type={'text'}
                    name={'title'}
                    placeholder={'Title'}
                    required
                    className={'input'}
                  />
                  <Textarea
                    useRef={message}
                    correctValue={setMessageValid}
                    name={'message'}
                    placeholder={'Your message'}
                    className={'textElement'}
                  />
                  <Button text={'send'} type={'submit'}/>
                </form>
              </ContainerBox>
            </section>
            <footer className={'footer'} id={'footer'}>
              <BottomBar className={'BottomBar'}/>
            </footer>
          </div>
      }
    </div>
  );
}
