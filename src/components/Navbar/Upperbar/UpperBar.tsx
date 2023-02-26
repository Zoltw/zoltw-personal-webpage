import React from 'react';
import './UpperBar.css';

export interface UpperBarProps {
  className?: string;
}

export interface UpperBarState {
  active: boolean;
}

export default class UpperBar extends React.Component<UpperBarProps, UpperBarState> {
  private static staticActive = true;

  constructor(props: UpperBarProps) {
    super(props);
    this.state = {
      active: UpperBar.staticActive,
    };
  }

  render(): JSX.Element {
    return (
      <div className={`UpperBar ${this.props.className} ${this.state.active ? 'active' : ''}`}>
        <nav className="UpperBarContent">
          <div className="title">
            <a href="#home">
              <span className="title__name">Filip Zolyniak</span>
            </a>
            <span>Software Engineer</span>
            <div className="icons">
              <a href="https://www.linkedin.com/in/filip-żołyniak-807a02267/">
                <img src="assets/img/linkedin.svg" alt="Linkedin" />
              </a>
              <a href="https://github.com/Zoltw">
                <img src="assets/img/square-github.svg" alt="Github" />
              </a>
              <a href="">
                <img src="assets/img/file-solid.svg" alt="Resume" />
              </a>
            </div>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a className="menuAnimation" href="#home">home</a>
              </li>
              <li>
                <a className="menuAnimation" href="#about">about</a>
              </li>
              <li>
                <a className="menuAnimation" href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
