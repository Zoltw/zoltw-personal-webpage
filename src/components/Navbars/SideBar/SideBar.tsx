import React, { Component, useState } from 'react';
import './SideBar.css';

interface SideBarProps {
  visible: boolean;
}

export default class SideBar extends Component<SideBarProps> {
  render(): JSX.Element {
    const { visible } = this.props;
    const hideSideBar = () => {
      const sideBar = document.querySelector('.sidebar');
      if (sideBar) {
        sideBar.classList.toggle('hidden');
        sideBar.classList.toggle('visible');
      }
    };
    return (
      <>
        <div className={`sidebar ${visible ? 'visible' : 'hidden'}`}>
          <div className={'title-side'}>
            <a className={'side-title'} href="#home">
              <span className="title-name">Filip Zolyniak</span>
            </a>
            <img className={'x-mark'} src="assets/img/xmark.svg" onClick={hideSideBar} />
          </div>
          <div className={'bottom-b'}></div>
          <div className={'links'}>
            <ul className={'side-list'}>
              <li className={'side-pointers'}>
                <a className="menuAnimation" href="https://github.com/Zoltw">github</a>
              </li>
              <li className={'side-pointers'}>
                <a className="menuAnimation" href="https://www.linkedin.com/in/filip-żołyniak-807a02267/">linkedin</a>
              </li>
            </ul>
          </div>
          <div className={'bottom-b'}></div>
          <div className={'credits'}>
            <p>Credits</p>
            <ul className={'side-credits'}>
              <li className={'side-po'}>
                <span>WebGL model:</span>
                <a className="menuAnimation-credits"
                  href="https://sketchfab.com/3d-models/head-of-david-but-with-hay-585af747e89f4e78afda322c487a5059">MICHEL ANGELOS</a>
              </li>
              <li className={'side-po'}>
                <span>Icons:</span><br/>
                <a className="menuAnimation-credits"
                  href="https://icons8.com/">Icon8</a>
              </li>
            </ul>
            <span className={'pers'}>Personal use only. Not commercial use.</span>
          </div>
        </div>
      </>
    );
  }
}
