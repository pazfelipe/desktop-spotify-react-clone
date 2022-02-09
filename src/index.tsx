import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.scss';

import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";

import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);