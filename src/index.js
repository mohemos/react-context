import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {GlobalProvider} from './utils/context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
