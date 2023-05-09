import React, { useState } from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  typeof?: string;
  width?: string;
  onClick?: () => Promise<void> | void;
  isActive?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const ButtonForm: React.FC<ButtonProps> = ({ text, typeof: typeOf, width, onClick, isActive, className, type }) => {
  const [isAwaiting, setIsAwaiting] = useState(false);

  const buttonClasses = joinClasses(
    className ?? '',
    isActive ? '' : 'disabled',
    type ? '' : 'button',
  );

  const clickHandler = async () => {
    if (!isActive || isAwaiting) return;
    setIsAwaiting(true);

    await onClick?.();

    setIsAwaiting(false);
  };

  function joinClasses(...classes: string[]) {
    return classes.join(' ');
  }

  return (
    <button
      className={buttonClasses}
      typeof={typeOf}
      style={{ width }}
      onClick={clickHandler}
      type={type}
    >
      {text}
    </button>
  );
};

export default ButtonForm;
