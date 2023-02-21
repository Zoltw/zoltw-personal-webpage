import React from 'react';
import './UpperBar.css';

export interface UpperBarProps {
  className?: string;
}

export interface UpperBarState {
  active: boolean;
}

export default class UpperBar extends React.Component<UpperBarProps, UpperBarState> {
  private static staticActive = true;

  constructor(props: UpperBarProps) {
    super(props);
    this.state = {
      active: UpperBar.staticActive,
    };
  }
}
