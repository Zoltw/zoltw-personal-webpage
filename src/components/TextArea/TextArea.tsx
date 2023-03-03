import { ChangeEventHandler, Component } from 'react';
import React from 'react';
import './TextArea.css';

const textLengthRegex = /^.{5,256}$/;

export interface TextareaProps {
  type?: string,
  name?: string,
  placeholder?: string,
  shadows?: boolean,
  className?: string,
  useRef?: React.RefObject<HTMLInputElement>;
  correctValue?: (isCorrect: boolean) => void,
}

export interface TextareaState {
  message: string;
}

export default class Textarea extends Component<TextareaProps, TextareaState> {
  private static defaultProps: TextareaProps = {
    shadows: true,
  };

  constructor(props: TextareaProps) {
    super(props);

    this.state = {
      message: '',
    };
  }

  private validateInput: ChangeEventHandler = (event) => {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (input.name.includes('text')) {
      if (!textLengthRegex.test(value)) {
        this.setState({ message: 'Message must be beetween 5 and 256 characters' });
        this.props.correctValue?.(false);
      } else {
        this.setState({ message: '' });
        this.props.correctValue?.(true);
      }
    }
  };

  render(): JSX.Element {
    return (
      <div ref={this.props.useRef} className="textAreaContainer">
        <textarea className={this.props.className}
          name={this.props.name} placeholder={this.props.placeholder} onChange={this.validateInput} />
        <span className="message">{this.state.message}</span>
      </div>
    );
  }
}
