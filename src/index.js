import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import './fonts/Roboto-Bold.woff';
import './fonts/Roboto-Light.woff';
import './fonts/Roboto-Regular.woff';

import './fonts/Roboto-Bold.woff2';
import './fonts/Roboto-Light.woff2';
import './fonts/Roboto-Regular.woff2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
