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
  required?: boolean;
  correctValue?: (isCorrect: boolean) => void,
}

export interface TextareaState {
  messager: string;
}

export default class Textarea extends Component<TextareaProps, TextareaState> {
  private static defaultProps: TextareaProps = {
    shadows: true,
  };

  constructor(props: TextareaProps) {
    super(props);

    this.state = {
      messager: '',
    };
  }

  private validateInput: ChangeEventHandler = (event) => {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (input.name.includes('text')) {
      if (!textLengthRegex.test(value)) {
        this.setState({ messager: 'Message must be beetween 5 and 256 characters' });
        this.props.correctValue?.(false);
      } else {
        this.setState({ messager: '' });
        this.props.correctValue?.(true);
      }
    }
  };

  render(): JSX.Element {
    return (
      <div ref={this.props.useRef} className={'textAreaContainer'}>
        <textarea className={this.props.className}
          name={this.props.name}
          placeholder={this.props.placeholder}
          required={this.props.required}
          onChange={this.validateInput} />
        <span className={'message-area'}>{this.state.messager}</span>
      </div>
    );
  }
}
