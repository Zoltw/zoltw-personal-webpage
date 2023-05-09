import React from 'react';
import './About.css';


interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div className={className}>
      <h3>About me</h3>
      <div className={'about-content'}>
        <p>Computer Science student with a passion for building cool stuff.
          I enjoy working on projects that challenge me and allow me to use my creativity to come up with innovative solutions.</p>
        <p>I enjoy staying active, it helps me stay focused and energized. In my downtime, I also enjoy reading books, especially those related to psychology.
        I find that reading about human behavior and thought processes helps me better understand the needs of people and business</p>
      </div>
    </div>
  );
};

export default About;
