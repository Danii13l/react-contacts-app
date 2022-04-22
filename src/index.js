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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import { format } from 'date-fns';
// let result = format(Date.now(), 'MM/dd/yyyy');
// console.log(result);


// console.log(Date.now());