// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import { LoaclProvider } from 'antd'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './store'
 import {createStore, applyMiddleware} from 'redux'

import AdminPage from './adminApp'
import './assets/style/common.css'

const middleWare = [thunk]
const store = createStore(reducer, applyMiddleware(...middleWare))

ReactDom.render(
   <Provider store={store}>
      <AdminPage />
   </Provider>,
   document.getElementById('root')
);
