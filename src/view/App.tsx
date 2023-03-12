import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ReCAPTCHA from 'react-google-recaptcha';
import gsap from 'gsap';

import './App.css';
import UpperBar from '@components/Navbars/Upperbar/UpperBar';
import BottomBar from '@components/Navbars/Bottombar/BottomBar';
import MichelAngelos from '@components/MichelAngelos/MichelAngelos';
import { TechStackSection } from '@components/TechStackSection/TechStackSection';
import ContainerBox from '@components/ContainerBox/ContainerBox';
import Input from '@components/Input/Input';
import Textarea from '@components/TextArea/TextArea';
import Button from '@components/Button/Button';
import { About } from '@components/About/About';
import emailjs from '@emailjs/browser';
import Sidebar from '@components/Navbars/SideBar/SideBar';


export default function App(): JSX.Element {
  const [titleValid, setTitleValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSideBarVisible, setSideBarVisible] = useState(false);
  const title = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  const refForm = useRef(null!);
  const textRef = useRef<HTMLSpanElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);
  const onChange = () => {
    setCaptchaValid(true);
  };

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
    gsap.fromTo(textRef.current, {
      yPercent: 150,
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      duration: 1,
      stagger: .2,
      yPercent: 0,
      ease: 'power4',
    });
    gsap.from(headerRef.current, {
      y: -100,
    });
    gsap.to(headerRef.current, {
      delay: 1,
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power1.out',
    });
  }, []);

  useEffect(() => {
    setIsFormValid(titleValid && messageValid && emailValid && captchaValid);
  }, [
    titleValid,
    messageValid,
    emailValid,
    captchaValid,
  ]);

  return (
    <>
      {/* Main wrap */}
      <div id="MainWrap">
        {/* Header */}
        <header id="header" ref={headerRef}>
          <UpperBar className={'UpperBar'}/>
        </header>
        <Sidebar visible={isSideBarVisible}/>
        {/* Main content*/}
        <div className="MainPage" id={'home'}>
          <Canvas id="three-canvas-container" shadows>
            <MichelAngelos />
          </Canvas>
          <div className="Description">
            <span className="HelloDescription" ref={textRef}>Hello.</span>
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
          <h3 id={'aniH3'}>I'm always</h3>
          <h3 id={'aniH3'}>interested</h3>
          <h3 id={'aniH3'}>about cool</h3>
          <h3 id={'aniH3'}>stuff.</h3>
          <h3 id={'aniH3'}>Are you</h3>
          <h3 id={'aniH3'}>minding a</h3>
          <h3 id={'aniH3'}>project?</h3>
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
                name={'textSupp'}
                placeholder={'Your message...'}
                required
                className={'textElement'}
              />
              <div className={'captcha'}>
                <ReCAPTCHA sitekey="6LeYAO8kAAAAACf1FzZcVumSrUQPvgniHkhp1VF_" onClick={onChange}/>
                <Button isActive={isFormValid} text={'send'} />
              </div>
            </form>
          </ContainerBox>
        </section>
        <footer className={'footer'} id={'footer'}>
          <BottomBar className={'BottomBar'}/>
        </footer>
      </div>
    </>
  );
}
