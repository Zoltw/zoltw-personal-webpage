import React, { useReducer, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ReCAPTCHA from 'react-google-recaptcha';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';
import UpperBar from '@components/Navbars/Upperbar/UpperBar';
import BottomBar from '@components/Navbars/Bottombar/BottomBar';
import MichelAngelos from '@components/MichelAngelos/MichelAngelos';
import TechStackSection from '@components/TechStackSection/TechStackSection';
import ContainerBox from '@components/ContainerBox/ContainerBox';
import Input from '@components/Input/Input';
import Textarea from '@components/TextArea/TextArea';
import Button from '@components/Button/Button';
import About from '@components/About/About';
import emailjs from '@emailjs/browser';
import Sidebar from '@components/Navbars/SideBar/SideBar';


const initialState = {
  titleValid: false,
  messageValid: false,
  emailValid: false,
  captchaValid: false,
  isFormValid: false,
  isSideBarVisible: false,
};

const reducer = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'SET_TITLE_VALID':
      return { ...state, titleValid: action.payload };
    case 'SET_MESSAGE_VALID':
      return { ...state, messageValid: action.payload };
    case 'SET_EMAIL_VALID':
      return { ...state, emailValid: action.payload };
    case 'SET_CAPTCHA_VALID':
      return { ...state, captchaValid: action.payload };
    case 'SET_FORM_VALID':
      return { ...state, isFormValid: action.payload };
    case 'SET_SIDEBAR_VISIBLE':
      return { ...state, isSideBarVisible: action.payload };
    default:
      throw new Error('Invalid action type');
  }
};


const App = (): JSX.Element => {
  gsap.registerPlugin(ScrollTrigger);

  const [state, dispatch] = useReducer(reducer, initialState);

  const title = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLInputElement>(null);
  const refForm = useRef<HTMLFormElement>(null!);
  const textRef = useRef<HTMLSpanElement>(null);
  const headerRef = useRef<HTMLHeadElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tech = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const stuff = useRef<HTMLDivElement>(null);

  const onChange = () => {
    dispatch({ type: 'SET_CAPTCHA_VALID', payload: true });
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
      // xPercent: 150,
      autoAlpha: 0,
    }, {
      delay: 0.5,
      autoAlpha: 1,
      duration: 1,
      stagger: .2,
      // xPercent: 0,
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
    dispatch({
      type: 'SET_FORM_VALID',
      payload: state.emailValid && state.titleValid && state.messageValid && state.captchaValid,
    });
  }, [
    state.emailValid,
    state.titleValid,
    state.messageValid,
    state.captchaValid,
  ]);


  return (
    <>
      {/* Main wrap */}
      <div id="MainWrap">
        {/* Header */}
        <header id="header" ref={headerRef}>
          <UpperBar className={'UpperBar'}/>
        </header>
        <Sidebar visible={state.isSideBarVisible}/>
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
                correctValue={(value) => dispatch({ type: 'SET_EMAIL_VALID', payload: value })}
                type={'email'}
                name={'email'}
                placeholder={'Your email'}
                required
                className={'email'}
              />
              <Input
                useRef={title}
                correctValue={(value) => dispatch({ type: 'SET_TITLE_VALID', payload: value })}
                type={'text'}
                name={'title'}
                placeholder={'Title'}
                required
                className={'input'}
              />
              <Textarea
                useRef={message}
                correctValue={(value) => dispatch({ type: 'SET_MESSAGE_VALID', payload: value })}
                name={'textSupp'}
                placeholder={'Your message...'}
                required
                className={'textElement'}
              />
              <div className={'captcha'}>
                <ReCAPTCHA sitekey="key" onChange={onChange}/>
                <Button isActive={state.isFormValid} text={'send'} />
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
};

export default App;
