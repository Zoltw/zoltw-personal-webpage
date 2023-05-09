import React from 'react';
import './BottomBar.css';

interface BottomBarProps {
  className?: string;
}

const BottomBar: React.FC<BottomBarProps> = ({ className }) => {
  const showSideBarFromBB = () => {
    const sideBar = document.querySelector('.sidebar');
    if (sideBar) {
      sideBar.classList.toggle('visible');
      sideBar.classList.toggle('hidden');
    }
  };

  return (
    <div className={`BottomBar ${className}`}>
      <nav className={'BottomBarContent'}>
        <div className={'title-down'}>
          <div className={'title-container'}>
            <a className={'menuAnimation'} href="mailto:filip.zolyniak@zoltw.com?">filip.zolyniak@zoltw.com</a>
          </div>
        </div>
        <div className={'menu'}>
          <ul>
            <li>
              <span>© 2023 zoltw</span>
            </li>
            <li>
              <a className={'menuAnimation'} onClick={showSideBarFromBB}>credits</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BottomBar;
