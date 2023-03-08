import React from 'react';
import { TechStackBox } from '@components/TechStackBox/TechStackBox';
import './TechStackSection.css';

export interface TechStackSectionProps {
  width?: string;
  className?: string;
}

export class TechStackSection extends React.Component<TechStackSectionProps> {
  render(): JSX.Element {
    return (
      <div className={this.props.className}>
        <h3 className={'tech-title'}>Most often i work with</h3>
        <ul className={'most-often-grid'}>
          <TechStackBox src={'assets/img/techStack/javascript.svg'} text={'javascript'}/>
          <TechStackBox src={'assets/img/techStack/react.svg'} text={'react.js'}/>
          <TechStackBox src={'assets/img/techStack/html-5.svg'} text={'HTML5'}/>
          <TechStackBox src={'assets/img/techStack/css3.svg'} text={'CSS3'}/>
          <TechStackBox src={'assets/img/techStack/typescript.svg'} text={'typescript'}/>
          <TechStackBox src={'assets/img/techStack/java.svg'} text={'java'}/>
          <TechStackBox src={'assets/img/techStack/c++.svg'} text={'c/c++'}/>
          <TechStackBox src={'assets/img/techStack/git.svg'} text={'git'}/>
          <TechStackBox src={'assets/img/techStack/github.svg'} text={'github'}/>
          <TechStackBox src={'assets/img/techStack/figma.svg'} text={'figma'}/>
          <TechStackBox src={'assets/img/techStack/docker.svg'} text={'docker'}/>
          <TechStackBox src={'assets/img/techStack/postgresql.svg'} text={'postgreSQL'}/>
        </ul>
        <h3 className="tech-title">Familiar/worked with</h3>
        <ul className={'most-often-grid'}>
          <TechStackBox src={'assets/img/techStack/python.svg'} text={'python'}/>
          <TechStackBox src={'assets/img/techStack/php-logo.svg'} text={'php'}/>
          <TechStackBox src={'assets/img/techStack/threejs-logo.svg'} text={'three.js'}/>
          <TechStackBox src={'assets/img/techStack/spring-boot.svg'} text={'spring boot'}/>
          <TechStackBox src={'assets/img/techStack/mysql-logo.svg'} text={'mySQL'}/>
          <TechStackBox src={'assets/img/techStack/nodejs.svg'} text={'node.js'}/>
          <TechStackBox src={'assets/img/techStack/webpack.svg'} text={'webpack'}/>
          <TechStackBox src={'assets/img/techStack/esbuild.svg'} text={'esbuild'}/>
          <TechStackBox src={'assets/img/techStack/arduino.svg'} text={'embedded'}/>
          <TechStackBox src={'assets/img/techStack/adobe-photoshop.svg'} text={'photoshop'}/>
          <TechStackBox src={'assets/img/techStack/sass.svg'} text={'SCSS'}/>
          <TechStackBox src={'assets/img/techStack/express-js.svg'} text={'express.js'}/>
        </ul>
        <h3 className="tech-title">During learning/want to learn</h3>
        <ul className={'learn-grid'}>
          <TechStackBox src={'assets/img/techStack/tailwind-css.svg'} text={'tailwindCSS'}/>
          <TechStackBox src={'assets/img/techStack/next-js.svg'} text={'next.js'}/>
          <TechStackBox src={'assets/img/techStack/tensorflow.svg'} text={'tensorflow'}/>
          <TechStackBox src={'assets/img/techStack/golang.svg'} text={'go'}/>
        </ul>
      </div>
    );
  }
}
