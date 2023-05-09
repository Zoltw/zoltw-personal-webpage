import React, { HTMLAttributes } from 'react';
import './ContainerBox.css';

interface ContainerBoxProps extends HTMLAttributes<HTMLDivElement> {
  background?: boolean;
  shadows?: boolean;
  width?: string;
  className?: string;
}

const ContainerBox: React.FC<ContainerBoxProps> = ({
  background = true,
  shadows = true,
  width,
  className = '',
  children,
  ...rest
}) => {
  return (
    <section
      className={`containerBox ${className} ${background ? 'background' : ''} ${shadows ? 'shadows' : ''}`}
      style={{ width }}
      {...rest}
    >
      {children}
    </section>
  );
};

export default ContainerBox;
