import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { App } from 'src/app';
import 'src/styles/styles.css';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root'),
);
