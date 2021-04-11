import React from 'react';

import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/global-styles';

import Home from './templates/App/index';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />

    <Home />
  </React.StrictMode>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
