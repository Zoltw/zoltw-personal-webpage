import React from 'react';
import './UpperBar.css';

export interface UpperBarProps {
  className?: string;
  id?: string;
}
export default class UpperBar extends React.Component<UpperBarProps> {
  render(): JSX.Element {
    return (
      <div className={`UpperBar ${this.props.className}`} id={this.props.id}>
        <nav className={'UpperBarContent'}>
          <div className={'burger'}>
            <img src="assets/img/burger.svg" alt="" />
            <a href=""></a>
          </div>
          <div className={'title'}>
            <div className={'title-container'}>
              <a href="#home">
                <span className="title-name">Filip Zolyniak</span>
              </a>
              <span>Software Engineer</span>
            </div>
            <div className="icons">
              <a href="https://github.com/Zoltw" target="_blank" rel="noopener noreferrer">
                <img src="assets/img/square-github.svg" alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/filip-żołyniak-807a02267/" target="_blank" rel="noopener noreferrer">
                <img src="assets/img/linkedin.svg" alt="Linkedin" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
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
