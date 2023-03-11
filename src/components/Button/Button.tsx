import { Component } from 'react';
import React from 'react';
import './Button.css';


export interface ButtonProps {
  text: string;
  typeof?: string;
  width?: string;
  onClick?: () => Promise<void> | void;
  isActive?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export interface ButtonState {
  isAwaiting: boolean;
}

export default class ButtonForm extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);

    this.state = {
      isAwaiting: false,
    };
  }

  render(): JSX.Element {
    return (
      <button
        className={this.buttonClasses}
        typeof={this.props.typeof}
        style={{ width: this.props.width }}
        onClick={this.clickHandler}
        type={this.props.type}
      >
        {this.props.text}
      </button>
    );
  }
  private get buttonClasses(): string {
    return this.joinClasses(
      this.props.className ?? '',
      this.props.isActive ? '' : 'disabled',
      this.props.type ? '' : 'button',
    );
  }

  private clickHandler = async () => {
    if (!this.props.isActive || this.state.isAwaiting) return;
    this.setState({ isAwaiting: true });

    await this.props.onClick?.();

    this.setState({ isAwaiting: false });
  };

  private joinClasses(...classes: string[]) {
    return classes.join(' ');
  }
}
