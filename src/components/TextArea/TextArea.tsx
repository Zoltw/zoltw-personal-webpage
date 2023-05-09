import React, { ChangeEventHandler, RefObject, TextareaHTMLAttributes, useState } from 'react';
import './TextArea.css';

const textLengthRegex = /^.{5,256}$/;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  useRef?: RefObject<HTMLInputElement>;
  correctValue?: (isCorrect: boolean) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  useRef,
  correctValue,
  ...props
}) => {
  const [messager, setMessager] = useState('');

  const validateInput: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault();
    const value = event.target.value;

    if (event.target.name.includes('text')) {
      if (!textLengthRegex.test(value)) {
        setMessager('Message must be beetween 5 and 256 characters');
        correctValue?.(false);
      } else {
        setMessager('');
        correctValue?.(true);
      }
    }
  };

  return (
    <div ref={useRef} className={'textAreaContainer'}>
      <textarea
        {...props}
        onChange={validateInput}
      />
      <span className={'message-area'}>{messager}</span>
    </div>
  );
};

export default Textarea;
