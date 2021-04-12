import React from 'react';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

import Home from './templates/App/index';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Home />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
