import React from 'react';
import './FormComponent.css';

export interface FormComponentProps {
  className?: string;
  emailText?: string;
  topicText?: string;
  messaqeText?: string;
}

export default class FormComponent extends React.Component<FormComponentProps> {
  render(): JSX.Element {
    return (
      <div></div>
    );
  }
}

