import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ReCAPTCHA from 'react-google-recaptcha';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  gsap.registerPlugin(ScrollTrigger);
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tech = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const stuff = useRef<HTMLDivElement>(null);
  const word = useRef<HTMLTitleElement>(null);
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
    gsap.fromTo(canvasRef.current, {
      xPercent: 150,
      autoAlpha: 0,
    }, {
      delay: 0.5,
      autoAlpha: 1,
      duration: 1,
      stagger: .2,
      xPercent: 0,
      ease: 'power2',
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(tech.current, {
      y: -250,
      autoAlpha: 0,
      opacity: 0,
    }, {
      delay: 1,
      opacity: 1,
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: 'slow',
      scrollTrigger: {
        trigger: '#arrow',
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(about.current, {
      y: -100,
      autoAlpha: 0,
      opacity: -1,
    }, {
      y: 0,
      delay: 1,
      opacity: 2,
      autoAlpha: 1,
      duration: 1,
      ease: 'slow',
      scrollTrigger: {
        trigger: '#about',
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(stuff.current, {
      scale: 0.5,
      y: -300,
      // x: -500,
      autoAlpha: 0,
      opacity: 0,
    }, {
      y: 0,
      // x: 0,
      scale: 1,
      delay: 1,
      opacity: 2,
      autoAlpha: 1.5,
      duration: 1,
      ease: 'slow',
      scrollTrigger: {
        trigger: '#aniH1',
        scrub: true,
      },
    });
  }, []);


  useEffect(() => {
    setIsFormValid(emailValid && titleValid && messageValid && captchaValid);
  }, [
    emailValid,
    titleValid,
    messageValid,
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
          <Canvas id="three-canvas-container" ref={canvasRef} shadows>
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
            <img className="down-arrow" src="assets/img/arrow-down.svg"/>
          </a>
          <span className={'michel-descript'}>Michelangelo (not me)</span>
        </div>
        <div id={'arrow'}></div>
        <section className="techStack" id={'t'} ref={tech}>
          <TechStackSection className={'tech-section'} id={'tech'}/>
        </section>
        <section className="about" id={'about'} ref={about}>
          <About className={'about-section'}/>
        </section>
        <section className={'cool-stuff'} id={'stuff'} ref={stuff}>
          <h3 id={'aniH1'}>I'm always</h3>
          <h3 id={'aniH2'}>interested</h3>
          <h3 id={'aniH3'}>about cool</h3>
          <h3 id={'aniH4'}>stuff.</h3>
          <h3 id={'aniH5'}>Are you</h3>
          <h3 id={'aniH6'}>minding a</h3>
          <h3 id={'aniH7'}>project?</h3>
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
                <ReCAPTCHA sitekey="key" onChange={onChange}/>
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
