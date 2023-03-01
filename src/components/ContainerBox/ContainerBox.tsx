import React from 'react';
import './ContainerBox.css';

export interface ContainerBoxProps {
  className?: string;

}

export default class ContainerBox extends React.Component<ContainerBoxProps> {
  render(): JSX.Element {
    return (
      <div></div>
    );
  }
}

