import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@view/App';
import Loading from '@components/Loading/Loading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Suspense fallback={<Loading/>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
);
