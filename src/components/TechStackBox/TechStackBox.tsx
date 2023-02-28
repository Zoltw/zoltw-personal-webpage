import React from 'react';
import './TechStackBox.css';

export interface TechStackBoxProps {
  text: string;
  width?: string;
  className?: string;
  alt?: string;
  src?: string;
}

export class TechStackBox extends React.Component<TechStackBoxProps> {
  render(): JSX.Element {
    return (
      <li className="box-container" style={{ width: this.props.width }} >
        <img src={this.props.src} className="box-image" alt={this.props.alt}/>
        {this.props.text}
      </li>
    );
  }
}
