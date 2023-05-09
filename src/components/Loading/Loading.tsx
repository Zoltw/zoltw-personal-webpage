import React from 'react';
import './Loading.css';


const Loading = (): JSX.Element => {
  return (
    <div className="Loading">
      <div className="HideImg">
        <img className="MichelLoading" src="assets/img/MichelAngelosLoading.png" alt="Michel Angelos" />
      </div>
    </div>
  );
};

export default Loading;
