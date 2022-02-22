import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/ButtonsStyles.css';
import './styles/CommonStyles.css';
import './styles/FormStyles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
