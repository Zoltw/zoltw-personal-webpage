import { Component } from 'react';
import React from 'react';
import './Button.css';


export interface ButtonProps {
  text: string;
  typeof?: string;
  width?: string;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

// export interface ButtonState {
//   isAwaiting: boolean;
// }

export default class ButtonForm extends Component<ButtonProps> {
  render(): JSX.Element {
    return (
      <button
        className={this.props.className}
        typeof={this.props.typeof}
        style={{ width: this.props.width }}
        type={this.props.type}
      >
        {this.props.text}
      </button>
    );
  }
}
