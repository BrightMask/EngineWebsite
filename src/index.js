// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import { LoaclProvider } from 'antd'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './store'
 import {createStore, applyMiddleware} from 'redux'

import App from './App'
import './assets/style/common.css'

const middleWare = [thunk]
const store = createStore(reducer, applyMiddleware(...middleWare))

ReactDom.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
