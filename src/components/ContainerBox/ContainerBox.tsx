import { Component, HTMLAttributes } from 'react';
import React from 'react';
import './ContainerBox.css';


export interface ContainerBoxProps extends HTMLAttributes<HTMLDivElement> {
  background?: boolean,
  shadows?: boolean,
  width?: string,
  className?: string;
}

export default class ContainerBox extends Component<ContainerBoxProps> {
  private static defaultProps: ContainerBoxProps = {
    background: true,
    shadows: true,
  };

  render(): JSX.Element {
    return (
      <section
        className={`containerBox ${this.props.className} ${this.props.background ? 'background' : ''} ${this.props.shadows ? 'shadows' : ''}`}
        style={{ width: this.props.width }}>
        {this.props.children}
      </section>
    );
  }
}

