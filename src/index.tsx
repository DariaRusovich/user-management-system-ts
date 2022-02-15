import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/ButtonsStyles.css';
import './styles/CommonStyles.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
