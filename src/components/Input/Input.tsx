import React from 'react';
import { ChangeEventHandler, Component, createRef, RefObject } from 'react';
import './Input.css';

// eslint-disable-next-line max-len, no-useless-escape
const validEmailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/);

export interface InputProps {
  type?: string,
  name?: string,
  placeholder?: string,
  shadows?: boolean,
  className?: string,
  focus?: boolean,
  id?: string,
  autoComplete?: string;
  required?: boolean;
  useRef?: RefObject<HTMLInputElement>;
  correctValue?: (isCorrect: boolean) => void,
  sibling?: RefObject<HTMLInputElement>,
}

export interface InputState {
  message: string;
}

export default class Inputs extends Component<InputProps, InputState> {
  private inputRef: RefObject<HTMLInputElement>;

  private static defaultProps: InputProps = {
    shadows: true,
    focus: false,
  };

  constructor(props: InputProps) {
    super(props);
    this.props.correctValue?.(false);

    this.state = {
      message: '',
    };

    if (this.props.useRef === undefined) this.inputRef = createRef();
    else this.inputRef = this.props.useRef;
  }

  private validateSiblings = (): boolean => {
    if (this.props.sibling === undefined) return true;

    const input = this.inputRef.current;
    const sibling = this.props.sibling?.current;

    if (!input || !sibling) return false;

    return input.value === sibling.value;
  };

  private changeEventHandler: ChangeEventHandler = (event) => {
    event.preventDefault();
    this.validateInput();
  };

  private validateInput = () => {
    const input = this.inputRef.current;
    if (!input) return;

    const value = input.value;
    if (value.length === 0) return this.props.correctValue?.(false);

    if (input.name.includes('email')) {
      if (!validEmailRegex.test(value)) {
        this.setState({ message: 'Email is not valid' });
        this.props.correctValue?.(false);
      } else if (value.length > 64) {
        this.setState({ message: 'Email is too long' });
        this.props.correctValue?.(false);
      } else {
        this.setState({ message: '' });
        this.props.correctValue?.(true);
      }
    }


    if (input.name.includes('title')) {
      if (value.length > 64) {
        this.setState({ message: 'Title is too long' });
        this.props.correctValue?.(false);
      } else if (value.length < 5) {
        this.setState({ message: 'Title is too short' });
        this.props.correctValue?.(false);
      } else {
        this.setState({ message: '' });
        this.props.correctValue?.(true);
      }
    }
  };

  public componentDidMount(): void {
    if (this.props.sibling) {
      this.props.sibling.current?.addEventListener('input', this.validateInput);
    }
  }

  public componentWillUnmount(): void {
    if (this.props.sibling) {
      this.props.sibling.current?.removeEventListener('input', this.validateInput);
    }
  }

  render(): JSX.Element {
    return (
      <div className={'input-container'}>
        <input
          ref={this.props.useRef}
          className={`input ${this.props.className} ${this.props.shadows ? 'shadows' : ''}`}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          autoFocus={this.props.focus}
          id={this.props.id}
          autoComplete={this.props.autoComplete}
          required={this.props.required}
          onChange={this.changeEventHandler}
        />
        <span className={'message'}>{this.state.message}</span>
      </div>
    );
  }
}

