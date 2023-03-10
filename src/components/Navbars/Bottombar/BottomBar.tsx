import React from 'react';
import './BottomBar.css';

export interface BottomBarProps {
  className?: string;
}

export default class BottomBar extends React.Component<BottomBarProps> {
  render(): JSX.Element {
    const showSideBarFromBB = () => {
      const sideBar = document.querySelector('.sidebar');
      if (sideBar) {
        sideBar.classList.toggle('visible');
        sideBar.classList.toggle('hidden');
      }
    };
    return (
      <div className={`BottomBar ${this.props.className}`}>
        <nav className={'BottomBarContent'}>
          <div className={'title-down'}>
            <div className={'title-container'}>
              <a className={'menuAnimation'} href="mailto:filip@zoltw.com?">filip@zoltw.com</a>
            </div>
          </div>
          <div className={'menu'}>
            <ul>
              <li>
                <span>© 2023 zoltw</span>
              </li>
              <li >
                <a className={'menuAnimation'} onClick={showSideBarFromBB}>credits</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
