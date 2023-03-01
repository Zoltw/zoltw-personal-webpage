import React from 'react';
import './BottomBar.css';

export interface BottomBarProps {
  className?: string;
}

export default class BottomBar extends React.Component<BottomBarProps> {
  render(): JSX.Element {
    return (
      <div className={`UpperBar ${this.props.className}`}>
        <nav className="UpperBarContent">
          <div className="title">
            <div className="title-container">
              <a className="menuAnimation" href="mailto:filip@zoltw.com?">filip@zoltw.com</a>
            </div>
          </div>
          <div className="menu">
            <ul>
              <li>
                <span >© 2023 zoltw</span>
              </li>
              <li >
                <a className="menuAnimation" href="#t">credits</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
