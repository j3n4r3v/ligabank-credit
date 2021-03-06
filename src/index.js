import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { createStore} from 'redux';
import { Provider } from 'react-redux';
import {reducer} from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.scss';

const store = createStore(reducer, 
  composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

