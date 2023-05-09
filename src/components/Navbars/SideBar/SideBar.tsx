import React from 'react';
import './SideBar.css';

interface SideBarProps {
  visible: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ visible }) => {
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
        <div className={'upper-b'}></div>
        <div className="icons">
          <a href="https://github.com/Zoltw" target="_blank" rel="noopener noreferrer">
            <img className={'side-img'} src="assets/img/square-github.svg" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/filipzolyniak/" target="_blank" rel="noopener noreferrer">
            <img className={'side-img'} src="assets/img/linkedin.svg" alt="Linkedin" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className={'side-img'} src="assets/img/file-solid.svg" alt="Resume" />
          </a>
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
};

export default SideBar;
