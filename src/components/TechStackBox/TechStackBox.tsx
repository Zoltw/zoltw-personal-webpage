import React from 'react';
import './TechStackBox.css';

interface TechStackBoxProps {
  text: string;
  alt?: string;
  src?: string;
}

const TechStackBox: React.FC<TechStackBoxProps> = ({ text, alt, src }) => {
  return (
    <li className={'box-container'}>
      <img src={src} className={'box-image'} alt={alt}/>
      {text}
    </li>
  );
};

export default TechStackBox;
