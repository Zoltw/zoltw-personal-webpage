import React from 'react';
import './About.css';


export interface AboutProps {
  className?: string;
}

export class About extends React.Component<AboutProps> {
  render(): JSX.Element {
    return (
      <div className={this.props.className}>
        <h3>About me</h3>
        <div className={'about-content'}>
          <p>Computer Science student with a passion for building cool stuff.
            I enjoy working on projects that challenge me and allow me to use my creativity to come up with innovative solutions.</p>
          <p>I enjoy staying active, it helps me stay focused and energized. In my downtime, I also enjoy reading books, especially those related to psychology.
          I find that reading about human behavior and thought processes helps me understand people better,
          which in turn helps me better understand the needs of people and business</p>
        </div>
      </div>
    );
  }
}

