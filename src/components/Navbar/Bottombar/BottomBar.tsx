import React from 'react';
import './BottomBar.css';

export interface BottomBarProps {
  className?: string;
}

export interface BottomBarState {
  active: boolean;
}

export default class BottomBar extends React.Component<BottomBarProps, BottomBarState> {
  constructor(props: BottomBarProps) {
    super(props);
    this.state = {
      active: false,
    };
  }
}
