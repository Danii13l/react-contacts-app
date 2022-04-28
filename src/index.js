// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// report
import reportWebVitals from './reportWebVitals';
// router
import { BrowserRouter } from 'react-router-dom';
// components
import App from './App';
// css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
